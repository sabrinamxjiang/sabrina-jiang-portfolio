document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const siteHeader = document.querySelector('.site-header');
const aboutSection = document.getElementById('about');
let headerFrame;

const updateHeader = () => {
  if (!siteHeader || !aboutSection) return;
  const showAt = aboutSection.offsetTop - siteHeader.offsetHeight - 24;
  siteHeader.classList.toggle('is-visible', window.scrollY >= showAt);
};

const queueHeaderUpdate = () => {
  if (headerFrame) return;
  headerFrame = requestAnimationFrame(() => {
    headerFrame = null;
    updateHeader();
  });
};

updateHeader();
window.addEventListener('scroll', queueHeaderUpdate, { passive: true });
window.addEventListener('resize', queueHeaderUpdate);

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  const captions = [...carousel.querySelectorAll('[data-carousel-caption]')];
  const containsVideo = ['video', 'mixed'].includes(carousel.dataset.kind);
  const resetAudioOnSlideChange = carousel.classList.contains('dance-carousel');
  const autoSequence = carousel.hasAttribute('data-auto-sequence');
  const photoDelay = Number(carousel.dataset.photoDelay || 3000);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer;
  let touchStartX = 0;
  let sequenceSuspended = false;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let pointerId = null;
  const viewport = carousel.querySelector('.carousel-viewport');

  const syncDanceViewportRatio = () => {
    if (!viewport || !carousel.classList.contains('dance-carousel')) return;
    if (!window.matchMedia('(max-width: 820px)').matches) {
      viewport.style.removeProperty('--active-media-ratio');
      return;
    }

    const media = slides[activeIndex]?.querySelector('img, video');
    if (!media) return;
    const width = media.tagName === 'VIDEO' ? media.videoWidth : media.naturalWidth;
    const height = media.tagName === 'VIDEO' ? media.videoHeight : media.naturalHeight;
    if (width && height) {
      viewport.style.setProperty('--active-media-ratio', `${width} / ${height}`);
      return;
    }

    const readyEvent = media.tagName === 'VIDEO' ? 'loadedmetadata' : 'load';
    media.addEventListener(readyEvent, syncDanceViewportRatio, { once: true });
  };

  const scheduleAdvance = () => {
    window.clearTimeout(timer);
    if (!autoSequence || reduceMotion || sequenceSuspended) return;

    const activeSlide = slides[activeIndex];
    const activeVideo = activeSlide.querySelector('video');
    if (activeVideo) {
      activeVideo.onended = () => {
        if (!sequenceSuspended) showSlide(activeIndex + 1);
      };
      if (activeVideo.ended) timer = window.setTimeout(() => showSlide(activeIndex + 1), 0);
      return;
    }

    timer = window.setTimeout(() => showSlide(activeIndex + 1), photoDelay);
  };

  const showSlide = (nextIndex, userInitiated = false) => {
    window.clearTimeout(timer);
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));

      if (containsVideo) {
        const video = slide.querySelector('video');
        if (!video) return;
        video.onended = null;
        if (active) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          if (resetAudioOnSlideChange) video.muted = true;
        }
      }
    });

    dots.forEach((dot, index) => {
      const active = index === activeIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', String(active));
    });

    captions.forEach((caption, index) => {
      const active = index === activeIndex;
      caption.classList.toggle('is-active', active);
      caption.setAttribute('aria-hidden', String(!active));
    });

    syncDanceViewportRatio();

    scheduleAdvance();
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index, true);
    });
  });

  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
    if (event.target.closest('video')) suspendSequence();
  }, { passive: true });

  carousel.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(activeIndex + (distance < 0 ? 1 : -1), true);
  }, { passive: true });

  const suspendSequence = () => {
    sequenceSuspended = true;
    window.clearTimeout(timer);
  };
  const resumeSequence = () => {
    sequenceSuspended = false;
    scheduleAdvance();
  };

  const finishPointerDrag = (event) => {
    if (pointerId === null || event.pointerId !== pointerId) return;
    const distanceX = event.clientX - pointerStartX;
    const distanceY = event.clientY - pointerStartY;
    pointerId = null;
    viewport?.classList.remove('is-dragging');
    if (Math.abs(distanceX) >= 45 && Math.abs(distanceX) > Math.abs(distanceY) * 1.2) {
      showSlide(activeIndex + (distanceX < 0 ? 1 : -1), true);
    }
  };

  viewport?.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || event.button !== 0) return;
    const video = event.target.closest('video');
    if (video) {
      const videoRect = video.getBoundingClientRect();
      if (event.clientY >= videoRect.bottom - 72) return;
    }
    pointerId = event.pointerId;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    viewport.classList.add('is-dragging');
    suspendSequence();
    viewport.setPointerCapture?.(event.pointerId);
  });
  viewport?.addEventListener('dragstart', (event) => event.preventDefault());
  viewport?.addEventListener('pointerup', finishPointerDrag);
  viewport?.addEventListener('pointercancel', (event) => {
    if (event.pointerId !== pointerId) return;
    pointerId = null;
    viewport.classList.remove('is-dragging');
  });

  carousel.addEventListener('mouseenter', suspendSequence);
  carousel.addEventListener('mouseleave', resumeSequence);
  carousel.addEventListener('focusin', suspendSequence);
  carousel.addEventListener('focusout', resumeSequence);
  carousel.querySelectorAll('video').forEach((video) => {
    video.addEventListener('pointerdown', suspendSequence);
  });

  if (containsVideo) {
    const muteWhenOffscreen = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.2) {
        carousel.querySelectorAll('video').forEach((video) => {
          video.muted = true;
        });
      }
    }, { threshold: [0, 0.2] });
    muteWhenOffscreen.observe(carousel);
  }

  if (autoSequence) {
    const pauseSequenceOffscreen = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.15) {
        sequenceSuspended = true;
        window.clearTimeout(timer);
        return;
      }
      sequenceSuspended = false;
      scheduleAdvance();
    }, { threshold: [0, 0.15] });
    pauseSequenceOffscreen.observe(carousel);
  }

  showSlide(0);
  window.addEventListener('resize', syncDanceViewportRatio);
});
