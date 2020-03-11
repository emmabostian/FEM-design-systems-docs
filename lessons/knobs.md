---
path: "/knobs"
title: "Knobs"
section: "Documenting components with Storybook"
order: 61
---

Storybook has an add-on called knobs which allows you to interact with your components and change their proprerties in real-time.

First let's install knobs with the following command.

```
npm i -D @storybook/addon-knobs
```

Next we have to add the add-on to the Storybook configuration in `main.js.`

```js
module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    ...
    "@storybook/addon-knobs",
    ...
  ]
};
```

We also need to tell Storybook to use `withKnobs` as a decorator. Inside `preview.js`, import `withKnobs` and add it as a decorator.

```js
import { withKnobs } from "@storybook/addon-knobs";
...

addDecorator(withKnobs);
```

Let's add a knob for setting the disabled state of our buttons. Inside `Button.stories.mdx` import the following.

```js
import { withKnobs, boolean } from "@storybook/addon-knobs";
```

Then we can add the `disabled` attribute to our button using the `boolean` value we just imported.

```js
<Preview withToolbar>
  <Story name="primary">
    <PrimaryButton disabled={boolean("Disabled", false)}>
      Hello world
    </PrimaryButton>
  </Story>
</Preview>
```

After restarting your storybook server, head back to your UI, under the canvas tab, you should see a knob at the bottom with a checkbox discerning the disabled state. If you click it, it should disable the button.
