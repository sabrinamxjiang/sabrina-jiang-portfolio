# Codex 交接：Sabrina Jiang Portfolio v42

## 目前狀態

這是英文 Supply Chain 單頁作品集，使用 Newsreader 標題、Manrope 內文、奶白布料與黑色絲緞交替背景。Education 使用 UW 校園照加 71% 白色蒙版。全部 56 個本機 assets 均保留；網站只在本機測試，尚未公開部署。

入口檔案是 `index.html`；視覺規則主要在 `styles.css`，header 與 reveal 行為在 `script.js`。請先以本機 HTTP 預覽，不要只雙擊 HTML。

v37 新增根目錄 `Open Portfolio.command`。Mac 使用者解壓後可雙擊啟動本機 HTTP 預覽並自動開啟瀏覽器；Terminal 視窗需保持開啟，Control-C 可停止。第一次若被 macOS 阻擋，可右鍵檔案選 Open／打開。此啟動方式不會公開或上傳網站。

## v42 已完成

- Hero About 入口的 Space Needle 改為 `object-fit:contain`，整張 482×778 圖片完整顯示；左右以同圖低彩度模糊背景填滿，沒有白邊。
- Pao Yuan 新增兩頁輪播：Keds & Converse 商品圖，以及使用者提供的 Converse Store Manager Meeting 照片。第二頁 caption 使用本人指定的英文敘述。
- Pao Yuan 輪播沿用共用功能，支援圓點、手機滑動與桌面滑鼠拖曳。
- 三個 Project 標題改為 1–3 編號與結果導向文字；Problem、What I Did、Result 內容未改寫。
- 1280×900 與 390×844 均確認首屏五張入口完整、沒有水平溢出；Pao Yuan 新照片在桌面與手機均完整顯示。

## v41 已完成

- Hero About 入口改用使用者提供的 Seattle Space Needle／Mount Rainier 照片；保留舊森林素材，未修改 About 區塊的人物照。
- Education 改成 UW 校園滿版圖加 71% 白色蒙版，標題與內文改深色，雙校面板為 70% 暖白透明；桌機與手機均無水平溢出。
- Projects 在 Forecast 與 SOP 之間新增 `Delivering a customer order within one week`，依 Problem → 三點 What I Did → 單段 Result 排列，結果以 `Successfully shipped` 開頭。
- 新增 AI 生成的 1536×1024 logistics editorial 圖 `assets/expedited-shipment-project.png`；無品牌或可讀文字。
- Shiseido、Dance、Sunny 三組輪播保留圓點與觸控滑動，另加入桌面滑鼠水平拖曳。影片底部 72px 控制區不觸發換頁；原生播放軸、音量及全螢幕控制保留。
- 既有 v40 黑色 Projects、Dance／Sunny 滑離後自動靜音與第二張 Dance 照片焦點均保留。

## v29–v35 基礎與 v36 已完成

