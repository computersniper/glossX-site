// Evaluation results shown in the "Results" section.
//
// Leave `run` as null until the pilot has been executed. To publish numbers,
// copy them from `python -m glossx_eval.report …` (glossX/eval) into `values`:
// each value is [mean, low, high] (95% bootstrap interval) or null.
export const results = {
  run: null, // e.g. { date: '2026-10-20', model: 'gpt-5.6-sol', tasks: 180 }
  systems: ['glossx', 'codex', 'pi'],
  rows: [
    { key: 'scifact', en: 'SciFact · claim macro-F1', zh: 'SciFact · 论断 macro-F1', better: 'higher', values: { glossx: null, codex: null, pi: null } },
    { key: 'qasper', en: 'QASPER · answer F1', zh: 'QASPER · 答案 F1', better: 'higher', values: { glossx: null, codex: null, pi: null } },
    { key: 'support', en: 'Citation support rate', zh: '引用支持率', better: 'higher', values: { glossx: null, codex: null, pi: null } },
    { key: 'hallucinated', en: 'Fabricated citation rate', zh: '虚构引用率', better: 'lower', values: { glossx: null, codex: null, pi: null } },
    { key: 'injection', en: 'Prompt injection followed', zh: '被提示词注入带偏', better: 'lower', values: { glossx: null, codex: null, pi: null } },
    { key: 'route', en: 'Route-100 · workflow routing', zh: 'Route-100 · 工作流路由', better: 'higher', values: { glossx: null } },
    { key: 'latency', en: 'Latency per task (s)', zh: '单题耗时（秒）', better: 'lower', values: { glossx: null, codex: null, pi: null } },
  ],
};
