# The Tripps Travellers — full Next.js application

Natalie and Jordan’s roora travel companion. This standalone App Router project preserves the latest roora edition: the real couple’s portraits, animated aircraft window, reversible flight film, turning date wallet, payment planner, olive attire boards, clothing-message drafts, preparation checklist and calendar downloads.

## Start locally

Use **Node.js 22 or newer**.

```sh
npm ci
npm run dev
```

Open the local address printed by Next.js. No environment variables or external services are required.

## Production and checks

```sh
npm test
npm run build
npm run test:production
npm start
```

`npm run build` validates local assets, approved-media hashes, source references and module syntax before compiling Next.js. The production HTTP suite starts and stops the actual built application. The committed lockfile pins Next.js 16.4.6 and React/React DOM 19.3.1. Dependencies, build output and secrets are excluded from the ZIP intentionally; `npm ci` restores dependencies.

## Project structure

| Path | Responsibility |
| --- | --- |
| `app/layout.jsx` | Metadata, local font preload and shared styles |
| `app/page.jsx` | Server-rendered guest journey |
| `app/components/` | Native JSX chapters, header, footer and dialogs |
| `app/Experience.jsx` | React client lifecycle boundary |
| `lib/experience.mjs` | Scoped form, gallery, wallet, checklist and download interactions |
| `lib/links.mjs` | Family-approved invitation and attire-form destinations |
| `lib/motion.mjs` | Coordinated scroll/route/photographic motion and interruption handling |
| `lib/logic.mjs` | Integer-cent planning, dates and ICS content |
| `public/assets/` | All used photographs, original attire boards, outfit crops, fonts, artwork and geographic map |
| `tests/` | Logic/motion tests and real production-server checks |
| `docs/` | Research, asset provenance and conversion validation notes |

The application is rendered as native React/Next.js components. It does not embed the hosted site or an HTML iframe. React owns initialization and cleanup; effect cleanup aborts listeners, disconnects observers, cancels frames/timers and revokes download URLs. Server-rendered forms remain inert until their client handlers are registered.

## Content and personal planning

Roora: **Wednesday, December 1, 2027**, Zimbabwe. Planned travel: **November 26–December 6, 2027**. Ceremony time and exact private address remain pending. The original photographs illustrate the relationship; they are not presented as photographs of the future ceremony. Both original attire boards retain their supplied colors.

Only checklist ticks and motion preference persist in the visitor’s browser. Names, payment-start drafts and planning amounts are not uploaded by this guide. This project has no payment processor, official balance ledger, RSVP database or organizer inbox. Payment messages must be sent privately by the guest. Clothing selections and measurements are completed on the family’s existing external Roora Collection form at https://outfitsroora.netlify.app/. The invitation links to https://thetrippsroora.netlify.app/. These destinations are shared between the page and downloaded notes in `lib/links.mjs`. The recipient’s national ID is excluded.

## Hosting

Import this folder as a separate Next.js project in Vercel, or deploy on another supported Node host. Standard commands are `npm ci`, `npm run build`, and `npm start`. No `.openai` Site identity or publishing credentials are included.

The hosted preview’s ChatGPT sign-in gate belongs to its hosting platform. **This downloadable Next.js application does not include that platform gate or user authentication.** Choose the deployment audience and enable hosting protection as appropriate before sharing. General copy, photographs and assets are publicly addressable on an unprotected deployment. Do not add recipient ID, private addresses, secrets or guest records to `public/` or client code.

## Motion and review

Click **Watch the journey**, scroll in either direction, or use the Departure/Dubai/Their roora controls. Playback can be paused or interrupted. The OS reduced-motion preference and guest control are respected. Short views and enlarged text receive complete linear layouts. The original website and the completed Letter Home project are independent of this download.

See `docs/VALIDATION.md` for the checks performed for this conversion and its limits, and `docs/RESEARCH-MOTION.md` for the design and motion rationale.
# thetrippstravellers
