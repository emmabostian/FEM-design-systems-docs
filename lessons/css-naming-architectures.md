---
path: "/css-naming-architectures"
title: "CSS naming architectures"
section: "Developing styled components"
order: 31
---

CSS naming architectures, like SMAACS and BEM (block-element-modifier) were created to superficially scope CSS styling. However, they were... superficial. This means that they are simply a naming convention for developers to create more scoped styling, and wouldn't actually prevent leaked styling.

With BEM our shopping cart CSS styles might look more like this. The block is the shopping cart, the element is the shopping cart item, and the modifier might be something like an out of stock indicator.

```css
.shopping-cart__shopping-cart-item {
  color: blue;
}

.shopping-cart__shopping-cart-item--out-of-stock {
  color: red;
}
```

And while this might have helped bleeding CSS styling, you can see that the names quickly became long and unruly. As a result, CSS naming architectures didn't truly solve the issue of bleeding styles.
