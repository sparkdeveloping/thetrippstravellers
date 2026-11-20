# Next.js download validation

The November 20, 2026 link correction is documented in `LINK-CORRECTION.md`.
The results below describe the original conversion; that correction removes the
local measurements draft in favour of the family's existing fitting form.

This export converts the latest Tripps Travellers roora edition into a standalone Next.js App Router application. The hosted Site and the completed Letter Home project were not modified by this export.

## Verified for this package

| Check | Result |
| --- | --- |
| Fresh dependency resolution and `npm ci --ignore-scripts` | Passed with the committed lockfile |
| Logic and motion tests | 17/17 passed |
| Source/asset validation | Passed: 76 unique JSX IDs, valid anchors/ARIA references, module syntax and all eight approved-media hashes |
| Actual Next.js production build | Passed on Node 24.22.3, Next.js 16.4.6, React/React DOM 19.3.1 |
| Running production application | 33 HTTP, SSR, binary-asset and emitted-bundle checks passed |

Command output is retained in `unit-tests.txt`, `next-build.txt` and `production-http.txt` in this directory. The HTTP test fetches the actual built Next.js application and its emitted chunks. It verifies the roora content, three inert forms awaiting client setup, the React boundary, motion controls, and unchanged photo/attire bytes.

## Conversion details

- Eight native JSX chapters plus header, footer and dialogs replace the static HTML document.
- One React client effect mounts and disposes the interaction controller.
- Application listeners use an AbortController. Effect cleanup disconnects the section observer, disposes the cinematic rig, cancels timers/frames and revokes generated download URLs.
- Input defaults use React's uncontrolled-field props. Forms become available after their handlers are registered.
- The coordinated motion and planning logic remain local modules. Fonts, imagery and the map remain local assets.

## Limits

These checks do not establish browser hydration behavior, complete keyboard/screen-reader conformance, physical-phone rendering, or frame-rate/Core Web Vitals targets. Those need a browser/device review of this Next.js build. The prior hosted version's first-screen capture and its review-session limitations are described in the design record; they are not represented as new Next.js browser evidence.

The downloadable project has no hosting-platform authentication, payment processing, database, recipient ID, private venue address or real guest records. Choose hosting access before publication. No deployment was changed as part of the download request.