- Shiseido 改用使用者提供的紅色標誌；原始 3840×2160 白底檔保留為 `assets/shiseido-logo-user.png`。
- 以原圖像素移除白色畫布並裁切，產出 3824×702 的 `assets/shiseido-logo-transparent.png`，目前 HTML 使用此檔；沒有重畫標誌。
- Shiseido 與 Pao Yuan 的公司名稱／說明改成兩行；第二行明確顯示 `#`。
- Instagram 官方 iframe 已改成本機 `assets/sunny-reel.mp4`，HTML 使用 `autoplay muted loop playsinline controls preload=metadata`。
- 保留 Instagram 帳號及原 Reel 連結；本機影片不再依賴 Instagram script、登入、Cookie 或追蹤保護。
- 延續 v28／v29：三家公司 logo 位於右側敘述開頭、Project Result 位於 Problem／What I Did 下方、Email 全站為 `sabrina.mx.jiang@gmail.com`。
- v30：Edelman 新增第二行 `# The world's largest public relations firm`。
- v30：桌機 About 介紹縮至約 22px，人物照約 323×404px；1280×900 點入 About 後四項成果完整可見。
- v30：只有 `RESULT` 標題放大至約 22.4px；Problem／What I Did 維持 13px。
- v30：closing 與 footer 合併至 `.closing-scene`，同一張樹木背景及蒙版連續覆蓋到底。
- v31：YYSPORTS 與 Edelman 改用使用者提供的 logo，去除白底並裁切；三個 Experience logo 桌面可見寬度均為 390px，390px viewport 均為 338.4px。
- v31：Edelman 兩點改為 Canadian athletic apparel／luxury outerwear press releases，以及 quick-service restaurant competitor／industry insights。
- v31：Dance 加入 `# DanceJourney`；Sunny 改為 `# Life with Four Paws 🐾` 及兩段個人故事，維持文字左、影片右，桌面兩者內文皆為 21px／34.65px。
- v31：closing 標題桌面放大至 69.12px並加入 conversation 副標；Projects 封面格改用 `cover-projects-makeup.jpg`。
- v32：主內容與 header 改為 About → Experience → Projects → Education → Beyond Work；Projects／Education 編號改為 03／04。
- v32：Projects case 改為 The Problem → What I Did → Result 垂直排列，Problem 加入 Shiseido 情境。
- v32：公司說明、Dance Journey、Life with Four Paws 移除裝飾性 `#`；NTU 新增使用者指定的 `Ranked #54 in the QS World University Rankings 2027`。
- v32：Hero About 改用森林道路、Beyond Work 改用 Sunny 持玩具照片；兩圖均另存暖灰 editorial 調色版本並保留原檔。
- v33：Hero Education 改用使用者提供的 UW 櫻花校園照；Beyond Work 改用 Sunny 幼犬照。兩張新圖使用低飽和度、柔和對比與輕微壓暗，和其餘三格維持一致。
- v34：Dance 新增 `dance-performance-portrait.jpg`，兩張照片每 5 秒淡入輪播；Sunny 新增 `sunny-reel-02.mp4`，兩支影片透過白色圓點切換。切換影片時非目前影片會暫停，目前影片從頭播放；兩組都支援手機左右滑動與 reduced-motion。
- v35：Dance 新增 `dance-video-01.mp4` 與 `dance-video-02.mp4`，順序固定為照片 1 → 影片 1 → 照片 2 → 影片 2。照片停留 3 秒；影片不循環，ended 後自動前進。四個白點、手動選頁、左右滑動、非目前影片暫停與 reduced-motion 均保留。
- v36：Dance 影片保留原生 controls，使用者可解除目前影片的靜音；每次換頁時所有 Dance 影片都重設為 muted，離開的影片暫停，下一支不繼承前一支的音訊狀態。第 4 頁改為底部對齊的 1.08 倍裁切，以減少頭頂留白並保留原片可見的下方範圍。Sunny 輪播未更動。
- v38：修正 Dance 音訊，只對離開的影片執行 `pause()` 與 `muted=true`。使用者解除目前影片的靜音後，在同一支影片內會保持聲音；切到另一支時，舊影片恢復靜音，新影片以靜音播放。
- v38：Shiseido Experience 左圖改成 IPSA／Supply Chain Team Building 兩頁手動輪播，加入兩個深色圓點與 caption：`Connected with colleagues beyond day-to-day planning at a Supply Chain team-building bowling event.`。新圖保留完整團隊構圖，不自動播放。
- v39：Projects 在 SOP 前新增 forecast accuracy case，標題為 `Improving forecast accuracy through cross-functional alignment`；Problem 明確交代 Shiseido 情境，What I Did 分三點，Result 為一段。新增 AI 生成的 1536×1024 editorial planning still life `forecast-alignment-project.png`，沒有品牌、人物或可讀文字。
- v39：Dance 兩支影片均改為 `object-fit:contain`，移除第 4 頁 1.08 倍放大與底部裁切。兩支影片和 Sunny 一樣保留瀏覽器原生播放／暫停、播放軸、音量與全螢幕控制；使用者觸碰影片 controls 時暫停自動序列，離開該影片時才恢復靜音。
- v40：Projects 改成與 About／Beyond Work 呼應的滿版黑色絲緞；標題、內文、Result 與分隔線改成奶白／暖灰白，兩張 project 圖輕微降低飽和度。桌面與手機前後區塊沒有水平溢出或實際 layout gap。
- v40：Dance 與 Sunny 各自新增可見度監測；輪播可見比例低於 20% 時，該輪播內全部影片自動設回 muted。返回後保持 muted，不自行恢復聲音。第二張 Dance 照片改用 `object-position:60% 24%` 讓 Sabrina 位於裁切中央。

## Experience 文字與素材

- Shiseido 第一行：`Shiseido`
- Shiseido 第二行：`No. 1 cosmetics manufacturer in Japan and Asia`
- Pao Yuan 第一行：`Pao Yuan Enterprises`
- Pao Yuan 第二行：`Part of Pou Chen Group, the world's largest branded athletic and casual footwear manufacturer`
- Edelman 第二行：`The world's largest public relations firm`
- 桌面三個 logo 寬度均為 390px：Shiseido 約 71.6px 高、YYSPORTS 約 239.6px、Edelman 約 167.8px。390px viewport 三者均為 338.4px 寬，依原始比例呈現。

上述公司描述是使用者指定文字，未做外部事實查核。不要擅自增加排名證據或額外成果數字。

## 本機影片行為

