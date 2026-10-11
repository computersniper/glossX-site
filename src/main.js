import './style.css';
import './glossx.css';
import { results } from './results.js';

const menuButton = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
const languageToggle = document.querySelector('.language-toggle');

// English lives in index.html; it is read once from the page, so only the
// Chinese copy is kept here. Keys match the data-i18n attributes.
const zh = {
  title: 'GlossX — 和你一起做研究的 agent',
  menu: '菜单',
  'nav.product': '产品', 'nav.architecture': '架构', 'nav.results': '结果', 'nav.install': '安装',
  'hero.eyebrow': '面向科研的本地 agent 工作台',
  'hero.title': '一个<em>和你一起</em>做研究的 agent。',
  'hero.lede': 'GlossX 保留了 Gloss 作为论文阅读器的全部能力，并在上面加了一整套 agent 框架：它逐段阅读，回答附带可点击的出处，把笔记和代码留在你本机上有版本记录的工作区里。',
  'hero.primary': '获取 GlossX <span>↓</span>',
  'hero.secondary': '看看它怎么工作 <span>→</span>',
  'proof.local': '在你的机器上',
  'proof.citeTitle': '有出处', 'proof.cite': '每条结论都附页码和原文',
  'proof.pluginTitle': '11 类', 'proof.plugin': '插件，同一份清单',
  'art.title': '对比注意力机制',
  'art.ask': '稀疏注意力和线性注意力，是怎样在精度和速度之间取舍的？',
  'art.tool1': '4 篇论文', 'art.tool2': '子 agent · 并行', 'art.tool3': '已核对 11 / 14 段',
  'art.answer': '稀疏注意力只在选定的子集上精确计算，所以在长程任务上精度不掉',
  'art.answer2': '；线性核用一点精度换来 O(n) 的开销',
  'art.approve': '运行 python？· 批准', 'art.commit': '已提交 notes/attention.md',
  'statement.kicker': '阅读器，加上了 agent',
  'statement.title': '用哪个工具，<br />由模型自己<em>决定</em>。',
  'statement.body': '长期存在的会话里，agent 检索你的文库、读章节、跑代码，碰到敏感操作先问你。每一步都显示成卡片，你批准关键操作，结果留给你。',
  'reader.kicker': '两种模式，一个应用',
  'reader.title': '像 Gloss 一样读，<br />像 agent 一样干活。',
  'reader.body': '左上角一键切换。Gloss 是经典的本地论文阅读器；GlossX 是研究工作台：文库、多标签 PDF 阅读器、会话聊天，以及一个会记事的工作区。',
  'reader.f1': 'Agent 会话', 'reader.f1d': '持久、可并行；可分支、重命名、中断和继续。',
  'reader.f2': '权限模式', 'reader.f2d': '问答、Agent、自动和计划四种模式，配合允许 / 询问 / 拒绝规则。',
  'reader.f3': '回答可以核对', 'reader.f3d': '每条结论都指向文件、页码和原文引句。',
  'cap.kicker': 'agent 能做什么',
  'cap.title': '为论文而生，不只是提示词。',
  'cap.lede': '工具、子 agent 和工作流，都围绕科研和学习的真实过程来设计。',
  'cap.c1': '经过核验的文献综述',
  'cap.c1d': '规划、检索、筛选，由阅读子 agent 读论文，把每条论断对回原文段落，再写出带引用的报告。团队综述在多篇论文之间再加一个评审和一轮反驳。',
  'flow.plan': '规划', 'flow.read': '阅读 ×n', 'flow.critic': '评审', 'flow.verify': '核验', 'flow.write': '带引用的报告',
  'cap.c2': '每篇论文一个工作区', 'cap.c2d': '每个工作区都是一个 git 仓库。agent 的修改都是提交，可以看 diff、开分支、合并或回退。',
  'cap.c3': '了解你怎么学', 'cap.c3d': '学习者模型记录你对每个概念的掌握程度，讲解和自测题会按你的水平来。',
  'cap.c4': '能操作的浏览器', 'cap.c4d': '通过 CDP 使用你的 Edge 或 Chrome，有实时画面，你可以随时接管。下载和导入会先问你。',
  'cap.c5': '命令、技能、钩子', 'cap.c5d': '斜杠命令、@ 引用、SKILL.md 技能、MCP 服务和 shell 钩子，都是插件。',
  'arch.kicker': '架构',
  'arch.title': '内核很小，<br /><em>其余一切</em>都是插件。',
  'arch.lede': '内核固定、可审计。工具、模型、子 agent 和工作流都通过同一份清单接入，第三方的输出一律当作不可信数据。',
  'arch.l1': '工作台', 'arch.l1d': 'React 界面 · 文库 · 多标签 PDF 阅读器 · 会话聊天 · 工作区浏览、编辑和 diff · 内置浏览器',
  'arch.l2': 'Harness', 'arch.l2d': '会话 · 模型驱动的工具循环 · 模式与权限 · 上下文压缩 · 命令 · 子 agent · 技能 · 钩子 · @ 引用',
  'arch.l3': '插件', 'arch.l3d': '清单 v2 → 原生 Python · 声明式 · Agent Skills · MCP 客户端与服务端 · Claude Code / Codex 委托 · SSH · 模型提供方',
  'arch.l4': '内核', 'arch.l4d': '能力注册表 · 调度器 · 权限与沙箱闸门 · 预算计量 · 追踪日志',
  'arch.l5': '经典 Gloss', 'arch.l5d': '摘要 · 笔记 · 思维导图 · RAG 对话 · 翻译 · 高亮 · 参考文献 · 学术搜索',
  'arch.surfaces': '使用方式',
  'arch.s1': '桌面', 'arch.s1d': 'Electron 应用，支持多窗口',
  'arch.s2': '浏览器', 'arch.s2d': 'npm / Bun 本地网页版',
  'arch.s3d': '在终端里导入、总结、对话',
  'arch.s4': '移动端', 'arch.s4d': 'iPad、iPhone、Android，与电脑配对使用',
  'arch.models': '模型', 'arch.compat': 'OpenAI 兼容接口',
  'loop.1': '提问', 'loop.1d': '问题、@论文、/命令',
  'loop.2': '规划', 'loop.2d': '调出记忆和项目笔记',
  'loop.3': '调用工具', 'loop.3d': '文库、代码、网页、子 agent',
  'loop.4': '把关', 'loop.4d': '权限、预算、人工批准',
  'loop.5': '回答', 'loop.5d': '结论对应页码和原文',
  'loop.6': '提交', 'loop.6d': '工作区存成一次 git 提交',
  'shot.diff': 'agent 的每次修改，都是一个可以审阅的提交。',
  'shot.browser': '内置浏览器，你和 agent 共用。',
  'res.kicker': '结果',
  'res.title': '公开地测，<br />和<em>其他 agent</em> 比。',
  'res.lede': '同一个底座模型、同一份题目、每次都用全新的工作区，所有系统用同一个打分脚本。引用一律回到 PDF 原文核对。',
  'res.m1': '基准', 'res.m1d': 'SciFact 论断核查、QASPER 问答，以及检验工作流路由的 GlossX-Route-100。PaperArena、ScholarQABench 和 TutorBench 随后加入。',
  'res.m2': '引用支持度', 'res.m2d': '评审模型把每条引句判为支持、部分支持或不支持。抽 20% 人工核对，κ ≥ 0.6 才采信。',
  'res.m3': '故障注入', 'res.m3d': '论文里夹一页提示词注入、PDF 损坏、模型连不上。正确的反应是不编造。',
  'res.m4': '对比对象', 'res.m4d': 'Codex 和 pi，同一模型、同一账号，无界面运行，超时一致。其他 agent 可以通过命令行适配器加入。',
  'res.board': '试点结果',
  'res.pending': '还没有跑。试点执行后，这张表会填上数据。',
  'res.pill': '待测',
  'res.metric': '指标',
  'res.note': '试点：SciFact 30 条 + QASPER 20 条，三个系统；另有 30 条 Route-100 种子题只测 GlossX 路由。数值为均值和 95% bootstrap 区间。',
  'mobile.kicker': '在你读论文的每块屏幕上',
  'mobile.title': 'agent 留在家里，<br />你走到哪用到哪。',
  'mobile.p1': '默认本地', 'mobile.p1d': '论文、笔记、工作区和 CLI 都留在你的电脑上。',
  'mobile.p2': 'iPad、iPhone、Android', 'mobile.p2d': '同一个应用，扫码与局域网里的 GlossX 配对，看到的是同一个工作台，按触屏重新排版。',
  'mobile.p3': '远程 Linux', 'mobile.p3d': '在服务器上运行 GlossX，通过 SSH 隧道访问。',
  'install.kicker': '换一种方式做研究',
  'install.title': '带上一篇论文，<br /><em>随便问。</em>',
  'install.intro': 'GlossX 正在积极开发中。下载预览版，或从源码运行。',
  'install.d1': 'Windows 预览版', 'install.d1t': '便携版 GlossX.exe <b>→</b>', 'install.rec': '预览',
  'install.d2': 'Windows / Linux / macOS', 'install.d2t': '用 npm 从源码运行 <b>→</b>',
  'install.d3': 'iPad / iPhone / Android', 'install.d3t': '构建移动端应用 <b>→</b>',
  'install.note': 'Node 20.19+ · Python 3.11+ · 完全在本地运行',
  'footer.tag': 'Gloss 阅读器，桌边多了一个 agent。',
  'footer.readme': '项目 README',
  'footer.gloss': 'Gloss',
};

