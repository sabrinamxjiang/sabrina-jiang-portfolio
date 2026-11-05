# v42 驗證紀錄

日期：2026-10-18（America/Los_Angeles）。基準為使用者上傳的 v23 ZIP；目前版本為 v42。以 Python localhost 靜態 HTTP 與 Codex in-app Chromium 驗證，未公開部署。

## v42 Space Needle、Pao Yuan 與 Projects

- Hero About 前景使用 `object-fit:contain` 與 `object-position:50% 50%`，完整呈現 482×778 Space Needle 原圖；左右由同圖模糊、壓暗且降低飽和度的背景填滿。
- 1280×900 與 390×844 的五張 Hero 入口均位於第一個 viewport；390px 的 scrollWidth=innerWidth，沒有水平溢出。
- Pao Yuan 輪播包含兩張照片、兩個圓點與兩組 caption。第二頁顯示 `Converse Store Manager Meeting` 及使用者指定敘述。
- Pao Yuan 圓點點選與桌面滑鼠拖曳均實測通過；由第二頁向右拖曳後返回第一頁，active slide、caption 與圓點同步。
- 手機 390×844：Pao Yuan 輪播寬 360px，新照片以 `object-fit:contain` 完整顯示，caption 與兩個圓點沒有溢出。
- Project 標題依序為 `1. Improved forecast accuracy by 3%`、`2. Reduced delivery lead time from three weeks to one week`、`3. Standardized 30+ planning SOPs from scratch`。

## v41 Education 白色蒙版

- 背景使用 `assets/uw-campus.jpg`，上層為 71% 白色蒙版；computed background 已確認為 `rgba(255,255,255,.71)`。
- 標題與內文改為深色；雙校面板為 70% 暖白透明並保留輕微 blur、細框與陰影。
- 1280×900：UW／NTU 並排、logo 與文字完整；Projects → Education 實際 layout gap 為 0。
- 390×844：雙校垂直堆疊，section width=390、scrollWidth=390，沒有水平溢出；Education → Beyond Work 實際 layout gap 為 0。

## v41 三組輪播操作

- Shiseido、Dance、Sunny 全部保留圓點點選與既有手機 `touchstart`／`touchend` 左右滑動。
- 三組新增 Pointer Events 滑鼠拖曳，水平位移至少 45px 且大於垂直位移時換頁；圖片原生 drag 已停用，避免拖曳圖片阻斷輪播。
- 實際桌面拖曳：Shiseido 從 IPSA 切至 Team Building；Dance 從照片 2 切至影片 2；Sunny 從影片 1 切至影片 2。三組 active slide 與圓點同步。
- Dance 影片底部 72px 視為原生控制區；在該區水平拖動後 active slide 仍為影片 1，未誤切換。
- Dance 兩支影片與 Sunny 兩支影片均保留 native `controls`。Sunny 仍為 `loop`；非目前影片會暫停。
- v40 可見比例低於 20% 時自動靜音的 `IntersectionObserver` 保留；切換 Dance 影片時舊影片仍恢復靜音。

## v41 Projects

- DOM 與畫面順序為 Forecast Alignment → `Delivering a customer order within one week` → SOP Standardization。
- 新案 Problem 明確以 `At Shiseido` 開頭；What I Did 為三個 ordered-list 項目；Result 為一段並以 `Successfully shipped` 開頭。
- 新圖 `assets/expedited-shipment-project.png` 為 1536×1024 PNG，SHA-256 為 `6571fbbef0eeda0ee830fac50483b4c8415df8284a97d56a3d5308e8baee7c97`。
- Projects 保留 v40 滿版黑色絲緞、奶白標題、暖灰白內文與淺色分隔線。
- 1280 與 390 寬度均為 scrollWidth=innerWidth，沒有水平溢出。

## Hero About 封面素材

- Hero About 入口改用 `assets/cover-about-space-needle.jpg`，alt 為 `Seattle Space Needle with Mount Rainier in the distance`。
- v42 使用 contain 顯示完整照片，並以同圖模糊背景填補橫向 tile 的左右空間。
- 原森林封面保留於 assets，About 區塊人物照未更動。
- 1280×900：五張入口底部為 873px；390×844：五張入口底部為 822px，均位於第一個 viewport。

## 靜態檢查

- HTML parser 通過；全部本機 `src`／`href` 引用存在。
- `styles.css?v=42` 與 `script.js?v=42` cache-busting 已更新。
- `assets/` 共 56 個檔案；舊素材未刪除。
- `Open Portfolio.command` 保持 executable，仍會嘗試 8000–8010 的本機 port。
- 瀏覽器 console 無 error／warning。
- ZIP 產出後另以 `unzip -t` 檢查完整性。

## 尚未完成的真機驗證

- iPhone Safari／Android Chrome 的實際手指滑動、原生 controls 外觀、低耗電與省流量模式。
- GitHub Pages 上大型 MP4 的首次載入速度；部署前可考慮另存壓縮版本並保留原檔。
