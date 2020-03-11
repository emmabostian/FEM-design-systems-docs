---
path: "/documenting-components-with-storybook"
title: "Documenting components with Storybook"
section: "Documenting components with Storybook"
order: 57
---

Storybook allows you to document components in isolation. While there are many uses and benefits above and beyond simply documenting your components, this is how we'll be using it today.

## Initializing Storybook

To add Storybook to our design system, let's run the following command.

```jsx
npx -p @storybook/cli sb init
```

This will create a `.storybook` directory in the root of your project.

It will also create a `stories/` directory inside of the `src/` folder. If we expand it, we'll see `0-Welcome.stories.js` and `1-Button.stories.js`.

Run `npm run storybook` to start your development server.

Let's delete the `src/stories` directory completely. Storybook creates the `stories/` folder initially because it isn't aware of your project architecture. But we're aware of it so let's refactor.
