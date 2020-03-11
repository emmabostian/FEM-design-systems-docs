---
path: "/accessibility"
title: "Accessibility"
section: "Documenting components with Storybook"
order: 68
---

We can use the `storybook-addon-a11y` add-on to test the accessibility of our components.

First let's install the add-on, and then add it to the addons array in `main.js`.

```
npm i -D @storybook/addon-a11y
```

```js
module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    ...
    "@storybook/addon-a11y/register",
    ...
  ]
};
```

Just like the knobs add-on, we have to add `withA11y` as a decorator. Back in `preview.js` let's import `withA11y` and use `addDecorator` to add it.

```js
...
import { withA11y } from "@storybook/addon-a11y";

...
addDecorator(withA11y);
```

If you head back to the Storybook UI and click the canvas tab, you should see "Accessibility" as a bottom tab panel. This will now show you your passing and failing accessibility tests.
