# Lumo clickable prototype

A single-page, stateful prototype built from the "Lumo iOS Key Screens" design canvas (46 artboards, Lumo "Bright Pages" design system). It follows the journeys of the client POC (`lumo-three-separate_5.html`, documented in `docs/Client-POC-Flow.md`).

## Files

- `index.html`: every screen, styles and logic in one file
- `lessons.js`: the Learn lesson content (a slide and questions at 4 levels per topic), copied from the client POC
- `assets/`: app icons (YouTube, Instagram, Roblox)

## Hosting

It's fully static, with no build step and no backend. Upload this folder as is to GitHub Pages, Netlify, Vercel, S3 or any web server, or open `index.html` locally. The only network request is the Bricolage Grotesque font from Google Fonts. Without it, the page falls back to system fonts.

Each screen has its own URL hash (for example `index.html#Quests`), so you can link straight to a screen. The browser back button works too.

## Demo notes

- Parent PIN: `1234`. You can change it in Control › Settings.
- **Restart demo** (top left on desktop, bottom right on phones) resets everything.
- **Skip to the demo** on Welcome jumps to Learn with sample progress.
- A quest step is one slide and two questions. Get at least 1 right to pass. Finishing every step on a path unlocks that app.
- Every Learn subject opens its sections and lessons from the client POC. History, Science, Art and music, Coding and Paleontology lessons play the POC's slide and questions (multiple choice, true or false, fill the gap, put in order) at the learning level set in Control. Space, Maths and Etiquette have no lessons in the POC yet. As in the POC, the two lessons in each Science, Art and music, and Coding section share one slide and question set.
- Practice lessons in Learn add stars but never unlock apps.
- Tap a locked app's flag on Quests to see the Screen Time shield.
- Control is one scrolling page with every Control feature from the client POC: a chart of screen time earned, blocked and unblocked apps (unblock asks to confirm first), Block a new app (a searchable list of 20 apps), a custom unlock time per app, the hours slider, an expandable learning level, reports, milestones, the Sunday email and security. Apps without a real icon in `assets/` show a lettered tile, and only YouTube, Instagram and Roblox get quest paths.
- State lives in memory only. Reloading the page starts over.
