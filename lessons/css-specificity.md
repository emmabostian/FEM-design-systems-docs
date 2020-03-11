---
path: "/css-specificity"
title: "CSS specificity"
section: "Developing styled components"
order: 34
---

There are three buckets of CSS specificity:

1. Type selectors and pseudo-elements
2. Class selectors, attribute selectors, and pseudo-classes
3. ID selectors

```css
/* Type selectors and pseudo-elements */
h1 {
  ...;
}

h1::before {
  ...;
}

/* Class selectors, attribute selectors, and pseudo-classes */
.cat {
  ...;
}

input[type="radio"] {
  ...;
}

h1:hover {
  ...;
}

/* ID selectors */
#cat {
  ...;
}
```

Universal selectors, such as \*, combinators, such as > and +, and negation of pseudo-classes, such as `:not()` have no effect on CSS specificity (however the styles inside of the `not()` pseudo-class do).

Inline styling, styles added directly to the HTML element, will always override any styles declared in an external stylesheet and this is generally bad practice.

Lastly, `!important` statements override all styling.