`sunny-reel.mp4` 為 720×1280、約 23.6 秒、17,668,920 bytes。瀏覽器可能為節省資源暫停 viewport 外的媒體；實測滑入畫面後會自動播放，且維持 muted、loop 與 playsinline。保留 controls，讓使用者可手動播放或調整進度。

部署後仍需以 Safari／iPhone 與 Android 真機驗收。若後續要改善載入速度，先產生畫質可接受的壓縮版本並比較，不要直接覆蓋原檔。

## 既有設計要求

- Hero 一進站看得到五張照片，頂部導覽到 About 才出現；Hero 小標已移除。
- About 不重複 Sabrina 姓名；人物照留在 About。
- 大區塊標題為大寫與短底線，不可恢復全寬線。
- Experience 無開場摘要、無 Shiseido 紅底，logo 不加白卡片。
- Projects 目前有 Forecast Alignment、Expedited Shipment、SOP 三案，依序排列；三案都不使用 `#1` 或分類標籤。
- Education 為 UW 校園滿版圖加白色蒙版與兩校 logo 面板；NTU 社團職稱已刪除。
- Closing 是滿版樹木照加白色蒙版；`LET'S CONNECT` 已刪除。
- Email 為 `sabrina.mx.jiang@gmail.com`。

## 技術風險

`styles.css` 累積多版覆蓋，HTML `head` 也有背景 inline styles。檔尾 v27–v30 規則才是目前結果。清理舊規則前先保存畫面與 computed styles，小步移除並逐一驗證，避免背景接縫、標題底線或 responsive 版面回歸。

影片是目前最大的單一資產，會影響 GitHub Pages 初次載入。自動播放必須保持 muted，否則主流瀏覽器通常會阻擋。使用者若開啟省流量／低耗電模式，也可能需要手動播放；controls 已保留。

## v40–v42 驗證摘要

- 1280×900：Shiseido 透明 logo 390×71.6px；三段 `#` 公司說明可見；沒有水平溢出。
- 390×844：logo 338.4×62.1px；沒有水平溢出。
- 390×844 影片進入畫面後由 `paused=true/currentTime=0` 轉為 `paused=false/currentTime>0.6`，確認開始播放；`autoplay/muted/loop/playsInline` 皆為 true，readyState 4，無錯誤。
- 影片原生尺寸為 720×1280；手機畫面約 342×608px。
- `index.html` 不再載入 Instagram embed script。
- 1280×900 About：區塊高約 791.7px，成果列底部約 792.8px，完整位於 viewport；沒有水平溢出。
- 1280×900 Result：Problem 標題 13px，RESULT 標題 22.4px。
- 1280×900 與 390×844：closing 與 footer 使用同一個樹木 pseudo-element；footer 背景透明且沒有奶白色斷層。
- 390×844 Edelman 說明完整顯示；頁面無水平溢出。
- 1280×900：三個 Experience logo 寬度精確相同（390px）；原始比例與透明背景正常。
- 1280×900：section DOM 順序與 header 均為 About → Experience → Projects → Education → Beyond Work；無水平溢出。
- 1280×900：Projects 三段 top 依序為 5537／5624／5802px，確認直式排列；Result 標題維持較大。
- 390×844 與 760×900：頁寬與 scrollWidth 相等，無水平溢出；Projects 三段均單欄垂直排列。
- v34 桌機：Sunny 從影片 1 切至影片 2 後，影片 1 paused=true、影片 2 paused=false/currentTime>1，兩支皆為 720×1280 且無 media error。
- v35 桌機：照片 1 約 3 秒後進入影片 1；影片 1 為 1080×1920、25.70 秒，影片 2 為 1080×1440、20.11 秒，兩者均無 media error。
- v35 手動驗證：第三點載入 `dance-performance-portrait.jpg`，第四點載入 `dance-video-02.mp4`；切到影片 2 後影片 1 paused=true、影片 2 paused=false。
- v35 手機 390×844：Dance viewport 342×480，四個白點完整顯示，頁面無水平溢出。
- v36：實際以原生 controls 將第 4 頁解除靜音後，切至第 2 頁時第 4 頁回到 `muted=true/paused=true`，第 2 頁以 `muted=true/paused=false` 播放，確認音訊狀態不會跨影片。Sunny 未套用此規則。
- v39 桌機與 390×844：兩支 Dance 影片使用 `object-fit:contain` 且 transform=none；手機版影片、slide 與 viewport 均為 342×480px，原生 controls 沒有被框架裁掉。原始 `dance-video-02.mp4` 仍只包含頭部至大腿附近，CSS 無法呈現來源影片不存在的畫面。
- v38 1280×900：Shiseido 兩頁、兩個圓點與 caption 正常切換；Team Building 原圖 1170×851 以 `object-fit:contain` 呈現，頁面無水平溢出。
- v38 390×844：Shiseido viewport 360×270，兩個圓點完整可見，Team Building 圖與 caption 無水平溢出；瀏覽器 console 無 error／warning。
- v38 Dance 實測：影片 1 解除靜音後再次選擇同一頁仍為 `muted=false`；切至影片 2 後影片 1 為 `muted=true/paused=true`，影片 2 為 `muted=true/paused=false`。
- v39 原生 controls AX 實測：兩支 Dance 影片各自暴露播放按鈕、音量 slider／按鈕、全螢幕選項與 `video time scrubber`。影片 2 解除靜音後為 `muted=false`；切至影片 1 後影片 2 為 `muted=true/paused=true`，影片 1 為 `muted=true/paused=false`。
- v39 Projects：Forecast case 位於 SOP 前；桌機與 390×844 均無水平溢出，What I Did 為三個 ordered-list 項目，Result 為單一 paragraph。
- v40 Projects：1280px 與 390px 均為完整 viewport 寬度，背景解析為 `black-satin-hq.jpg` 加 23% 黑色蒙版；標題與內文顏色、淺色分隔線正常，scrollWidth=innerWidth。
- v40 自動靜音：在 Dance 影片 1 與 Sunny 影片 1 各自透過原生 control 解除靜音後，滑至 Projects；兩組影片最終皆為 `[true,true]`。回到 Beyond Work 不會自行解除靜音。
- v40 第二張 Dance 照片：桌面與 390×844 均解析為 `object-position:60% 24%`；手機輪播框 342×480px，頁面無水平溢出。
- v41 Hero About 使用 482×778 Space Needle 照片；舊森林封面仍保留。Education 使用 UW 櫻花照，Beyond Work 使用 Sunny 幼犬照。Hero 桌機與手機裁切正常，五格都在第一個 viewport。
- v41 輪播：Shiseido、Dance、Sunny 的圓點與桌面滑鼠拖曳均實測通過；手機觸控事件保留。Dance 原生控制列區域拖動不會切換 slide。
- v41 Education：1280×900 與 390×844 均顯示 71% 白色蒙版及暖白半透明面板；390px 無水平溢出。
- v41 Projects：三案順序為 Forecast → Expedited Shipment → SOP；新案的三點 Action 與單段 Successfully Result 完整顯示。
- 公司說明與兩個 Beyond Work 標題不再以 `#` 開頭；NTU 排名中的 `#54` 保留。
- 390×844：三個 logo 均為 338.4px 寬；760×900 均為 340px 寬；兩種尺寸皆無水平溢出。
- 1280×900：Sunny 文字在左、影片在右；Dance／Sunny 內文字級與行高相同；影片進入 viewport 後持續播放。
- Projects tile 使用 736×1104 makeup 圖，桌面裁切區約 338.7×284.8px。
- Closing 標題 69.12px，副標 19.2px；390px 標題 49.6px。

