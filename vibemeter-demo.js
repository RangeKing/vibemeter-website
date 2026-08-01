(() => {
  const copy = {
    en: {
      demo: 'Demo data', data: 'Data', live: 'Live', vcti: 'VCTI', share: 'Share', settings: 'Settings',
      local: 'Processed on this Mac · Privacy first', dataEyebrow: 'YOUR WORK WITH AGENTS',
      dataTitle: 'The work you and your agents completed', dataBody: 'Sessions, time, tokens, skills, models, and work events in one place.',
      sessions: 'Sessions', duration: 'Agent time', tokens: 'Tokens', cost: 'Estimated cost', days: 'Active days',
      trend: 'Usage trend', trendBody: 'Agent activity across the selected range', skills: 'Skill use', activity: 'Active days',
      liveEyebrow: 'LIVE AGENT STATUS', liveTitle: 'See what your agents are doing', liveBody: 'Current activity comes first, followed by today’s timeline and recent waits or errors.',
      activeAgents: 'active agents', connected: 'Live Hooks connected', hookBody: 'Claude Code and Codex are reporting structured status.',
      current: 'Current activity', priority: 'waiting › error › running', runningTool: 'Running tool', needsYou: 'Needs confirmation',
      today: 'Today’s timeline', recent: 'Waiting / error history', editing: 'Editing', verified: 'Verification finished',
      vctiEyebrow: 'VIBE CODING TYPE INDICATOR', vctiTitle: 'Your Vibe Coding profile', vctiBody: 'Built from readable local behavior—not a questionnaire.',
      stable: 'Stable 90-day window', delivery: 'Delivery driver', rush: 'Sprint Finisher', rushLine: 'You keep a steady pace, then speed up near delivery and finish the last details.',
      observed: '162 sessions · 46 active days', confidence: 'High match · 82%', makeCard: 'Make profile card', atlas: 'View all 24 profiles',
      scores: 'Six profile dimensions', start: 'Starting structure', delegation: 'Delegation', guardrail: 'Guardrails', debug: 'Debug depth', shipping: 'Shipping', nomad: 'Tool switching',
      shareTitle: 'Share', shareBody: 'Turn results and evidence into a card that is ready to post.', preview: 'Preview', exact: '2160 × 2880 px',
      template: 'Template', overview: 'Usage Overview', wrapped: 'Developer Wrapped', compare: 'Agent Comparison', recap: 'Session Recap', identity: 'Profile card', phrases: 'Catchphrases',
      aspect: 'Aspect ratio', language: 'Card language', appearance: 'Appearance', export: 'Export PNG', safe: 'Share Guard · Ready',
      cardEyebrow: '90 DAYS WITH CODING AGENTS', cardTitle: 'A clear view of how I worked', cardBody: 'A local summary generated with VibeMeter',
      menuTitle: 'VibeMeter', tokenUse: 'Token usage', input: 'Input', output: 'Output', cache: 'Cache',
      activity90: '90-day activity', quota: 'Remaining quota', providers: 'Provider status', open: 'Open VibeMeter', healthy: 'Available',
      todayRange: 'Today', week: 'Week', month: 'Month', days90: '90 days', half: '6 months', year: 'Year',
      activeDaysShort: 'active days', localEstimate: 'local estimate', socketReady: 'connected', evidenceDims: 'Six dimensions backed by local evidence',
      copyAction: 'Copy', cardLanguageValue: 'English', appearanceValue: 'Light',
      tokenTotal: '640M', inputTotal: '28.4M', outputTotal: '11.2M', cacheTotal: '590M', codexTotal: '380M', claudeTotal: '210M', kimiTotal: '50M',
    },
    'zh-CN': {
      demo: '示例数据', data: '数据', live: '实时', vcti: 'VCTI', share: '分享', settings: '设置',
      local: '本机处理 · 隐私优先', dataEyebrow: '你与 AGENT 一起完成的工作',
      dataTitle: '你与 Agent\n一起完成的工作', dataBody: '会话、时长、Token、Skill、模型和工作事件，都在一页里。',
      sessions: '会话', duration: 'Agent 时长', tokens: 'Token', cost: '预估成本', days: '活跃日',
      trend: '使用趋势', trendBody: '所选时间范围内的 Agent 活动', skills: 'Skill 使用', activity: '活跃日期',
      liveEyebrow: 'AGENT 实时状态', liveTitle: 'Agent 在做什么，一眼就知道', liveBody: '先看正在进行的会话，再看今天的时间线和最近的等待、错误记录。',
      activeAgents: '个活跃 Agent', connected: '实时 Hook 已连接', hookBody: 'Claude Code 和 Codex 正在提供结构化状态。',
      current: '此刻的 Agent 活动', priority: '等待 › 错误 › 运行', runningTool: '正在调用工具', needsYou: '等待你确认',
      today: '今天的时间线', recent: '等待与错误记录', editing: '正在编辑', verified: '验证完成',
      vctiEyebrow: 'VIBE CODING TYPE INDICATOR', vctiTitle: '你的 Vibe Coding 人格', vctiBody: '根据本机可读取的实际协作行为生成，不用答题。',
      stable: '稳定画像窗口 · 近期行为加权', delivery: '交付推进派', rush: '冲刺收尾者', rushLine: '平时稳步推进，临近交付时会明显加速，把最后几步做完。',
      observed: '162 次会话 · 46 个活跃日', confidence: '高度匹配 · 82%', makeCard: '生成人格分享卡', atlas: '查看全部 24 种人格',
      scores: '六个人格维度', start: '开工结构', delegation: '任务委派', guardrail: '验证习惯', debug: '调试深度', shipping: '交付推进', nomad: '工具切换',
      shareTitle: '分享', shareBody: '把成果与证据整理成可以直接发布的分享卡片。', preview: '实时预览', exact: '2160 × 2880 px',
      template: '模板', overview: '使用概览', wrapped: '开发者回顾', compare: 'Agent 对比', recap: '会话回顾', identity: '人格分享卡', phrases: '口头禅',
      aspect: '卡片比例', language: '卡片语言', appearance: '外观', export: '导出 PNG', safe: '分享保护 · 可以导出',
      cardEyebrow: '与 CODING AGENT 协作的 90 天', cardTitle: '这 90 天，我和 Agent 这样工作', cardBody: '由 VibeMeter 在本机整理的使用概览',
      menuTitle: 'VibeMeter', tokenUse: 'Token 消耗', input: '输入', output: '输出', cache: '缓存',
      activity90: '90 天活跃', quota: '剩余额度', providers: 'Provider 状态', open: '打开 VibeMeter', healthy: '运行正常',
      todayRange: '今天', week: '周', month: '月', days90: '90 天', half: '半年', year: '一年',
      activeDaysShort: '个活跃日', localEstimate: '本机估算', socketReady: '已连接', evidenceDims: '六个维度，均有本机证据',
      copyAction: '复制', cardLanguageValue: '中文', appearanceValue: '浅色',
      tokenTotal: '6.4 亿', inputTotal: '2,840万', outputTotal: '1,120万', cacheTotal: '5.9亿', codexTotal: '3.8 亿', claudeTotal: '2.1 亿', kimiTotal: '0.5 亿',
    },
  };

  const agents = [
    ['codex', 'Codex', './logos/codex.svg'],
    ['claude', 'Claude Code', './logos/claude.svg'],
    ['kimi', 'Kimi Code', './logos/kimi.svg'],
    ['cursor', 'Cursor', './logos/cursor.svg'],
  ];

  const currentCopy = () => copy[document.documentElement.dataset.language] || copy.en;
  const icon = (path, label) => `<span class="vm-agent-icon"><img src="${path}" alt="" /><b>${label}</b></span>`;
  const rangePicker = (c) => `<div class="vm-range">${[c.todayRange, c.week, c.month, c.days90, c.half, c.year].map((item, index) => `<span class="${index === 3 ? 'active' : ''}">${item}</span>`).join('')}</div>`;
  const demoBadge = (c) => `<span class="vm-demo-badge">${c.demo}</span>`;
  const navGlyph = (id) => ({ data: '▥', live: '◉', vcti: '⌁', share: '⌯', settings: '⚙' }[id] || '•');

  function sidebar(active, c) {
    const item = (id, label) => `<span class="vm-nav-item ${active === id ? 'active' : ''}"><i>${navGlyph(id)}</i>${label}</span>`;
    return `<aside class="vm-sidebar">
      <div class="vm-brand"><img src="./icon.png?v=1" alt="" /><span><b>VibeMeter</b><small>Track your agents.<br />Discover your coding type.</small></span></div>
      <nav>${item('data', c.data)}${item('live', c.live)}${item('vcti', c.vcti)}</nav>
      <div class="vm-sidebar-spacer"></div>
      <nav>${item('share', c.share)}${item('settings', c.settings)}</nav>
      <small class="vm-local-note">${c.local}</small>
    </aside>`;
  }

  function shell(active, body, c) {
    return `<div class="vm-app" data-vm-virtual="true" aria-hidden="true">
      <div class="vm-titlebar"><i></i><i></i><i></i></div>
      ${sidebar(active, c)}
      <main class="vm-main">${demoBadge(c)}${body}</main>
    </div>`;
  }

  function chartPath(values, width = 420, height = 128) {
    const max = Math.max(...values);
    const min = Math.min(...values);
    return values.map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / Math.max(1, max - min)) * (height - 18) - 9;
      return `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }

  function trendSvg() {
    const codex = chartPath([11, 18, 16, 28, 24, 42, 38, 51, 46, 72, 60, 84, 68, 90, 78, 96, 74, 110]);
    const claude = chartPath([8, 13, 19, 14, 24, 21, 34, 32, 44, 38, 52, 48, 62, 54, 71, 63, 76, 70]);
    return `<svg class="vm-trend-chart" viewBox="0 0 420 150" preserveAspectRatio="none" aria-hidden="true">
      <g class="grid"><path d="M0 25H420M0 67H420M0 109H420M0 149H420" /></g>
      <path class="area" d="${codex} L420,150 L0,150 Z" />
      <path class="line codex" d="${codex}" /><path class="line claude" d="${claude}" />
    </svg>`;
  }

  function dataPage(c) {
    const metric = (label, value, foot, cls = '') => `<div class="vm-metric ${cls}"><span>${label}</span><strong>${value}</strong><small>${foot}</small></div>`;
    const chips = agents.map(([, name, path]) => icon(path, name)).join('');
    const body = `<header class="vm-page-header vm-data-header"><div><span class="vm-eyebrow">▥ ${c.dataEyebrow}</span><h1>${c.dataTitle.replace('\n', '<br />')}</h1><p>${c.dataBody}</p></div><div class="vm-header-tools"><div class="vm-agent-chips">${chips}</div>${rangePicker(c)}</div></header>
      <section class="vm-ledger">
        ${metric(c.sessions, '218', c.days90)}${metric(c.duration, '146 h 32 m', `58 ${c.activeDaysShort}`)}
        ${metric(c.tokens, c.tokenTotal, `${c.input} ${c.inputTotal} · ${c.output} ${c.outputTotal} · ${c.cache} ${c.cacheTotal}`, 'featured')}
        ${metric(c.cost, 'US$428.60', c.localEstimate, 'warm')}${metric(c.days, '58', c.days90)}
      </section>
      <section class="vm-panel vm-trend-panel"><header><div><h2>${c.trend}</h2><p>${c.trendBody}</p></div><span class="vm-kicker">✦ ALL AGENTS</span></header>
        <div class="vm-chart-legend"><span><i class="codex"></i>Codex <b>${c.codexTotal}</b></span><span><i class="claude"></i>Claude Code <b>${c.claudeTotal}</b></span><span><i class="kimi"></i>Kimi Code <b>${c.kimiTotal}</b></span></div>${trendSvg()}
      </section>
      <div class="vm-mini-grid"><section class="vm-panel"><h3>${c.activity}</h3><div class="vm-heatmap">${Array.from({ length: 45 }, (_, i) => `<i style="--level:${(i * 7 + 3) % 5}"></i>`).join('')}</div></section><section class="vm-panel"><h3>${c.skills}</h3><div class="vm-skill-bars"><span>frontend-design <i style="--w:88%"></i></span><span>Playwright <i style="--w:69%"></i></span><span>git <i style="--w:52%"></i></span></div></section></div>`;
    return shell('data', body, c);
  }

  function sessionCard({ name, path, project, status, waiting = false }, c) {
    return `<article class="vm-session ${waiting ? 'waiting' : ''}"><header>${icon(path, name)}<span class="vm-state-dot"></span></header><small>${project}</small><h3>${status}</h3><div class="vm-session-progress"><i></i></div><footer><span>${waiting ? '00:42' : '08:16'}</span><b>${waiting ? '!' : '↗'}</b></footer></article>`;
  }

  function livePage(c) {
    const body = `<header class="vm-page-header vm-live-header"><div><span class="vm-eyebrow">◉ ${c.liveEyebrow}</span><h1>${c.liveTitle}</h1><p>${c.liveBody}</p></div><div class="vm-live-count"><i></i><strong>2</strong><span>${c.activeAgents}</span><small>${c.socketReady}</small></div></header>
      <aside class="vm-hook-strip"><b>✓</b><span><strong>${c.connected}</strong><small>${c.hookBody}</small></span><em>${c.settings} →</em></aside>
      <section class="vm-live-workspace"><header><div><h2>${c.current}</h2><p>${c.liveBody}</p></div><span class="vm-kicker">${c.priority}</span></header><div class="vm-session-grid">
        ${sessionCard({ name: 'Codex', path: './logos/codex.svg', project: 'vibemeter-web', status: c.runningTool }, c)}
        ${sessionCard({ name: 'Claude Code', path: './logos/claude.svg', project: 'docs-refresh', status: c.needsYou, waiting: true }, c)}
      </div></section>
      <div class="vm-live-split"><section class="vm-panel"><h3>◷ ${c.today}</h3><ul class="vm-timeline"><li><i class="codex"></i><span><b>Codex · vibemeter-web</b><small>10:24 · ${c.editing}</small></span></li><li><i class="claude"></i><span><b>Claude Code · docs-refresh</b><small>10:21 · ${c.needsYou}</small></span></li><li><i class="codex"></i><span><b>Codex · release-check</b><small>10:12 · ${c.verified}</small></span></li></ul></section><section class="vm-panel"><h3>△ ${c.recent}</h3><div class="vm-history-item"><b>${c.needsYou}</b><span>Claude Code · docs-refresh</span><small>42 sec</small></div><div class="vm-history-item muted"><b>${c.verified}</b><span>Codex · release-check</span><small>12 min</small></div></section></div>`;
    return shell('live', body, c);
  }

  function avatarArt() {
    return `<div class="vm-avatar"><svg viewBox="0 0 320 320" aria-hidden="true"><defs><linearGradient id="runnerPaper" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f9f4ea"/><stop offset="1" stop-color="#e6ddd0"/></linearGradient></defs><rect width="320" height="320" rx="26" fill="url(#runnerPaper)"/><path d="M57 245 132 187l58 20-43 55-62 21Z" fill="#2d3130"/><path d="m118 171 44-72 56 19-15 66-58 25Z" fill="#474b48"/><path d="m158 104 28-48 40 28-12 45Z" fill="#2a2e2d"/><path d="m204 188 64-50 19 36-65 44Z" fill="#e56f2d"/><path d="m130 187-44-41-32 25 51 55Z" fill="#e56f2d"/><path d="m147 262 63 7-16 29-75-11Z" fill="#e56f2d"/><path d="m218 118 28 43-41 26Z" fill="#f3a34e"/><circle cx="197" cy="110" r="4" fill="#171a19"/><path d="m72 72 17 9-14 12m174 154 22-8-8 20" fill="none" stroke="#e56f2d" stroke-width="8" stroke-linecap="round"/></svg><b>RUSH</b></div>`;
  }

  function vctiPage(c) {
    const scoreData = [[c.start, 74], [c.delegation, 61], [c.guardrail, 83], [c.debug, 68], [c.shipping, 91], [c.nomad, 57]];
    const scores = scoreData.map(([label, value]) => `<div><span><b>${label}</b><strong>${value}</strong></span><i><em style="--w:${value}%"></em></i></div>`).join('');
    const body = `<header class="vm-page-header vm-vcti-header"><div><span class="vm-eyebrow">⌁ ${c.vctiEyebrow}</span><h1>${c.vctiTitle}</h1><p>${c.vctiBody}</p></div><div class="vm-header-tools">${rangePicker(c)}<div class="vm-period"><span>${c.stable}</span><strong>2026/5/4 — 2026/8/1</strong></div></div></header>
      <section class="vm-vcti-reveal"><div class="vm-vcti-copy"><span class="vm-guild">${c.delivery}</span><h2><b>RUSH</b>${c.rush}</h2><p>${c.rushLine}</p><div class="vm-vcti-meta"><span>◫ ${c.observed}</span><span>♢ ${c.confidence}</span></div><div class="vm-badges"><span>MARATHON · 长跑选手</span><span>TURBO · 加速党</span><span>FINISH · 收尾王</span></div><div class="vm-vcti-actions"><b>✦ ${c.makeCard}</b><span>◉ ${c.atlas}</span></div></div>${avatarArt()}</section>
      <section class="vm-panel vm-score-panel"><header><span>01</span><div><h2>${c.scores}</h2><p>${c.evidenceDims}</p></div></header><div class="vm-scores">${scores}</div></section>`;
    return shell('vcti', body, c);
  }

  function shareCard(c) {
    return `<div class="vm-share-card"><span>${c.cardEyebrow}</span><h2>${c.cardTitle}</h2><p>${c.cardBody}</p><div class="vm-card-metrics"><div><small>${c.sessions}</small><strong>218</strong></div><div><small>${c.duration}</small><strong>146 h</strong></div><div><small>${c.days}</small><strong>58</strong></div></div><div class="vm-card-chart">${trendSvg()}</div><footer><span><img src="./icon.png?v=1" alt="" />VibeMeter</span><b>github.com/RangeKing/vibemeter</b></footer></div>`;
  }

  function sharePage(c) {
    const templates = [c.overview, c.wrapped, c.compare, c.recap, c.identity, c.phrases];
    const body = `<header class="vm-page-header vm-share-header"><div><span class="vm-eyebrow">⌯ SHARE STUDIO</span><h1>${c.shareTitle}</h1><p>${c.shareBody}</p></div>${rangePicker(c)}</header>
      <div class="vm-share-layout"><section class="vm-preview-shell"><header><div><b>${c.preview}</b><small>${c.exact}</small></div><span>− &nbsp; 100% &nbsp; ＋ &nbsp; ⛶</span></header><div class="vm-preview-stage">${shareCard(c)}</div><footer><span>✓ ${c.safe}</span><div><b>${c.copyAction}</b><b>SVG</b><strong>↓ ${c.export}</strong></div></footer></section>
      <aside class="vm-controls"><section><h2>▦ ${c.template}</h2><div class="vm-template-list">${templates.map((item, index) => `<span class="${index === 0 ? 'active' : ''}"><i>${index < 4 ? `D${index + 1}` : index === 4 ? 'V' : 'C'}</i><b>${item}</b>${index === 0 ? '✓' : ''}</span>`).join('')}</div></section><section><h2>▣ ${c.aspect}</h2><div class="vm-ratios"><span>1:1</span><span>4:5</span><span class="active">3:4</span><span>9:16</span><span>16:9</span></div></section><section class="vm-control-row"><span>${c.language}<b>${c.cardLanguageValue}</b></span><span>${c.appearance}<b>${c.appearanceValue}</b></span></section></aside></div>`;
    return shell('share', body, c);
  }

  function menuBar(c) {
    const bars = [2, 1, 3, 6, 4, 8, 5, 9, 12, 7, 5, 11, 9, 8, 6];
    return `<div class="vm-menu-popover" data-vm-virtual="true" aria-hidden="true">
      <header><span><img src="./icon.png?v=1" alt="" /><b>${c.menuTitle}</b></span>${demoBadge(c)}<i>×</i></header>
      ${rangePicker(c)}
      <section class="vm-menu-total"><span>${c.tokenUse}</span><strong>${c.tokenTotal}</strong><div><small><i class="input"></i>${c.input}<b>${c.inputTotal}</b></small><small><i class="output"></i>${c.output}<b>${c.outputTotal}</b></small><small><i class="cache"></i>${c.cache}<b>${c.cacheTotal}</b></small></div></section>
      <section class="vm-menu-activity"><header><span>⌁ ${c.activity90}</span><b>US$428.60</b></header><div>${bars.map((value) => `<i style="--h:${value}"></i>`).join('')}</div></section>
      <section class="vm-menu-quota"><span>${c.quota}</span><div><small>Codex · Week <b>75%</b></small><i><em style="--w:75%"></em></i></div><div><small>Codex · Spark <b>100%</b></small><i><em style="--w:100%"></em></i></div><div><small>Cursor · Pro <b>72%</b></small><i><em style="--w:72%"></em></i></div></section>
      <section class="vm-menu-providers"><span>${c.providers}</span><div><small><i></i>Anthropic<b>${c.healthy}</b></small><small><i></i>OpenAI<b>${c.healthy}</b></small><small><i></i>Cursor<b>${c.healthy}</b></small></div></section>
      <footer><b>${c.open}</b><span>↻ &nbsp; ⚙ &nbsp; ⏻</span></footer>
    </div>`;
  }

  const renderers = { data: dataPage, live: livePage, vcti: vctiPage, share: sharePage, menubar: menuBar };

  function renderAll() {
    const c = currentCopy();
    document.querySelectorAll('[data-vm-demo]').forEach((host) => {
      const renderer = renderers[host.dataset.vmDemo];
      if (!renderer) return;
      host.innerHTML = renderer(c);
    });
  }

  renderAll();
  new MutationObserver((records) => {
    if (records.some((record) => record.attributeName === 'data-language')) renderAll();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-language'] });
})();