const en = { title: document.title };
const nodes = document.querySelectorAll('[data-i18n]');
nodes.forEach((node) => { en[node.dataset.i18n] = node.innerHTML; });
const links18n = {
  en: { readme: 'https://github.com/computersniper/glossX/tree/glossX-dev#readme' },
  zh: { readme: 'https://github.com/computersniper/glossX/blob/glossX-dev/README.zh.md' },
};

const systemNames = { glossx: 'GlossX', codex: 'Codex', pi: 'pi' };
const fmt = (v) => (v < 1 && v > -1 ? v.toFixed(3) : v.toFixed(1));

function renderResults(language) {
  const body = document.getElementById('results-body');
  if (!body) return;
  const head = document.querySelector('.results-table thead tr');
  head.querySelectorAll('th:not(:first-child)').forEach((th) => th.remove());
  results.systems.forEach((s) => { const th = document.createElement('th'); th.textContent = systemNames[s] || s; head.append(th); });
  body.innerHTML = '';
  results.rows.forEach((row) => {
    const tr = document.createElement('tr');
    const label = document.createElement('td');
    label.innerHTML = `${row[language]}<i class="better">${row.better === 'lower' ? '↓' : '↑'}</i>`;
    tr.append(label);
    results.systems.forEach((s) => {
      const td = document.createElement('td');
      const v = row.values[s];
      if (!(s in row.values)) { td.className = 'na'; td.textContent = 'n/a'; }
      else if (v == null) { td.className = 'empty'; td.innerHTML = '<span class="placeholder-bar"></span>'; }
      else { td.innerHTML = `<b>${fmt(v[0])}</b><small>${fmt(v[1])}–${fmt(v[2])}</small>`; }
      tr.append(td);
    });
    body.append(tr);
  });
  const status = document.getElementById('results-status');
  const meta = document.getElementById('results-meta');
  if (results.run) {
    status.textContent = language === 'zh' ? '已更新' : 'Updated';
    status.classList.add('ready');
    const { date, model, tasks } = results.run;
    meta.textContent = language === 'zh'
      ? `${date} · 模型 ${model} · ${tasks} 次运行`
      : `${date} · model ${model} · ${tasks} runs`;
  }
}

function applyLanguage(language) {
  const text = language === 'zh' ? zh : en;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = text.title;
  nodes.forEach((node) => {
    const value = text[node.dataset.i18n] ?? en[node.dataset.i18n];
    if (value !== undefined) node.innerHTML = value;
  });
  languageToggle.textContent = language === 'zh' ? 'EN' : '中文';
  languageToggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  document.querySelector('.readme-link').href = links18n[language].readme;
  renderResults(language);
  try { localStorage.setItem('glossx-site-language', language); } catch { /* storage unavailable */ }
}

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  links.classList.toggle('open', !expanded);
});

links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

languageToggle?.addEventListener('click', () => applyLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh'));

let saved = null;
try { saved = localStorage.getItem('glossx-site-language'); } catch { /* storage unavailable */ }
applyLanguage(saved || (navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en'));
