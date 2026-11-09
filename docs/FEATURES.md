# Feature status
## Implemented
- Single UTM builder for source, medium, campaign, ID, term, content and one custom parameter.
- HTTP(S)-only URL validation; existing non-UTM parameters and fragments are preserved.
- Existing UTM values are replaced to avoid duplicate keys.
- Campaign naming lint and snake_case suggestion.
- CSV parser with quoted commas and escaped quotes; bulk generation with row-level validation and CSV export.
- Browser-local link library with JSON import/export.
- Quick presets, responsive interface and Node built-in tests.

## Deliberate boundaries
No URL shortening, QR creation, analytics API, campaign publishing, destination reachability check or attribution guarantee. URLs are prepared, not sent to an advertising or analytics platform.

## Future ideas (not implemented)
Multi-custom-parameter UI, team taxonomy profiles, optional in-browser QR export and accessibility browser automation.
