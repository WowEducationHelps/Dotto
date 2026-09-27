# Cost. — PWA preview

Three-screen static preview: intro video → welcome → role picker.

## Files
- `index.html`, `app.css`, `app.js` — the app (all three screens live in index.html)
- `media/` — intro videos (portrait and landscape are picked by device orientation)
- `manifest.webmanifest`, `sw.js`, `icons/` — what makes it installable and work offline

## Put it on GitHub Pages
1. Create a new repo on GitHub (public), e.g. `cost-preview`.
2. In Claude Code, run `git init`, `git add .`, `git commit -m "Cost. PWA preview"`, then push to the new repo.
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Wait a minute, then open `https://<your-username>.github.io/cost-preview/`.
5. On your phone, open that link in Chrome → **⋮ → Add to Home screen** to install it.

All paths are relative, so it works from a sub-folder URL like `/cost-preview/`.

## Updating
After changing any file, bump `CACHE = 'cost-v1'` in `sw.js` (e.g. `cost-v2`) so installed copies refresh.
