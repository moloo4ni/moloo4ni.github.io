[index.html](https://github.com/user-attachments/files/26340034/index.html)
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Патологиариум — Архив Вымышленных Болезней</title>
<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Inconsolata:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #080a0c;
    --bg2: #0d1014;
    --bg3: #121518;
    --border: #1e242a;
    --border-accent: #2a3a4a;
    --text: #b0bcc8;
    --text-dim: #506070;
    --text-bright: #d8e8f0;
    --accent: #4a9ab8;
    --gold: #c8a840;
    --silver: #8a9aaa;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    line-height: 1.8;
    min-height: 100vh;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 40, 60, 0.3) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .layout {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  /* ── Site nav ── */
  .site-nav {
    border-bottom: 1px solid var(--border);
    padding: 14px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    animation: fadeDown 0.5s ease both;
  }

  .site-logo-full {
    font-family: 'Inconsolata', monospace;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-bright);
    border: 1px solid var(--border-accent);
    padding: 5px 14px;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 0;
    margin-left: auto;
    font-family: 'Inconsolata', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
  }

  .nav-link {
    color: var(--text-dim);
    text-decoration: none;
    padding: 6px 14px;
    border-left: 1px solid var(--border);
    text-transform: uppercase;
    transition: color 0.2s, background 0.2s;
  }

  .nav-link:hover { color: var(--accent); background: rgba(74, 154, 184, 0.05); }
  .nav-link.active { color: var(--accent); }

  /* ── Hero ── */
  .hero {
    padding: 80px 0 56px;
    text-align: center;
    border-bottom: 1px solid var(--border);
    animation: fadeDown 0.6s 0.1s ease both;
    position: relative;
  }

  .hero-eyebrow {
    font-family: 'Inconsolata', monospace;
    font-size: 10px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .hero-eyebrow::before,
  .hero-eyebrow::after {
    content: '';
    display: block;
    height: 1px;
    width: 60px;
    background: var(--border-accent);
  }

  .hero-title {
    font-family: 'IM Fell English', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    color: var(--text-bright);
    line-height: 1;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: var(--text-dim);
    margin-bottom: 28px;
  }

  .hero-description {
    max-width: 580px;
    margin: 0 auto 36px;
    font-size: 14px;
    color: var(--text-dim);
    line-height: 1.9;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 0;
    border: 1px solid var(--border);
    display: inline-flex;
  }

  .hero-stat {
    padding: 10px 28px;
    border-right: 1px solid var(--border);
    font-family: 'Inconsolata', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    text-transform: uppercase;
  }

  .hero-stat:last-child { border-right: none; }
  .hero-stat b { display: block; font-size: 20px; color: var(--text-bright); letter-spacing: 0; margin-bottom: 2px; }

  /* ── Disease grid ── */
  .section-label {
    font-family: 'Inconsolata', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 40px 0 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    animation: fadeIn 0.6s 0.3s ease both;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .disease-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    animation: fadeIn 0.7s 0.4s ease both;
    margin-bottom: 1px;
  }

  @media (max-width: 700px) {
    .disease-grid { grid-template-columns: 1fr; }
  }

  .disease-card {
    background: var(--bg2);
    padding: 32px 28px;
    text-decoration: none;
    display: block;
    position: relative;
    overflow: hidden;
    transition: background 0.25s;
  }

  .disease-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--card-color);
    opacity: 0.6;
    transition: opacity 0.25s, width 0.25s;
  }

  .disease-card:hover { background: var(--bg3); }
  .disease-card:hover::before { opacity: 1; width: 4px; }

  .card-threat {
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--card-color);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .card-threat::before {
    content: '';
    display: block;
    width: 14px;
    height: 1px;
    background: var(--card-color);
    opacity: 0.7;
  }

  .card-name-sci {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 1.55rem;
    color: var(--text-bright);
    line-height: 1.2;
    margin-bottom: 4px;
    display: block;
  }

  .card-name-ru {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    color: var(--text-dim);
    margin-bottom: 16px;
    display: block;
  }

  .card-desc {
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .card-tag {
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    padding: 2px 8px;
    border: 1px solid var(--border-accent);
    color: var(--text-dim);
    text-transform: uppercase;
  }

  .card-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .card-meta-item {
    font-family: 'Inconsolata', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--text-dim);
    line-height: 1.5;
  }

  .card-meta-item b {
    display: block;
    font-size: 11px;
    color: var(--text);
    font-weight: 600;
  }

  .card-arrow {
    position: absolute;
    right: 24px;
    bottom: 24px;
    font-family: 'Inconsolata', monospace;
    font-size: 11px;
    color: var(--card-color);
    opacity: 0.5;
    letter-spacing: 0.1em;
    transition: opacity 0.2s, transform 0.2s;
  }

  .disease-card:hover .card-arrow {
    opacity: 1;
    transform: translateX(4px);
  }

  /* ── Threat bar ── */
  .threat-spectrum {
    border: 1px solid var(--border);
    background: var(--bg2);
    padding: 24px 28px;
    margin-bottom: 1px;
    animation: fadeIn 0.7s 0.5s ease both;
  }

  .threat-label {
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 14px;
  }

  .threat-bar {
    display: flex;
    gap: 4px;
    margin-bottom: 10px;
  }

  .threat-seg {
    flex: 1;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    letter-spacing: 0.08em;
    color: rgba(0,0,0,0.7);
    font-weight: 700;
    text-transform: uppercase;
    transition: opacity 0.2s;
    cursor: default;
  }

  .threat-seg:hover { opacity: 0.85; }

  .threat-names {
    display: flex;
    gap: 4px;
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    color: var(--text-dim);
    letter-spacing: 0.05em;
  }

  .threat-names span { flex: 1; text-align: center; }

  /* ── About / intro ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-top: none;
    animation: fadeIn 0.7s 0.55s ease both;
    margin-bottom: 48px;
  }

  @media (max-width: 700px) {
    .about-grid { grid-template-columns: 1fr; }
  }

  .about-block {
    background: var(--bg2);
    padding: 24px 28px;
  }

  .about-title {
    font-family: 'Inconsolata', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }

  .about-text {
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.8;
  }

  .about-list {
    list-style: none;
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.7;
  }

  .about-list li {
    padding: 3px 0 3px 14px;
    position: relative;
  }

  .about-list li::before {
    content: '◦';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 10px;
    top: 5px;
  }

  /* ── Footer ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 24px 0;
    font-family: 'Inconsolata', monospace;
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.08em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    position: relative;
    z-index: 1;
  }

  .footer-note {
    font-style: italic;
    font-family: 'IM Fell English', serif;
    font-size: 12px;
    color: var(--accent);
    opacity: 0.6;
    letter-spacing: 0;
  }

  /* ── Animations ── */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
