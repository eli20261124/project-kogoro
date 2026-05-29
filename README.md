# 江戸川亂步 奇偵探事務所 — Project Kogoro v2.2

**乱歩の世界へようこそ。**  
一個建構於幽暗敘事與心理解剖學之上的互動文學檔案館。

---

## 目錄 / Contents

- [繁體中文說明](#繁體中文說明)
- [English Documentation](#english-documentation)

---

## 繁體中文說明

### 專案概述

**Project Kogoro** 是一個以日本推理小說之父 **江戸川乱歩**（1894–1965）的文學宇宙為核心的互動式靜態網頁應用程式。本專案分為兩個相互呼應的部門，分別對應乱歩創作的兩大面向——縝密的偵探推理，以及深入人類黑暗潛意識的異色美學。

版本 **v2.2** 為本專案帶來了精密的排版系統、生物機械融合係數儀表、感官閾值雷達圖、心理崩潰 EKG 動畫，以及組織切片容器等沉浸式鑑識體驗。

---

### 部門一：偵探部門 (Detective Department)

**路徑**：`kogoro-app/detective/`

乱歩筆下明智小五郎系列的完整案件資料庫，收錄 **30 件**經典案件，以 SVG 拓撲結構呈現案件關係網絡。

**功能特色：**
- **案件資料庫** (`cases.json`)：收錄 30 個案件，含標題（日/繁中/英）、年份、梗概、嫌疑人清單及犯罪類型標籤。
- **偵探檔案** — 展示明智小五郎的心理側寫與偵查風格。
- **SVG 案件拓撲圖** — 視覺化呈現案件之間的關聯脈絡。
- **多語言支援** — 日語 / 繁體中文 / 英文，透過 `i18n.js` 模組驅動，語言設定儲存於 `localStorage`。
- **手風琴折疊面板** — 依分類整理，展開後顯示完整案件細節。

---

### 部門二：異色部門 (Erotic-Grotesque Department) v2.2

**路徑**：`kogoro-app/erotic-grotesque/`

乱歩異色文學的深層解剖學檔案館，收錄 **42 件**經典異色作品，以「病理學鑑識」框架重新詮釋每一部作品的心理機制。

**功能特色：**

#### 霧幕解封機制
啟動時顯示「乱歩」印章霧幕覆蓋層。使用者需點擊 **5 次**逐步點亮進度點，每次觸發深紅色血液飛濺粒子（Canvas API）與持久血跡貼花（z-index 502，位於霧幕之上），最終霧幕淡出，展示完整檔案庫。

#### 分類折疊抽屜系統
42 件作品依心理主題分為 5 大類別：

| 代碼 | 類別 | 描述 |
|------|------|------|
| OBJ | 物化 (Objectification) | 觸覺至上・物質性強迫 |
| VOY | 窺視 (Voyeurism) | 建築窺視・空間越境 |
| BOD | 身体 (Body Horror) | 身體解體・依存結構 |
| MIR | 鏡像 (Mirror/Double) | 自我增殖・虛構崩塌 |
| ISO | 孤立 (Isolation) | 地理隔離・外科越界 |

#### v2.2 四大病理儀器

1. **感官閾值雷達圖 (Sensory Threshold Radar)**  
   互動式 SVG 五軸雷達圖，標示觸覺、視覺、聽覺、嗅覺、味覺的強度分佈。每部作品的感官輪廓均依其核心強迫症狀獨立校準（如《盲獸》觸覺值 10，視覺值 0）。懸停或聚焦雷達圖可顯示對應文學引句。

2. **生物機械融合係數 (Biomechanical Fusion Coefficient)**  
   計算主角與其強迫對象之間的「共生退化程度」（0–100%），並標示等級：`CRITICAL / HIGH / MODERATE / LOW`。融合條在面板展開時以 CSS transform 動畫填充。

3. **組織切片容器 (Tissue Sample Container)**  
   每個鑑識面板右側呈現一個圓形 CSS `radial-gradient` 模擬玻璃切片，顏色依類別區分：物化類為赭紅色皮革質感，窺視類為深鈷色，鏡像類為冷藍調，孤立類為苔綠色。

4. **心理崩潰 EKG (Psychological EKG — Collapse Index)**  
   低調 Canvas 動畫，模擬讀者閱讀時的心理 EKG 波形，從穩定心跳逐漸演變為混亂雜訊，最終趨向死亡平線。波形崩潰速度依作品主題設定（`fast / medium / slow`）。

#### 排版系統

| 層級 | 字體 | 大小 | 字重 | 顏色 |
|------|------|------|------|------|
| 歸檔層 (Filing Layer) | JetBrains Mono | 13px | 500 | `#888` (中性灰) |
| 檔案層標題 (Dossier Title) | Noto Serif JP | 20px | 500 | `#8A0010` (深紅) |
| 檔案層正文 (Dossier Body) | Noto Serif JP | 16px | 500 | `#EADDCF` (舊紙) |
| 英文副標 (En Subtitle) | Noto Serif JP | 13px | 400 | `rgba(234,221,207,.55)` |

所有文字套用 `-webkit-font-smoothing: antialiased`、`text-rendering: optimizeLegibility` 及 `text-shadow: 0 1px 2px rgba(0,0,0,.8)` 以確保黑暗背景下的最佳清晰度。展開面板採用 `backdrop-filter: blur(8px)` + `rgba(11,11,12,.95)` 的玻璃質感背景。

---

### 資料架構

#### `detective/cases.json`
```json
{
  "id": 1,
  "year": 1925,
  "title": "D坂の殺人事件",
  "titleZh": "D坡的殺人事件",
  "titleEn": "The D-Hill Murder Case",
  "type": "locked-room",
  "suspects": ["..."],
  "synopsisJa": "...",
  "synopsisZh": "...",
  "synopsisEn": "..."
}
```

#### `erotic-grotesque/fetishes.json`
```json
{
  "id": 1,
  "category": "objectification",
  "year": 1925,
  "title": "人間椅子",
  "radar": { "touch": 9, "sight": 2, "sound": 4, "smell": 7, "taste": 3 },
  "fusion": 92,
  "ekg": "slow",
  "quote": "皮と皮が重なる。温もりが伝わってくる。これが椅子の喜びだ。",
  "keywords": ["Haptic Obsession", "Furniture Fusion", "Enclosure Fantasy"]
}
```

---

### 安裝與執行

**方法一：本地靜態伺服器（推薦）**

```bash
cd kogoro-app
python3 -m http.server 8765
# 開啟瀏覽器訪問 http://localhost:8765
```

**方法二：任意 HTTP 伺服器**

```bash
npx serve kogoro-app
# 或
npx http-server kogoro-app -p 8765
```

> ⚠️ 因 `fetishes.json` 及 `cases.json` 透過 `fetch()` 載入，**不可直接以 `file://` 協議開啟** HTML 檔案，必須透過 HTTP 伺服器提供服務。

---

### 技術棧

| 類別 | 技術 |
|------|------|
| 前端框架 | 純靜態 HTML5 / CSS3 / Vanilla JS（無構建工具） |
| 字體 | Noto Serif JP · Noto Sans JP · JetBrains Mono（Google Fonts） |
| 動畫 | CSS transitions + Web Animations + Canvas API (EKG, 飛濺) |
| 音訊 | Web Audio API (BufferSource + Oscillator + BiquadFilter) |
| 數據 | JSON（`fetch()`）|
| 國際化 | 自製 `i18n.js`（日/繁中/英，localStorage 持久化）|

---

## English Documentation

### Overview

**Project Kogoro** is an interactive static web archive built around the literary universe of **Edogawa Ranpo** (江戸川乱歩, 1894–1965), the father of Japanese mystery fiction. The project is organized into two thematically opposed departments reflecting Ranpo's dual creative personality: the precision of detective reasoning, and the descent into erotic-grotesque psychological darkness.

Version **v2.2** introduces a precision typography system, biomechanical fusion meters, sensory threshold radar maps, psychological collapse EKG animations, and tissue sample containers.

---

### Department 1: Detective (偵探部門)

**Path**: `kogoro-app/detective/`

A complete database of the Akechi Kogoro mystery canon — **30 cases** rendered through SVG topology networks.

**Features:**
- **Cases database** (`cases.json`): 30 cases with trilingual titles, year, synopsis, suspect list, crime-type taxonomy.
- **SVG case topology** — visual network of case relationships.
- **Accordion panel UI** — categorized, expandable case dossiers.
- **i18n** — Japanese / Traditional Chinese / English via `i18n.js`, persisted in `localStorage`.

---

### Department 2: Erotic-Grotesque (異色部門) v2.2

**Path**: `kogoro-app/erotic-grotesque/`

A forensic pathology archive of Ranpo's 42 canonical eccentric/grotesque works, reframed through clinical psychological analysis.

**Fog Unsealing Ritual**: On load, a radial-gradient fog overlay with the "乱歩" hanko seal covers the viewport. Five taps progressively light progress pips, trigger blood-spatter particle effects and persistent stain decals above the fog (z-index 502), and ultimately dissolve the overlay.

**5 Category Accordion Drawers**:
- `OBJ` Objectification — haptic supremacy, material fusion
- `VOY` Voyeurism — architectural transgression, omniscient gaze
- `BOD` Body Horror — dismemberment, care as domination
- `MIR` Mirror / Double — narcissistic fragmentation, fiction collapse
- `ISO` Isolation — geographic confinement, surgical transgression

**v2.2 Four Teratological Dossier Instruments:**

1. **Sensory Threshold Radar** — 5-axis SVG pentagon (Touch/Sight/Sound/Smell/Taste), individually calibrated per work. Hover reveals a literary quote.
2. **Biomechanical Fusion Coefficient** — 0–100% animated bar measuring symbiotic character–object degradation. Graded CRITICAL / HIGH / MODERATE / LOW.
3. **Tissue Sample Container** — Circular CSS radial-gradient glass-slide simulation, color-coded by psychological category.
4. **Psychological EKG** — Live Canvas animation transitioning stable → erratic → flatline, symbolizing psychological collapse. Speed profile per work (fast/medium/slow).

---

### Typography Rules

| Layer | Font | Size | Weight | Color |
|-------|------|------|--------|-------|
| Filing / Tags | JetBrains Mono | 13px | 500 | `#888` |
| Dossier Title | Noto Serif JP | 20px | 500 | `#8A0010` |
| Dossier Body | Noto Serif JP | 16px | 500 | `#EADDCF` |
| En Subtitle | Noto Serif JP | 13px | 400 | `rgba(234,221,207,.55)` |

Global: `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility`, `text-shadow: 0 1px 2px rgba(0,0,0,.8)`. Expanded panels use `backdrop-filter: blur(8px)` + `rgba(11,11,12,.95)`.

---

### Installation

**Option 1: Python static server (recommended)**

```bash
cd kogoro-app
python3 -m http.server 8765
# Browse to http://localhost:8765
```

**Option 2: Node-based server**

```bash
npx serve kogoro-app
# or
npx http-server kogoro-app -p 8765
```

> ⚠️ JSON databases are loaded via `fetch()` — do **not** open HTML files directly with `file://`. A local HTTP server is required.

---

### Project Structure

```
kogoro-app/
├── index.html                   # Department hub landing
├── i18n.js                      # i18n engine (ja/zh/en)
├── detective/
│   ├── index.html               # Detective department
│   └── cases.json               # 30 Akechi Kogoro cases
└── erotic-grotesque/
    ├── index.html               # EG department v2.2
    └── fetishes.json            # 42 EG works + radar/fusion/ekg data

sayuri-app/                      # Next.js — Sayuri Ishikawa music archive
takumi-app/                      # Next.js — Takumi craftwork archive
```

---

### Design Tokens

```css
--bg: #060607           /* near-black background */
--panel: #0B0B0C        /* panel background */
--panel-glass: rgba(11,11,12,.95)  /* frosted glass expanded panels */
--red: #8A0010          /* primary accent */
--crimson: #C62828      /* secondary accent */
--paper: #EADDCF        /* vintage paper body text */
--grey: #888            /* clinical index text */
--border: #1A1A1C       /* dividers */
```

---

### Browser Compatibility

Tested on: Chrome 120+, Safari 17+, Firefox 121+, Edge 120+.  
`backdrop-filter` requires Chrome 76+ / Safari 9+ / Firefox 103+ (with layout.css.backdrop-filter.enabled).

---

### License

MIT © 2026 Emma Wang. See [LICENSE](LICENSE).
