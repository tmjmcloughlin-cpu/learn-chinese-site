# language-hover-site

A Next.js + Tailwind starter that replicates the MandarinBean-style hover reader: every Chinese token is
wrapped in a semantic button so you can reveal pinyin + English glosses on hover (desktop) or tap/focus
(mobile + keyboard). All logic is driven by a simple JSON-like data structure, so you can swap in any
language pair or auto-generate the spans from a glossary file (CC-CEDICT, JMdict, etc.).


## Local development

```bash
npm install      # already run during scaffolding, but safe to repeat
npm run dev      # http://localhost:3000
npm run lint     # eslint sanity check
```

## Project anatomy

```
src/
├─ app/
│  ├─ page.tsx          // sample lesson + tooltip interactions
│  └─ globals.css       // Tailwind + gradient background + body font
└─ data/ (create me)    // good spot for CC-CEDICT derived JSON later
```

Key implementation details:
- **Accessibility:** tokens are `button` elements with `tabIndex`, so keyboard users can focus and hear the
  tooltip content through their screen reader.
- **State-light:** hover/focus interactions are CSS-driven; React state only tracks which token is “pinned”
  after a tap so mobile users can keep the card open.
- **Styling:** the tooltip uses Tailwind utilities, no third-party dependency. Drop in Tippy.js/Popper later
  if you want smarter viewport-aware positioning.

## Next steps

1. Import a free glossary (CC-CEDICT) into `/data/glossary.json` or a SQLite DB.
2. Write a build-time script that tokenizes lesson Markdown, looks up matches, and emits the span-wrapped
   JSX/HTML.
3. Add audio playback via `<audio>` tags or Web Speech API.
4. Deploy to Vercel/Netlify (both free for this scale) — repo is already git-initialized, so pushing is
   enough to trigger CI.

Questions or tweaks? Drop TODOs in `README.md` or open an issue once you wire it to GitHub.
