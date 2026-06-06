# DigitalNest

This my attempt at a Linktree personal page built in React.

**Live site:** [sebastianramos3.github.io/DigitalNestWebsite](https://sebastianramos3.github.io/DigitalNestWebsite/)

---

## Running it locally

```bash
# 1. Fork and clone the repo, then install dependencies with
npm install

# 2. command to start the dev server
npm run dev

# 3. command to build for production
npm run build

# 4. command to deploy to GitHub Pages
npm run deploy
```

---

## Feature — Click-to-Copy

Each link has a copy button that writes the URL to your clipboard and gives visual feedback the icon swaps from `⎘` to `✓` for 2 seconds, then resets. I also added a download button for resume instead of copy button.

I chose this feature because it felt like the most natural fit for my page. The other options I considered was a dark mode, but I felt with the already animated background it'd be overboard.

### The Tricky part

I feel that the buttons that uses the `&&` short-circuit operator could be confusing:

```jsx
{showCopy && <button onClick={handleCopy}>...</button>}
```

In JavaScript, `&&` is a glorified if/else statement. It returns the right side only if the left side is truth so if `showCopy` is false, React gets nothing and renders nothing. I chose it because reads more naturally than a full `if/else` block.

---

## Next Parts

- **Custom domain** — something like `sebastianramos.dev` for a better looking url
- **Portfolio page** — once I have an actual page I would like to link it here. Or ill just add my projects to this site directly 
- **Hover state fix** — currently the link hover animation stays active even when you leave the tab, id like to fix this.
