---
path: "/css-in-js"
title: "CSS in JS"
section: "Developing styled components"
order: 38
---

CSS-in-JS is a styling technique where JavaScript is used to style our components. When the components are parsed, CSS is generated and attached to the DOM.

CSS-in-JS prevents style leaking that we saw with plain CSS and CSS naming conventions, and is an alternative to CSS pre-processors. It also allows you to encapsulate styling within a component, which is great for component libraries.

There are several popular CSS-in-JS libraries:

- [Emotion](https://emotion.sh/docs/introduction)
- [Styled Components](https://emotion.sh/docs/introduction)
- [JSS](https://cssinjs.org/?v=v10.0.4)

## Styled Components

There are several different CSS-in-JS libraries, but the one we'll be using today is [styled components](https://styled-components.com/).

Styled components provides many benefits, like scoped styling (no more worrying about bleeding CSS specificity or rogue `!importants`).
