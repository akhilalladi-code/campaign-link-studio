# Campaign Link Studio

A local-first UTM builder, campaign naming checker and bulk tracking-link generator.

Build one tagged link, process CSV batches, check naming consistency and save reusable links in this browser. No account, backend, API key or analytics integration is required.

## Features
- Single-link UTM builder: source, medium, campaign, ID, term and content.
- HTTP(S)-only destination validation. Preserves unrelated query parameters and fragments and replaces existing UTM values rather than duplicating them.
- Campaign naming lint with lowercase/snake_case suggestions.
- Quick presets for Google Ads, Meta Ads, Instagram, LinkedIn, email and YouTube.
- Bulk CSV import/paste, per-row validation and CSV export.
- Local link library with JSON import/export.
- UTM field guide and privacy cautions.

## Run locally
Requires Node.js 18+.

```bash
git clone https://github.com/akhilalladi-code/campaign-link-studio.git
cd campaign-link-studio
npm run dev
```
Open http://localhost:4182.

## Bulk CSV format
Required columns: `url,source,medium,campaign`. Optional: `term,content,campaign_id`.

```csv
url,source,medium,campaign,content
https://example.com/solar,instagram,paid_social,diwali_solar_offer,story_frame_1
https://example.com/solar,google,cpc,diwali_solar_offer,search_ad
```

## Quality checks
```bash
npm run validate
```
Uses Node's built-in test runner; no test dependencies are needed.

## Privacy
URL construction and CSV processing run locally in the browser. Saved links live in this browser's localStorage. No campaign data is uploaded. Do not place personal or confidential information in URL parameters; query strings may appear in browser history, logs and referrer data. Google Fonts is requested for typography; system fallbacks are included.

## Scope
The app prepares URLs only. It does not shorten links, generate QR codes, verify destination availability, connect to analytics platforms or guarantee attribution. See [FEATURES.md](docs/FEATURES.md).

## License
MIT. See [LICENSE](LICENSE).
