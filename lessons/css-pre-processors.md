---
path: "/css-pre-processors"
title: "CSS pre-processors"
section: "Developing styled components"
order: 32
---

Next came CSS pre-processors like [Sass](https://sass-lang.com/) and [Less](http://lesscss.org/). These pre-processors provided styling capabilities such as nesting, mixins, and more which allow more control over how our CSS styles are applied.

Our shopping cart component might look more like this:

```scss
.shopping-cart {
  &__item {
    color: blue;

    &--selected {
      color: red;
    }
  }
}
```

Sass nesting plays really nicely with the BEM naming architecture and was a viable solution for many large-scale applications. But then a new solution arose which changed how we build components: CSS-in-JS
