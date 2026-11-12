# THE STYLE DECK — p5.js fashion card game

A four-step interactive fashion prompt game built with HTML, CSS, vanilla JavaScript and p5.js.

## Files
- `index.html` — all five screens (welcome, rules, categories, setup, drawn cards)
- `style.css` — responsive editorial / fashion-magazine visual design
- `sketch.js` — p5.js ambient orbit animation
- `app.js` — card decks, random draw logic, 2–5 category selection and round controls

## Run locally
Open `index.html` in a browser. Internet is required for the p5.js CDN and Google Fonts.

## Publish with GitHub Pages
1. Create a new public GitHub repository (for example `the-style-deck`).
2. Upload `index.html`, `style.css`, `sketch.js`, and `app.js` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/the-style-deck/`.

## Customize
Edit the `decks` object in `app.js` to add, remove or rename prompt cards. The five game sections are Seasons, Clothing, Shoes + Accessories, Colour and Aesthetic.
