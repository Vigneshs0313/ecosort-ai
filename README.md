# EcoSort AI – Smart Waste Classification & Management System
Identify. Segregate. Recycle. Repeat. (IGEN GREEN DAY 2026, Section C)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```
Internet is needed the first time the scanner opens (MobileNet weights download once, then are cached).

## Deploy free (GitHub Pages)
The app uses HashRouter and `base: './'`, so `dist/` works on any static host. Push `dist/` to a `gh-pages` branch, or use Netlify / Cloudflare Pages with build command `npm run build` and output `dist`.

## AI honesty notes
- Model: MobileNetV2 (ImageNet, 1,000 general classes) via TensorFlow.js. It is NOT waste-trained.
- A waste-specific pretrained TF.js model was not verified, so none is bundled.
- ImageNet labels are mapped to waste categories by the table in `src/data/mapping.ts`. The UI shows the raw output, the matched keyword and a low-confidence warning, and users can correct results.
- Optional: load your own TF.js layers model (model.json + .bin + labels.json) from the scanner page.
- Corrections are stored separately from AI predictions and exported as CSV. The app does not retrain itself.

## Privacy
Images stay on the device. Only a 160px thumbnail and the result are saved in localStorage.
