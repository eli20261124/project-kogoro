const LANG_KEY = 'kogoro-lang';

const I18N = {
  ja: {
    /* ── Landing ── */
    landing_title: '江戸川乱歩',
    landing_subtitle: 'Project Kogoro / Digital Archive',
    landing_tagline1: '理智と狂気の臨界点。',
    landing_tagline2: '大正モダンの闇を、デジタルの冷徹さで解剖する。',
    dept01_num: 'DEPT_01', dept01_title: '偵探部門', dept01_en: 'Detective Department',
    dept01_desc: '精神鑑定記録。心理測驗と犯罪公式。<br>本格推理の数学的構造。',
    dept02_num: 'DEPT_02', dept02_title: '異色部門', dept02_en: 'Erotic-Grotesque Department',
    dept02_desc: '物化と窺視の病理学。<br>潛意識の暴走アーカイブ。',
    footer_sig: 'SAYORI → KOGORO → [RATIONAL MADNESS INTERFACE]',
    /* ── Detective ── */
    det_header: '偵探部門', det_sub: '明智小五郎 捜査録 / Psychological Case Archive',
    det_back: '← 戻る',
    det_profile_label: 'SUBJECT PROFILE',
    det_profile_name: '明智小五郎',
    det_profile_title: '私立探偵 · 変装の天才',
    det_profile_desc: '大正から昭和にかけて活躍した日本の名探偵。鋭い心理分析と変装術を武器に、数々の怪奇犯罪を解決した。怪人二十面相と宿命の対立を続け、江戸川乱歩作品の象徴的存在となった。',
    det_stat_cases: '事件数', det_stat_debut: 'デビュー', det_stat_nemesis: '宿敵',
    det_arc_dawn: '第一章：夜明けの推理', det_arc_dark: '第二章：暗黒期の探偵',
    det_arc_phantom: '第三章：怪人との対決', det_arc_legacy: '第四章：伝説の継承',
    det_open_dossier: 'OPEN DOSSIER', det_close: '× 閉じる',
    det_tab_synopsis: '事件概要', det_tab_psych: '心理分析', det_tab_pub: '書誌情報',
    year_label: '発表年', class_label: '病理分類 CLASSIFICATION', defense_label: '防衛機制 DEFENSE',
    formula_label: 'PSYCHOLOGICAL FORMULA', pub_label: '初出誌 PUBLICATION', role_label: '明智の役割 ROLE', victim_label: '被害者情報',
    loading: 'LOADING...', lang_label: '言語',
    /* ── EG ── */
    eg_header: '異色部門', eg_sub: 'Erotic-Grotesque / Subconscious Archive', eg_back: '← 戻る',
    eg_reveal_prompt: '画面に触れて霧を晴らせ', eg_reveal_1: '霧が揺れる...', eg_reveal_2: '光が差し込む...',
    eg_reveal_3: '薄れていく...', eg_reveal_4: 'もうすぐ...', eg_revealed: 'SEAL BROKEN',
    eg_tab_all: 'ALL', eg_tab_object: '物化', eg_tab_voyeur: '窺視',
    eg_tab_body: '身体', eg_tab_mirror: '鏡像', eg_tab_isolate: '孤立',
    eg_expand: '展開', eg_collapse: '閉じる',
    det_lab_subtitle: 'AKECHI ANALYTICAL LABORATORY v2',
    det_topology_title: '犯罪位相図',
    det_drawer_cases: '件',
    det_node_hover: 'ファイルを開く',
    eg_audio_label: '環境音',
    eg_audio_on: '環境音 ON',
    eg_audio_off: '環境音 OFF',
    eg_stain_hint: '手痕が残る...',
  },
  zh: {
    /* ── Landing ── */
    landing_title: '江戶川亂步',
    landing_subtitle: 'Project Kogoro / 數位典藏',
    landing_tagline1: '理智與狂氣的臨界點。',
    landing_tagline2: '以數位的冷酷，解剖大正摩登的黑暗。',
    dept01_num: 'DEPT_01', dept01_title: '偵探部門', dept01_en: 'Detective Department',
    dept01_desc: '精神鑑定記錄。心理測驗與犯罪公式。<br>本格推理的數學結構。',
    dept02_num: 'DEPT_02', dept02_title: '異色部門', dept02_en: 'Erotic-Grotesque Dept.',
    dept02_desc: '物化與窺視的病理學。<br>潛意識暴走典藏。',
    footer_sig: 'SAYORI → KOGORO → [RATIONAL MADNESS INTERFACE]',
    /* ── Detective ── */
    det_header: '偵探部門', det_sub: '明智小五郎 偵查錄 / Psychological Case Archive',
    det_back: '← 返回',
    det_profile_label: 'SUBJECT PROFILE',
    det_profile_name: '明智小五郎',
    det_profile_title: '私家偵探 · 易容天才',
    det_profile_desc: '活躍於大正至昭和年間的日本名偵探。以銳利的心理分析和易容術為武器，解決諸多奇異案件。與二十面相怪人宿命對立，是江戶川亂步作品中最具代表性的角色。',
    det_stat_cases: '案件數', det_stat_debut: '初登場', det_stat_nemesis: '宿敵',
    det_arc_dawn: '第一章：推理的黎明', det_arc_dark: '第二章：黑暗期的偵探',
    det_arc_phantom: '第三章：與怪人的對決', det_arc_legacy: '第四章：傳說的傳承',
    det_open_dossier: 'OPEN DOSSIER', det_close: '× 關閉',
    det_tab_synopsis: '案件概要', det_tab_psych: '心理分析', det_tab_pub: '書誌資訊',
    year_label: '發表年份', class_label: '病理分類 CLASSIFICATION', defense_label: '防衛機制 DEFENSE',
    formula_label: 'PSYCHOLOGICAL FORMULA', pub_label: '初刊誌 PUBLICATION', role_label: '明智的角色 ROLE', victim_label: '受害者資訊',
    loading: 'LOADING...', lang_label: '語言',
    /* ── EG ── */
    eg_header: '異色部門', eg_sub: 'Erotic-Grotesque / 潛意識典藏', eg_back: '← 返回',
    eg_reveal_prompt: '觸碰畫面，撥開迷霧', eg_reveal_1: '迷霧搖晃...', eg_reveal_2: '光透進來...',
    eg_reveal_3: '逐漸淡去...', eg_reveal_4: '即將揭露...', eg_revealed: 'SEAL BROKEN',
    eg_tab_all: 'ALL', eg_tab_object: '物化', eg_tab_voyeur: '窺視',
    eg_tab_body: '身體恐怖', eg_tab_mirror: '鏡像', eg_tab_isolate: '孤立',
    eg_expand: '展開', eg_collapse: '收起',
    det_lab_subtitle: 'AKECHI ANALYTICAL LABORATORY v2',
    det_topology_title: '犯罪拓撲圖',
    det_drawer_cases: '件',
    det_node_hover: '開啟檔案',
    eg_audio_label: '環境音',
    eg_audio_on: '環境音 ON',
    eg_audio_off: '環境音 OFF',
    eg_stain_hint: '手痕留存...',
  },
  en: {
    /* ── Landing ── */
    landing_title: 'Edogawa Ranpo',
    landing_subtitle: 'Project Kogoro / Digital Archive',
    landing_tagline1: 'The threshold between reason and madness.',
    landing_tagline2: "Dissecting Taisho's darkness with digital precision.",
    dept01_num: 'DEPT_01', dept01_title: 'Detective Division', dept01_en: 'Detective Department',
    dept01_desc: 'Psychiatric assessment records. Psychological tests & criminal formulas.<br>The mathematical structure of orthodox mystery.',
    dept02_num: 'DEPT_02', dept02_title: 'Erotic-Grotesque', dept02_en: 'Erotic-Grotesque Dept.',
    dept02_desc: 'Pathology of objectification & voyeurism.<br>Subconscious runaway archive.',
    footer_sig: 'SAYORI → KOGORO → [RATIONAL MADNESS INTERFACE]',
    /* ── Detective ── */
    det_header: 'Detective Division', det_sub: 'Kogoro Akechi Case Files / Psychological Case Archive',
    det_back: '← Back',
    det_profile_label: 'SUBJECT PROFILE',
    det_profile_name: 'Kogoro Akechi',
    det_profile_title: 'Private Detective · Master of Disguise',
    det_profile_desc: "Japan's foremost detective, active across the Taisho and Showa eras. Armed with razor-sharp psychological analysis and masterful disguise, he unravels the most macabre crimes. His fated rivalry with the Fiend with Twenty Faces defines Ranpo's enduring legacy.",
    det_stat_cases: 'CASES', det_stat_debut: 'DEBUT', det_stat_nemesis: 'NEMESIS',
    det_arc_dawn: 'ACT I: Dawn of Deduction', det_arc_dark: 'ACT II: The Dark Period',
    det_arc_phantom: 'ACT III: Confronting the Phantom', det_arc_legacy: 'ACT IV: The Enduring Legend',
    det_open_dossier: 'OPEN DOSSIER', det_close: '× CLOSE',
    det_tab_synopsis: 'Synopsis', det_tab_psych: 'Psychology', det_tab_pub: 'Publication',
    year_label: 'Published', class_label: 'CLASSIFICATION', defense_label: 'DEFENSE MECHANISM',
    formula_label: 'PSYCHOLOGICAL FORMULA', pub_label: 'PUBLICATION', role_label: "AKECHI'S ROLE", victim_label: 'Victim Profile',
    loading: 'LOADING...', lang_label: 'Language',
    /* ── EG ── */
    eg_header: 'Erotic-Grotesque', eg_sub: 'Erotic-Grotesque / Subconscious Archive', eg_back: '← Back',
    eg_reveal_prompt: 'Touch to pierce the veil', eg_reveal_1: 'The fog stirs...', eg_reveal_2: 'Light seeps in...',
    eg_reveal_3: 'Fading away...', eg_reveal_4: 'Almost there...', eg_revealed: 'SEAL BROKEN',
    eg_tab_all: 'ALL', eg_tab_object: 'Objectification', eg_tab_voyeur: 'Voyeurism',
    eg_tab_body: 'Body Horror', eg_tab_mirror: 'Mirror / Double', eg_tab_isolate: 'Isolation',
    eg_expand: 'Expand', eg_collapse: 'Collapse',
    det_lab_subtitle: 'AKECHI ANALYTICAL LABORATORY v2',
    det_topology_title: 'Crime Topology Map',
    det_drawer_cases: ' CASES',
    det_node_hover: 'Open File',
    eg_audio_label: 'Ambience',
    eg_audio_on: 'AMBIENT ON',
    eg_audio_off: 'AMBIENT OFF',
    eg_stain_hint: 'Stains remain...',
  }
};

function getLang() { return localStorage.getItem(LANG_KEY) || 'ja'; }
function setLang(lang) { localStorage.setItem(LANG_KEY, lang); }
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key] !== undefined ? I18N[lang][key] : null) || (I18N['ja'][key]) || key;
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  document.documentElement.lang = getLang() === 'zh' ? 'zh-TW' : getLang();
}
function langSwitcherHTML() {
  const lang = getLang();
  return `<div class="lang-switcher" aria-label="Language Switcher">
    <span class="lang-label" data-i18n="lang_label">${t('lang_label')}</span>
    <button class="lang-btn${lang==='ja'?' active':''}" data-lang="ja" aria-pressed="${lang==='ja'}" touch-action="manipulation">日本語</button>
    <button class="lang-btn${lang==='zh'?' active':''}" data-lang="zh" aria-pressed="${lang==='zh'}" touch-action="manipulation">繁體中文</button>
    <button class="lang-btn${lang==='en'?' active':''}" data-lang="en" aria-pressed="${lang==='en'}" touch-action="manipulation">EN</button>
  </div>`;
}
function initLangSwitcher(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = langSwitcherHTML();
  el.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { setLang(btn.getAttribute('data-lang')); location.reload(); });
  });
}
