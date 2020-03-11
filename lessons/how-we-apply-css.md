---
path: "/how-we-apply-css"
title: "How we apply CSS"
section: "Developing styled components"
order: 33
---

If you've never worked with CSS-in-JS before, the paradigm shift can be a bit overwhelming.

Admittedly it took me quite a while to come to terms with the new syntax, but once I opened up my mind to the new structure I quickly realized the benefits that CSS-in-JS has for component libraries.

When we think about how we style our apps, CSS is probably the first thing that comes to mind. CSS, or Cascading Style Sheets, is the language we use to apply styles to HTML DOM elements.

In the past we would apply CSS in three ways:

- External CSS stylesheet with a `link` in the `head` HTML element
- Within the HTML file in a `<style>` tag
- Inline on the HTML elements `<h1 style="margin-right: 4px">`

And while this worked for a while, some problems began to arise.

CSS is not a scoped language, meaning its styles can bleed out from one component file and unintentionally affect the styling of unrelated components. This is due to CSS specificity rules which are a point system that governs how CSS styles are applied.
