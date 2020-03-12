---
path: "/problems-with-css"
title: "Problems with CSS"
section: "Developing styled components"
order: 30
description: What are some of the common problems with CSS that make it difficult to use in design systems?
---

So... why is pure CSS problematic?

The ability to include styling in so many ways (inline, in the document head, and in external CSS files) causes our styling to be de-centralized and difficult to maintain. De-centralized CSS makes it difficult to remove old CSS when a component is removed and this can lead to dead code bloating your package size.

Additionally, a lack of knowledge about CSS specificity leads developers to add `!important` notations to many styles, which leads to unmaintainable styling. This also leads to bleeding styles.

For example, if I want to color all list items in my "Shopping cart" component blue, I might write the following CSS inside of `shopping-cart.css`:

```css
li {
  color: blue;
}
```

While this might seem to work at first glance, this style will be applied to ALL list items in the application, which I don't want. I can try to make this more specific with one of the following CSS declarations:

```css
ul.shopping-cart > li {
  color: blue;
}

li.shopping-cart-item {
  color: blue !important;
}

.shopping-cart > .shopping-cart-item {
  color: blue;
}

.shopping-cart-item {
  color: blue;
}
```

None of these is particularly great and can lead to difficult-to-read CSS styling and a multitude of HTML class names.

To combat this, CSS naming architectures were created.
