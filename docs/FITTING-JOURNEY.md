# A look worth travelling for

The fitting is part of preparing for Natalie and Jordan's roora. Its travel
wardrobe uses the four original outfit crops and both unchanged reference
boards, with an olive fabric case and a fitting tag connecting the fashion
chapter to the rest of the travel experience.

The chapter replaces the old stacked gallery and separate illustrated
measurements block. It has direct entry from desktop/mobile navigation, the
hero and the checklist. A direct external form link works before JavaScript
initializes; guests never have to finish a sequence to reach it.

## Interaction and motion

- **The look:** original outfit references fan out of the wardrobe. Both full
  reference boards can be enlarged using the existing accessible dialog.
- **The fit:** the central garment settles and a measuring tape draws around
  the composition, alongside practical measuring guidance.
- **The tailor:** the garments gather into the travel case and a fitting tag
  comes forward. This describes the next step; it is not a submission receipt.
- **Start my fitting:** opens https://outfitsroora.netlify.app/ in a separate
  tab. The travel site does not collect measurements, proxy submissions, select
  an outfit in the external form or mark the guest's checklist complete.

The existing scroll rig measures the wardrobe once per geometry refresh and
uses its existing animation clock. The camera rises 70px, settles from 15deg
of perspective and scales from .92 to 1 as the scene enters. The pocket shares
that movement with its own 65px offset. Both are reversible with native scroll.
This replaces two previous geometry measurements with one.

Guest-driven view changes use 620ms transforms, 320ms opacity, a 720ms tape
reveal and a 640ms tag movement with `cubic-bezier(.2,.75,.2,1)`. Changes can be
reversed immediately; no animation completion waits, idle loops or automatic
view changes are introduced. No new libraries or imagery are downloaded.

OS reduced motion and the existing guest preference retain a static spread of
the original looks, remove the decorative tape/tag choreography and change
the explanatory panels instantly. The real form link stays available.

## Accessibility and content

Three labelled tabs use roving focus, Left/Right Arrow, Home and End. Inactive
panels are hidden. The decorative wardrobe is excluded from the accessibility
tree; meaningful references remain available through the full-board buttons.
The fitting has its own heading and navigation state. The primary form link
and controls have visible focus styles and suitable touch targets.

Photography is displayed without recolouring or crop changes. Asset dimensions
match the actual files. The olive guest palette, ivory/champagne exceptions,
chocolate for the couple and modest options are preserved.

Sources for the existing form and interaction design:

- https://outfitsroora.netlify.app/
- https://thetrippsroora.netlify.app/
- https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- https://developer.apple.com/design/human-interface-guidelines/motion

## Verification

The local build, production HTTP checks and deployed browser checks are recorded
in the fitting pull request. Automated checks do not establish physical-device
performance, full WCAG conformance or successful submission to the family's
external form. No personal information is entered during verification.
