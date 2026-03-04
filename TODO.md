# TODO — Indoor Rzeszów 2026

## Before Launch

- [x] Replace Google Maps embed URL with actual Strzelnica Dycha coordinates (`index.html` line ~415)
- [x] Wire all registration CTA links (`href="#"`) to PractiScore registration URL (`index.html` lines ~75, 103, 175, 303)
- [x] Replace patron `HERB` placeholders with actual coat of arms images (`index.html` lines ~238, 242)
- [ ] Update `og:image` to absolute URL once deployment domain is known (`index.html` line ~12)

- [x] Replace PractiScore placeholder URLs with actual match URLs once created (`assets/js/translations.json` → `config.practiscore`)
- [x] Hide results CTA until results are published — add `x-show` guard or `config.results_published` flag (`index.html` results section)
- [x] Extract repeated PractiScore URL expression into an Alpine store helper (e.g. `$store.lang.registrationUrl`)
- [x] Add external-link indicator (icon/arrow) to CTA buttons that open in a new tab

## Ongoing

- [ ] Update `config.capacity.filled` in `assets/js/translations.json` as registration spots fill up