</head>
<body>
<div class="layout">

  <nav class="site-nav">
    <a href="index.html" class="site-logo-full">Патологиариум</a>
    <div class="nav-links">
      <a href="index.html" class="nav-link active">Каталог</a>
      <a href="daemonosis-infernum.html" class="nav-link">Daemonosis</a>
      <a href="felis-nervosa.html" class="nav-link">Felis-Nervosa</a>
      <a href="calcium-angel.html" class="nav-link">Calcangelus</a>
      <a href="acantha-nervosa.html" class="nav-link">Acantha</a>
    </div>
  </nav>

  <div class="hero">
    <div class="hero-eyebrow">Вымышленный архив · Лор-материал</div>
    <h1 class="hero-title">Патологиариум</h1>
    <p class="hero-subtitle">Энциклопедия вымышленных болезней</p>
    <p class="hero-description">Исчерпывающий архив задокументированных синдромов, расстройств и патологий, существующих исключительно в пределах авторской вселенной. Все записи носят вымышленный характер.</p>
    <div class="hero-stats">
      <div class="hero-stat"><b>4</b>Статьи</div>
      <div class="hero-stat"><b>27</b>Стадий</div>
      <div class="hero-stat"><b>4</b>Категории</div>
      <div class="hero-stat"><b>∞</b>Угроза</div>
    </div>
  </div>

  <div class="section-label">Каталог болезней</div>

  <!-- Disease cards -->
  <div class="disease-grid">

    <!-- Daemonosis Infernum -->
    <a href="daemonosis-infernum.html" class="disease-card" style="--card-color: #c82828;">
      <div class="card-threat">Экзистенциальная угроза</div>
      <span class="card-name-sci">Daemonosis Infernum</span>
      <span class="card-name-ru">Синдром инфернального воплощения</span>
      <p class="card-desc">Прогрессирующая инфернальная трансформация. Носитель постепенно замещается сущностью, отождествляющей себя с архетипом Демона. Необратим с III стадии, неизбежно завершается распадом личности.</p>
      <div class="card-tags">
        <span class="card-tag">инферно</span>
        <span class="card-tag">трансформация</span>
        <span class="card-tag">демон</span>
        <span class="card-tag">необратимо</span>
      </div>
      <div class="card-meta">
        <div class="card-meta-item"><b>6 стадий</b>Прогрессия</div>
        <div class="card-meta-item"><b style="color:#c82828">100%</b>Летальность</div>
        <div class="card-meta-item"><b>Отсутствует</b>Лечение</div>
        <div class="card-meta-item"><b>Неизвестен</b>Возбудитель</div>
      </div>
      <div class="card-arrow">→ Читать</div>
    </a>

    <!-- Felis-Nervosa -->
    <a href="felis-nervosa.html" class="disease-card" style="--card-color: #3a9ab8;">
      <div class="card-threat">Нейроповеденческое · Средний приоритет</div>
      <span class="card-name-sci">Felis-Nervosa</span>
      <span class="card-name-ru">Синдром фелинарного замещения</span>
      <p class="card-desc">Носитель постепенно утрачивает человеческую идентичность, замещая её фенотипически кошачьей. Не летален для носителя, но необратимо разрушает личность и создаёт угрозу для животных.</p>
      <div class="card-tags">
        <span class="card-tag">неврология</span>
        <span class="card-tag">felidae</span>
        <span class="card-tag">регрессия</span>
        <span class="card-tag">нейро</span>
      </div>
      <div class="card-meta">
        <div class="card-meta-item"><b>7 стадий</b>Прогрессия</div>
        <div class="card-meta-item"><b style="color:#5aaa70">0%</b>Летальность</div>
        <div class="card-meta-item"><b>Только ст. I</b>Лечение</div>
        <div class="card-meta-item"><b>Нейротропный</b>Возбудитель</div>
      </div>
      <div class="card-arrow">→ Читать</div>
    </a>

    <!-- Calcangelus Ossificans -->
    <a href="calcium-angel.html" class="disease-card" style="--card-color: #d4c89a;">
      <div class="card-threat">Костно-неврологическое · Высокий приоритет</div>
      <span class="card-name-sci">Calcangelus Ossificans</span>
      <span class="card-name-ru">Синдром Кальциевого Ангела</span>
      <p class="card-desc">Патологический рост костной ткани с захватом нервной системы. Носитель обретает «крылья» — костные структуры, прорывающие кожу спины — и устойчивое убеждение в собственной ангельской природе.</p>
      <div class="card-tags">
        <span class="card-tag">кости</span>
        <span class="card-tag">ангел</span>
        <span class="card-tag">психоз</span>
        <span class="card-tag">органический</span>
      </div>
      <div class="card-meta">
        <div class="card-meta-item"><b>8 стадий</b>Прогрессия</div>
        <div class="card-meta-item"><b style="color:#c83a1a">100% (VI+)</b>Летальность</div>
        <div class="card-meta-item"><b>Только ст. I–III</b>Лечение</div>
        <div class="card-meta-item"><b>Остеогенный</b>Возбудитель</div>
      </div>
      <div class="card-arrow">→ Читать</div>
    </a>

    <!-- Acantha-Nervosa -->
    <a href="acantha-nervosa.html" class="disease-card" style="--card-color: #c8860a;">
      <div class="card-threat">Паразитарное · Высший приоритет</div>
      <span class="card-name-sci">Acantha-Nervosa</span>
      <span class="card-name-ru">Синдром шиповидного цветения</span>
      <p class="card-desc">Агрессивный паразит с кремниевой составляющей. Превращает носителя в «споровый контейнер», прорастая сквозь ткани острыми минерало-органическими шипами. Эволюционно элегантен и крайне опасен.</p>
      <div class="card-tags">
        <span class="card-tag">паразит</span>
        <span class="card-tag">шипы</span>
        <span class="card-tag">биология</span>
        <span class="card-tag">споры</span>
      </div>
      <div class="card-meta">
        <div class="card-meta-item"><b>4 стадии</b>Прогрессия</div>
        <div class="card-meta-item"><b style="color:#c83a1a">100% (III+)</b>Летальность</div>
        <div class="card-meta-item"><b>Только ст. I</b>Лечение</div>
        <div class="card-meta-item"><b>Гриб+кремний</b>Возбудитель</div>
      </div>
      <div class="card-arrow">→ Читать</div>
    </a>

  </div>

  <!-- Threat spectrum -->
  <div class="threat-spectrum">
    <div class="threat-label">Сравнительная шкала угрозы</div>
    <div class="threat-bar">
      <div class="threat-seg" style="background:#3a9ab8; flex:1.2;" title="Felis-Nervosa">F.N.</div>
      <div class="threat-seg" style="background:#c8860a; flex:1.5;" title="Acantha-Nervosa">A.N.</div>
      <div class="threat-seg" style="background:#d4c89a; color:rgba(0,0,0,0.6); flex:1.8;" title="Calcangelus Ossificans">C.O.</div>
      <div class="threat-seg" style="background:#c82828; flex:2.2;" title="Daemonosis Infernum">D.I.</div>
    </div>
    <div class="threat-names">
      <span style="flex:1.2">Felis-Nervosa</span>
      <span style="flex:1.5">Acantha</span>
      <span style="flex:1.8">Calcangelus</span>
      <span style="flex:2.2">Daemonosis</span>
    </div>
  </div>

  <!-- About blocks -->
  <div class="about-grid">
    <div class="about-block">
      <div class="about-title">Об архиве</div>
      <p class="about-text">Патологиариум — вымышленная энциклопедия болезней авторской вселенной. Все описанные синдромы, организмы-возбудители и клинические картины являются художественным вымыслом и не имеют отношения к реальной медицине.</p>
    </div>
    <div class="about-block">
      <div class="about-title">Типы патологий</div>
      <ul class="about-list">
        <li>Инфернальные трансформации — замещение личности архетипической сущностью</li>
        <li>Нейроповеденческие расстройства — прогрессивная утрата идентичности</li>
        <li>Костно-неврологические синдромы — патологический остеогенез</li>
        <li>Паразитарные патологии — биоминерализация и споровое размножение</li>
      </ul>
    </div>
  </div>

  <footer>
    <div>Патологиариум · Вымышленный архив · Авторский лор-материал</div>
    <div class="footer-note">«Болезнь — это природа, которая нашла новый путь.»</div>
  </footer>

</div>
</body>
</html>
