---
path: "/using-addons"
title: "Using addons"
section: "Documenting components components"
order: 64
---

Add-ons are neat packages you can install and use with Storybook to gain additional functionality.

Let's add a documentation add-on which will allow us to create beautiful design system documentation.

Run the following command to install a few add-ons.

```
npm i -D @storybook/preset-create-react-app actions @storybook/addon-docs
```

We then need to tell Storybook that we'll be using this add-on and we can do that in `main.js`.

We'll be creating our documentation and stories using MDX. MDX is a format which lets you write JSX in your markdown files, and we can use it to create stories and documentation.

We can use MDX to document our components and create a style guide for our design system. To do that, we'll need a few additional things, known as add-ons.

Add the following to the `addons` array in `main.js`.

```js
module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-docs"]
};
```

Now we can document and create stories for our button components.

```md
import { Meta, Story, Preview } from "@storybook/addon-docs/blocks";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Buttons";

<Meta title="Design System|Buttons" component={PrimaryButton} />

# Buttons

Buttons are used to trigger actions within an application.

## Usage

Buttons are used to trigger internal actions within your web applications.

## Primary Buttons

Primary buttons are used as a call to action and indicate the most important action on a page.

<Preview withToolbar>
  <Story name="primary">
    <PrimaryButton>Hello world</PrimaryButton>
  </Story>
</Preview>

## Secondary Buttons

Primary buttons are used as a call to action and indicate the most important action on a page.

<Story name="secondary">
  <SecondaryButton>Hello world</SecondaryButton>
</Story>

## Tertiary Buttons

Primary buttons are used as a call to action and indicate the most important action on a page.

<Story name="tertiary">
  <TertiaryButton>Hello world</TertiaryButton>
</Story>
```
