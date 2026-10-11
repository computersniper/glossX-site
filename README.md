# glossX-site

The website for [GlossX](https://github.com/computersniper/glossX), built the same way as
[gloss-site](https://github.com/computersniper/gloss-site): plain HTML, CSS and a little
JavaScript, bundled with Vite and deployed to GitHub Pages on every push to `main`.

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # writes dist/, served below /glossX-site/
```

## Layout

| File | What it holds |
| --- | --- |
| `index.html` | The page, in English. Every translatable node has a `data-i18n` key. |
| `src/main.js` | Chinese copy for those keys, the language toggle, and the results table renderer. |
| `src/results.js` | Evaluation numbers for the Results section. Empty until the pilot runs. |
| `src/style.css` | Shared Gloss site styles, copied from gloss-site. |
| `src/glossx.css` | Styles for the GlossX-only sections (hero session card, architecture, results, devices). |
| `public/assets/` | Logo and screenshots from the glossX repository. |

## Filling in the results

Run the pilot in `glossX/eval` and print the table with `python -m glossx_eval.report …`.
Then, in `src/results.js`, set `run` (date, model, number of runs) and put each number into
`values` as `[mean, low, high]`. The badge switches from "Pending" to "Updated" on its own.
Add or remove rows there as benchmarks are added.
