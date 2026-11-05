# Sabrina Jiang — Supply Chain Portfolio

這是 Sabrina Jiang 的英文 Supply Chain 作品集，面向招聘者與專業合作對象。專案以 `Sabrina_Jiang_Work_Portfolio_Website_Minimal_v23.zip` 為基礎，目前工作版本為 v53，可直接在 Codex Desktop 開啟資料夾繼續修改。

網站為單頁連續捲動，保留 `index.html`、全部素材、LinkedIn、Email、anchor links、手機版與淡入效果。首頁 About 入口完整顯示 Space Needle；Pao Yuan Experience 包含 Converse Store Manager Meeting 輪播；Projects 使用 1–3 編號與成果導向標題，第三案採用兩位同事參與簡報的會議照片。Shiseido、Pao Yuan、Dance、Sunny 四組輪播均支援圓點、手機左右滑動與桌面滑鼠拖曳。全站 Email 為 `sabrina.mx.jiang@gmail.com`。

正式網站：<https://sabrinamxjiang.github.io/sabrina-jiang-portfolio/>

GitHub repository：<https://github.com/sabrinamxjiang/sabrina-jiang-portfolio>

## 本機預覽

### Mac 一鍵開啟

1. 解壓 ZIP，打開 `Sabrina_Jiang_Portfolio_Codex_Project` 資料夾。
2. 雙擊 `Open Portfolio.command`。
3. 第一次若 macOS 阻擋，請右鍵該檔案 → Open／打開，再確認一次。
4. 瀏覽器通常會開啟 http://127.0.0.1:8000/；若 8000 已被其他程式使用，啟動檔會自動選擇 8001–8010。瀏覽期間請保持 Terminal 視窗開啟；按 Control-C 可關閉預覽。

啟動檔只會在本機執行 Python 靜態伺服器並開啟瀏覽器，不會上傳或公開網站。

### 終端機手動開啟

1. 解壓 ZIP，開啟 `Sabrina_Jiang_Portfolio_Codex_Project` 資料夾。
2. 確認根目錄直接看得到 `index.html`。
3. 在專案根目錄開啟終端機並執行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

4. 在瀏覽器開啟 http://127.0.0.1:8000/；停止伺服器時按 Ctrl+C。

網站不需要 npm、框架或建置。直接雙擊 `index.html` 可初步查看，但正式驗證建議使用本機 HTTP。Google Fonts 需要網路；離線時標題會回退 Georgia，內文會回退 Arial／系統 sans-serif，換行可能不同。

### 使用 iPhone 實際確認手機版

1. Mac 與 iPhone 連上同一個 Wi‑Fi。
2. 在專案根目錄執行 `python3 -m http.server 8000 --bind 0.0.0.0`。
3. 在 Mac 終端機執行 `ipconfig getifaddr en0` 取得區網 IP，例如 `192.168.1.25`。
4. 用 iPhone Safari 開啟 `http://192.168.1.25:8000/`，將範例 IP 換成上一步結果。
5. 測試完成後在 Mac 終端機按 Control-C。這只會讓同一區域網路內的裝置暫時存取，不會公開部署網站。

## 檔案結構

```text
Sabrina_Jiang_Portfolio_Codex_Project/
├── index.html                  # 英文內容、區塊結構、anchors、媒體引用
├── styles.css                 # 排版、背景、響應式與歷史版本覆蓋
├── script.js                  # 年份、淡入、導覽列出現／隱藏
├── Open Portfolio.command     # Mac 雙擊啟動本機預覽
├── assets/                    # 59 個保留素材，包含 Experience、Projects、Dance／Sunny MP4 與封面原圖
├── README.md                  # 使用、部署、架構與防回歸規則
├── HANDOFF.md                 # 目前狀態、限制與下一步
├── .nojekyll                  # GitHub Pages 純靜態發佈
└── docs/
    ├── README.original-v23.md
    ├── ASSET_INVENTORY.md     # 素材用途、大小、SHA-256
    └── VERIFICATION.md        # 實際瀏覽器與靜態檢查結果
```

## HTML / CSS / JavaScript 架構

HTML 順序為：fixed header → Hero → About (`#about`) → Experience (`#experience`) → Projects (`#projects`) → Education (`#education`) → Beyond Work (`#life`) → closing/contact → footer。Hero 五張照片與導覽列連到相同 anchors；名稱與頁尾連到 `#top`。

`styles.css` 先定義基礎排版，檔尾保留歷次版本覆蓋；HTML `head` 另有背景相關 inline styles。修改背景、導覽列或 Experience 前，必須一起檢查檔尾規則與 inline styles，避免只靠新增 CSS 造成接縫或矩形色塊。

`script.js` 自動更新頁尾年份、使用 `IntersectionObserver` 顯示 `.reveal` 元素，並依 About 的位置切換 `.site-header.is-visible`。首頁 header 隱藏且不佔版面，到 About 才淡入。

網站沒有 API、路由、後端或聯絡表單。本機檔案均使用相對路徑。外部依賴只有 Google Fonts 及 LinkedIn／Instagram／mailto 連結；Reel 影片已放在 `assets/sunny-reel.mp4`，不依賴 Instagram embed script。

## 設計原則與目前內容

