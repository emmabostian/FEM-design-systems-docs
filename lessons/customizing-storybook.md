---
path: "/customizing-storybook"
title: "Customizing Storybook"
section: "Documenting components components"
order: 69
---

You can customize the look and feel of your Storybook environment if you plan to publish it for your company to use.

First create a `manager.js` file inside of `.storybook/`. You can import `themes` from `@storybook/theming` if you want to use their `light` or `dark` themes.

```jsx
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.light
});
```

Or you can create your own theme by creating a new JavaScript file, adding the following customizable properties, and importing and using your template inside of `manager.js`.

Create a new file `myTheme.js` and add the following.

```jsx
import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "silver",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "hotpink",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150"
});
```

```js
import { addons } from "@storybook/addons";
import myTheme from "./myTheme";

addons.setConfig({
  theme: myTheme
});
```
