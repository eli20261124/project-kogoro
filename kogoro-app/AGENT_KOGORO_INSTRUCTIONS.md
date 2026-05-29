# 系統指令：Project Kogoro 開發手冊

## 1. 專案定位與上下文 (Context)
- **父專案**：`sayori` (日本文化下的日本文豪系列)
- **子專案**：`kogoro` (江戶川亂步專題)
- **核心理念**：「理智與瘋狂的極致臨界點」。用極度現代、無機質的數位冷酷感，去解剖大正/昭和時期的變態與狂亂怪談。
- **目錄結構要求**：
```text
  sayori/kogoro/
  ├── index.html             (專案入口)
  ├── DESIGN2.md             (視覺規範)
  ├── detective/             (偵探部門：理性與心理鑑定)
  │   ├── index.html
  │   └── cases.json         
  └── erotic-grotesque/      (異色部門：物化與潛意識暴走)
      ├── index.html
      └── fetishes.json
      2. 視覺與色彩規範 (DESIGN2.md 嚴格約束)
Agent 在生成所有 CSS 時，必須嚴格遵守以下 CSS 變數（禁止使用其他高彩度干擾色）：

--bg-color: #0B0B0C; (死寂黑：用於主背景與大面積留白)

--primary-red: #8A0010; (凝血紅：用於標題、高光邊框、主要按鈕)

--hover-crimson: #D32F2F; (大正洋緋：用於特效觸發、Hover 狀態的化學色光)

--text-white: #F5F5F7; (陰翳白：用於主要內文、無機質表格線)

--border-gray: #2C2C2E; (暗沉線條：用於切割版面的邊框)

字體要求：標題強制使用襯線體（明體/宋體）並拉大 letter-spacing；內文可混用黑體，呈現病歷表的無機質數位感。

3. 核心版塊一：【偵探部門】開發指南 (detective/index.html)
美學風格：極度乾淨、冷冽、高數位反差。「精神病院 / 犯罪實驗室」的真空感。

排版邏輯：

嚴格的網格系統（CSS Grid / Flexbox）。

使用 1px solid var(--border-gray) 強行切割所有區塊，模仿電子病歷表。

大面積的黑色留白。

資料處理與渲染：

從 cases.json 動態讀取 10 個江戶川亂步本格文本（如《心理測驗》、《Ｄ坂殺人事件》）。

卡片設計需包含：案件名稱、年份、心理學標籤（Classification）、防禦機制（Defense Mechanism）。

數學公式渲染：

必須引入 MathJax CDN。

卡片中包含的犯罪心理學推導公式，必須使用 LaTeX 語法（例如 $$ \text{Text} + \text{Misdirection} = \text{Cognitive Blindspot} $$）渲染於獨立的無機質區塊中。

微互動 (Micro-interaction)：

Hover 卡片時，邊框轉為 --primary-red。

（選做進階特效）模擬測謊儀延遲：在公式旁加入微小的跳動紅線與隨機毫秒數據（如 DELAY: +142ms）。

4. 核心版塊二：【異色部門】開發指南 (erotic-grotesque/index.html)
美學風格：超現實、幽閉壓迫、虛實界線崩解。「潛意識的高壓鍋密室」。

排版邏輯（與偵探部門完全對立）：

打破方格：禁止使用工整的表格與邊框。使用不對稱的流體排版。

暗角壓迫：四周使用極深的 CSS 漸層 Vignette (box-shadow: inset 0 0 150px #000;)，強迫視覺集中。

資料內容：

展示亂步的獵奇意象（如《屋頂上的散步者》的窺探、《人間椅子》的觸覺物化、《盲獸》的肉身雕塑）。

關鍵視覺特效 (CSS/JS)：

Aperture Mask (針孔窺探特效)：預設畫面保持極大比例的死黑。利用 CSS mask-image: radial-gradient(...) 綁定滑鼠坐標，讓使用者游標變成一個「窺視孔」，只能看見游標周圍的局部內容（如局部人體或皮革紋理）。

色彩暴走：當滑鼠精準 Hover 到特定變態文本區塊時，背景瞬間觸發 --hover-crimson (#D32F2F) 的高光渲染，模擬陰翳美學中的刺眼側光。

5. Agent 執行限制 (Constraints)
HTML 結構必須語意化，且所有的 CSS 特效應盡量不依賴龐大的外部套件（保持代碼純粹性）。

JavaScript 邏輯需模組化，特別是處理 json fetch 與游標坐標追蹤的函式。

所有的視覺輸出必須看起來像是「用理性的程式碼包裹著瘋狂的內容」。