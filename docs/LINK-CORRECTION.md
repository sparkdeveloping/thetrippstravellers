# Family invitation and fitting form — November 20, 2026

The traveller project was deployed from GitHub `main` commit
`77a6689ad7a7d491d8fdf87fc6f6a39c98658da2` when this correction began.

The family confirmed two destinations:

| Purpose | Destination |
| --- | --- |
| Natalie and Jordan's roora invitation | https://thetrippsroora.netlify.app/ |
| Existing Roora Collection attire and measurements form | https://outfitsroora.netlify.app/ |

The celebration link now opens the original Netlify invitation. The measurements
section links directly to the family's fitting form in a new tab. The duplicate
local measurements modal, conversion logic and unused styles were removed.
Checklist copy, guide information and downloaded trip notes use the same
destinations, defined in `lib/links.mjs`.

Both destination pages were opened in Chrome. The invitation identifies Natalie
and Jordan and December 1, 2027; the fitting form has clothing selections and
measurements for the same celebration. No guest data was entered or submitted.

Local verification:

- `npm ci --ignore-scripts`: passed with the existing lockfile.
- `npm test`: 14 logic and motion tests passed; the three tests for the removed
  local measurements helper were retired with that helper.
- `npm run build`: passed, including 64 unique JSX IDs, valid references and
  all eight unchanged approved-media hashes.
- `npm run test:production`: 34 checks passed against the actual running Next.js
  production application, including both corrected links and two remaining forms.

These checks do not establish physical-device performance or complete
accessibility conformance. Deployment verification is recorded separately in the
GitHub pull request.
