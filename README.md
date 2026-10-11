# OneScape Website

Static HTML/CSS/JavaScript website. This repository is designed for **GitHub Pages**, published from the `main` branch's root directory.

- Homepage: `index.html`
- Styles, JavaScript and local photos: `assets/`
- Pages: `capabilities.html`, `our-work.html`, `about.html`, `contact.html`, `privacy.html`
- Long-form content: `case-studies/` and `insights/`
- Custom domain marker: `CNAME` (`onescape.in`)

## Deployment

1. In GitHub, select `main` → **Add file** → **Upload files**.
2. Upload the **contents** of this folder to the repository root, not the folder itself. Replace the current `index.html` when GitHub asks to commit changes.
3. In **Settings → Pages**, confirm **Deploy from a branch** / `main` / `/ (root)` or an equivalent working Pages configuration. Verify the **Custom domain** is set to `onescape.in`.
4. Visit `https://onescape.in/` after the GitHub Pages deployment finishes. If the site does not change, verify DNS and which deployment system currently serves the domain.

## Contact form

`contact.html` uses the **Formspree endpoint already present in the repository's prior `index.html`**. Test delivery to the intended inbox after publishing. If the endpoint is not controlled by OneScape, change the URL in `contact.html` before going live. The fallback address displayed is `hello@onescape.in`.

## Publishing notes

- No named client accounts or logos appear publicly.
- Photography is illustrative and should not be represented as documentation of actual work.
- Project stories require factual sign-off; the illustrative commercial scenarios are clearly described as such.
- No unverified company-scale or cost-savings statistics are published.
