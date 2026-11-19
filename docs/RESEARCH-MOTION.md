# The journey to their roora

The Tripps Travellers is the travel companion to Natalie and Jordan’s celebration. The invitation remains a separate finished project. This experience explains why guests are travelling, then helps them plan the trip and prepare for the roora.

## Evidence applied

| Reference | Decision in this release |
| --- | --- |
| Natalie/Jordan’s approved invitation source and original photographs in the current workspace | Their names, real portraits, December 1, 2027, grandparents’ homestead status, family/elders explanation and attire colors lead the travel experience. Photos illustrate the relationship; they are not described as future ceremony photographs. |
| [eHRAF / Meekers, *The noble custom of roora*](https://ehrafworldcultures.yale.edu/cultures/fs05/documents/045) | The indexed research describes a culturally specific marriage practice with change over time. Its accessible abstract is context, not evidence for this family’s ritual sequence. We retain the family’s own explanation and invent no fees, proceedings, symbolism or guest obligations. Full restricted text was not accessed. |
| [Apple motion guidance](https://developer.apple.com/design/human-interface-guidelines/motion.md) | Movement follows the guest’s input, remains optional and can be interrupted. Play is explicit; wheel, touch, keyboard and pointer input can stop it immediately. No forced opening wait or continuous ornamental loop. |
| [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/) | Reversible progress, intentional sticky framing, responsive geometry refresh and complete static alternatives inform a small custom rig. No smooth-scroll engine or extra animation dependency is introduced. |
| [Natural Earth terms](https://www.naturalearthdata.com/about/terms-of-use/) and maintainer geometry | Public-domain coastlines and Zimbabwe’s real outline replace a generic location metaphor. Dubai is the planned connection; Zimbabwe is a country highlight. No departure city, destination airport or precise confirmed flight path is invented. |
| [Emirates Dubai Connect](https://www.emirates.com/english/before-you-fly/dubai-international-airport/dubai-connect/) | Hotel/transfer/refreshment arrangements remain planned and conditional on the ticket and eligibility. They are not sold as a guaranteed inclusion. |
| [Zimbabwe Department of Immigration](https://www.zimimmigration.gov.zw/?page_id=6900) | Link to the official visa source. No universal entry rule is asserted without guests’ nationalities and confirmed itinerary. |

## Choreography

| Moment | Input / timing | Connected movement |
| --- | --- | --- |
| First view | 1.1–1.3s, no input blocked | Typography opens, brand aircraft takes off, and a window containing the actual couple settles into perspective. Roora/date copy is immediately present in HTML. |
| Flight film | Native, reversible scroll | One parent progress channel drives sky scale, the geographic map, aircraft translation/rotation, route stroke, camera offset, photographic emergence and three narrative beats. |
| Watch journey | Explicit button, 7.6s total | 0.8s approach, 6s flight composition, 0.8s arrival into the celebration. Guests can pause or interrupt; native scrolling remains available. |
| Roora arrival | Last film beat into the next section | The plane reaches Zimbabwe as the real couple photograph settles. Their celebration, elders’ role and venue/timing status are the next chapter. |
| Date wallet | 680ms, reversible | One travel wallet turns from the outbound/roora/return overview to the ceremony details. Controls sit outside the turning surface; inactive surfaces are inert and hidden from assistive technology. |
| Luggage / ceremony packing | Native scroll | Both cases roll into place; a tag settles; the original olive outfit references move into their editorial arrangement. Input controls stay stable. |
| Contributions | 400ms + 35ms offsets | A short segment sequence reflects the chosen split. Arithmetic and accessible result text update immediately. No animation implies payment persistence. |

The analytic spring uses angular frequency 18rad/s and damping ratio .88 for the route, and 20rad/s/.94 for scene settling. Tests compare 30, 60 and 120Hz integration. The camera does not bounce or overshoot its narrative endpoints.

## Motion and accessibility

The shared rig batches geometry measurements and sleeps when settled or hidden. A body ResizeObserver invalidates cached geometry without reading it during the observer callback. There is no perpetual idle animation. Browser history restoration resumes measurement safely.

OS reduced motion and the guest control disable nonessential movement. Under 560px viewport height or at enlarged root text (24px+), the film becomes a complete linear composition; this is a height/legibility adaptation, not a mobile-width shutdown. The mobile film has dedicated map, photo and caption placement. The three original narrative beats are all exposed in linear mode; only the active beat is exposed in the pinned scene. All key event facts also appear outside the film.

Calendar downloads now contain three all-day entries: outbound November 26, roora December 1, return departure December 6. No ceremony time or arrival date is invented.

## Review limitations

Seventeen logic/motion tests and static validation are executable here. The private hosting service provides a native rendered screenshot that can verify the first composition. Its screenshot is not an interaction recording or mobile performance trace.

The managed local preview relay is unavailable. The connected review browser reaches ChatGPT sign-in and is not authenticated. No credentials are entered or access protections changed to bypass that boundary. Full live interaction, mobile visual, screen-reader, GPU and field performance validation therefore remain pending until the review session is signed in. The supplied test results are not a substitute for those checks.
