# start.ng — recreation + The Sun Market

A working recreation of [start.ng](https://start.ng), Nigeria's home for browser games, plus a separate whimsical design direction called **The Sun Market**.

## Live

- **Faithful clone:** https://startng-three.vercel.app
- **The Sun Market:** https://startng-three.vercel.app/toybox
- **Sun Market design notes:** https://startng-three.vercel.app/toybox/design
- **Docs rendered from the original:** https://startng-three.vercel.app/docs
- **Plain-text docs for AI:** https://startng-three.vercel.app/docs.md

## What is included

- The full 189-game catalogue, 33 categories and 39 independent creators.
- Homepage, games browser, game detail, how-to-play, FAQ, tournament, leaderboard, creators, categories, about, docs, sign-in and profile pages.
- Real interactions: search, filtering, sorting, pagination, favourites, ratings, scores, tournament entry and sharing, hosted tournaments, creator submissions and profile/character editing.
- Playable in-browser arcade: runner, catcher and timing modes on the game play routes.
- A walkable 2D **Hangout** with WASD/arrow controls, NPCs, chat, waving and mobile controls.
- **The Sun Market** at `/toybox`: a floating day market above Lagos with a lantern game draw, six discovery districts, a tiny dare, wish lanterns, a four-light charm system, a hidden sun moth and a Breeze Line portal to the Hangout. A full design-notes page lives at `/toybox/design`.
- Demo state is stored in `localStorage`; there is no external backend.

## Stack

- Next.js 16.4.3 (App Router)
- React 19.3.0
- TypeScript
- Plain global CSS (no Tailwind)
- `marked` for rendering the full fetched start.ng documentation
- Self-hosted P052 display and Nimbus Sans body fonts

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

## Project structure

```text
app/
  (site)/          faithful start.ng pages and chrome
  (immersive)/     chrome-free play and hangout routes
  (toybox)/        The Sun Market design direction
components/        interactive UI, arcade, hangout, tournament, profile
lib/               game/category/creator data and helpers
public/            covers, creator art, category art, fonts, docs.md
app/globals.css    main site design system and page styles
app/toybox.css     Sun Market design system
```

## Notes

- The clone is a recreation for demonstration; all game names, artwork and copied documentation belong to their original creators and the start.ng / HNG community.
- The Sun Market is a design direction layered on the same catalogue. It does not replace the faithful clone.
- The route remains `/toybox` for continuity with the earlier Toybox direction.
- Accounts, favourites, scores, wishes and market charms are local to the browser in this demo.