## 下一步

1. 請 Sabrina 以 iPhone Safari 確認 v42 Space Needle、Pao Yuan 輪播與 Project 標題的實際觸控體驗。
2. 在 Safari／iPhone、Android 與 Firefox 真機測試影片自動播放與 controls。
3. 視網路載入需求壓縮 MP4，保留原檔與畫質對照。
4. 若要補充狗狗專頁的定位、狗狗名字或社群成果，僅使用本人提供內容。
5. 視覺凍結後再整理歷史 CSS，不要在版面仍頻繁變動時大規模重構。

## 回歸檢查清單

- Hero 五張入口圖、anchors、Email、LinkedIn、Back to top 正常。
- header 首屏隱藏，About 後出現；導覽文字沒有矩形色塊。
- 三個 Experience logo 位於敘述開頭且未變形；Shiseido 無白底。
- Shiseido／Pao Yuan／Edelman 公司說明前沒有裝飾性 `#`。
- Projects 使用 1–3 編號成果標題，依序為 improved forecast accuracy、reduced delivery lead time、standardized SOPs；均依 Problem、What I Did、Result 垂直排列。
- 兩支 Sunny Reel 可由圓點切換；目前影片 muted 播放並循環，非目前影片暫停。
- Dance 目前影片可由 controls 解除靜音且停留時保持聲音；切換後舊影片暫停並恢復靜音，下一支以 muted 開始。
- Dance／Sunny 輪播滑出可視範圍後，所屬兩支影片都恢復 muted；滑回時不自動開聲音。
- Shiseido IPSA／Team Building 兩頁輪播、兩個圓點及 caption 正常；不裁掉團隊成員。
- Shiseido、Pao Yuan、Dance、Sunny 保留圓點、手機左右滑動與桌面滑鼠拖曳；影片控制列不得誤觸換頁。
- closing 與 footer 共用滿版樹木背景，最底部沒有奶白色塊或接縫。
- 390px 無水平捲動；全部 56 個 assets 保留。
