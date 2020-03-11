---
path: "/actions"
title: "Actions"
section: "Documenting components components"
order: 66
---

We can use the `addon-actions` add-on to trigger actions on our form components, like our buttons.

First install the add-on then add it to the `addons` array in `main.js.`

```
npm i -D @storybook/addon-actions
```

```js
module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    ...
    "@storybook/addon-actions",
};
```

We can now import `action` and trigger it on our buttons. Inside `Button.stories.js` import `action` and add it as a `onClick` handler on the `PrimaryButton` component.

```js
import { action } from '@storybook/addon-actions';

...

<Preview withToolbar>
  <Story name="primary">
    <PrimaryButton onClick={action('button-click')} disabled={boolean("Disabled", false)}>Hello world</PrimaryButton>
  </Story>
</Preview>
```

Now if we head back to the Storybook UI and click our primary button we should see an action being fired in the Actions tab panel.

![Actions](images/action.png)