- 成熟、極簡 editorial style；標題使用 Newsreader，內文使用 Manrope。
- 奶白布料背景貫穿 Hero 與 Experience；About、Projects、Beyond Work 與導覽列使用滿版黑色絲緞。closing 與 footer 共用一個滿版樹木場景及連續白色蒙版，避免獨立矩形底色與可見接縫。
- Education 使用 UW 櫻花校園照、71% 白色蒙版及 UW Foster／NTU 並排教育面板；面板為半透明暖白色。
- 大區塊標題為大寫字與短底線；Hero 不放大頭照，五張入口照片在首屏。About 保留人物照，文字不重複姓名；桌機介紹文字約 22px，1280×900 點入 About 時四項成果完整可見。
- Experience 為 Shiseido／IPSA、Pao Yuan／YYSPORTS／Keds & Converse、Edelman 三個 career features。照片在左、敘述與 logo 在右。Shiseido 與 Pao Yuan 各有兩頁手動輪播；Pao Yuan 第二頁為 Converse Store Manager Meeting 照片與使用者指定文案。
- Shiseido、Pao Yuan 與 Edelman 公司名下方各有一行公司定位說明，已移除開頭裝飾性 `#`。這些說明是使用者指定文案，未做外部事實查核。
- Projects 依序為 `1. Improved forecast accuracy by 3%`、`2. Reduced delivery lead time from three weeks to one week`、`3. Standardized 30+ planning SOPs from scratch`。三案都以 The Problem → What I Did → Result 垂直排列；只在標題前使用 1–3 編號。
- Beyond Work 使用 `Dance Journey` 與 `Life with Four Paws 🐾`。Dance 固定依照片 1 → 影片 1 → 照片 2 → 影片 2 輪播，照片各顯示 3 秒，影片播放一次後前進；四個白點可直接選頁。第二張 Dance 照片以 60% 水平焦點讓 Sabrina 位於裁切中央。Dance 與 Sunny 的影片都可由原生 controls 手動解除靜音；所屬輪播可見比例低於 20% 時會將該輪播全部影片設回靜音，滑回後仍保持靜音。
- Closing 與 footer 包在同一個 `.closing-scene`；`Let’s plan what’s next` 桌面約 69px，並加入 `Great things start with a conversation. Let's connect and explore what's possible.`。Email、LinkedIn、版權與 Back to top 都直接位於同一樹木背景上。
- 已移除 Hero 小標、Experience 開場摘要、Shiseido 淡紅背景、`Public Relations Lead, NTU MV Dance Club` 與 `LET'S CONNECT`。

## 部署 GitHub Pages

正式網站已透過 GitHub Pages 公開部署：

- 網站：<https://sabrinamxjiang.github.io/sabrina-jiang-portfolio/>
- Repository：<https://github.com/sabrinamxjiang/sabrina-jiang-portfolio>
- 發布來源：`main` branch、`/(root)`
- HTTPS：已啟用

後續更新流程：

1. 在本機修改並預覽網站。
2. 確認根目錄直接包含 `index.html` 與 `assets/`。
3. `git add`、`git commit` 後 push 到 `main`。
4. GitHub Pages 會由 `main` 的 `/(root)` 自動重新部署。
5. 部署完成後重新檢查圖片、影片、anchors、字體、背景交界和手機版。

保留相對路徑，不要將 `assets/...` 改成 `/assets/...`。檔名大小寫需一致，並保留根目錄 `.nojekyll`。Dance 影片目前最大約 42 MB；若要改善行動網路載入，可另行製作較小版本，但不要直接覆蓋原始影片。

## 防回歸規則

1. 保留 `index.html`、現有功能和全部 59 個 assets；沒有明確確認前，不刪除未引用舊素材。
2. 首頁必須維持五張照片在 1280×900、760×900、390×844 的第一個 viewport；header 不得重新佔用首頁頂端空間。
3. 導覽文字背景保持透明；hover 只使用底線或亮度。
4. About 不重複 Sabrina 姓名；不得恢復已刪除的 Hero 小標、Experience 摘要、`#1`、社團職稱或 `LET'S CONNECT`。
5. Experience logo 位於右側敘述開頭，不拉伸、不加白卡片。Shiseido、YYSPORTS、Edelman 必須使用透明版本，桌面可見寬度保持 390px、手機保持同寬；公司說明前不得恢復裝飾性 `#`。
6. `sunny-reel.mp4` 與 `sunny-reel-02.mp4` 都須保留 muted、loop、playsinline；目前 slide 進入時播放，離開時暫停；Sunny 輪播滑出畫面後兩支影片都必須恢復靜音。不要以 Instagram iframe 取代本機影片。
7. Dance 影片必須保留 controls、muted、playsinline 與 `object-fit:contain`；播放／暫停、播放軸、音量與全螢幕控制不可被裁掉。使用者解除目前影片的靜音後，在同一頁需保持該選擇；切換影片或 Dance 輪播滑出畫面時必須恢復靜音。
8. Closing 與 footer 必須由同一個 `.closing-scene` 樹木背景覆蓋到底，並使用整體白色蒙版；不得在 footer 恢復奶白布料色塊。
9. 數字只代表現有文案，沒有外部證據；不得新增、推算或重新解讀 3%、+5%、30+、300+、US$12.5M+ 等成果。
10. Shiseido、Pao Yuan、Dance、Sunny 必須保留圓點、手機左右滑動與桌面滑鼠拖曳；影片控制列底部不得觸發換頁。
11. 每次修改後至少檢查 1280、760、390 寬度、anchor 停靠、圖片與影片載入、水平溢出和手機堆疊。模擬 viewport 不能取代真實 Safari／iPhone 驗收。

## 待確認與下一步

請 Sabrina 以 iPhone Safari 實機確認正式網站的導覽、輪播、影片控制與載入速度。之後可做 Android 測試、影片壓縮、無 JavaScript fallback，以及逐步整理歷史 CSS。完整狀態見 `HANDOFF.md`，檢查證據見 `docs/VERIFICATION.md`。
