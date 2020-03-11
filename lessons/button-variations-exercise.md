---
path: "/button-variations-exercise"
title: "Button variations exercise"
section: "Developing styled components"
order: 43
---

Now that we have our default buttons, let's add our variations: large, small, icon, labelled icon, warning, success, and error.

First let's install a package which will help us create these modifiers.

```jsx
npm i styled-components-modifiers
```

Inside `Buttons.js` import the `applyStyleModifiers` module from `styled-components-modifiers`.

```jsx
import { applyStyleModifiers } from "styled-components-modifiers";
```

Next, let's define a variable which will hold all of our modifiers. Let's start with small and large.

```jsx
const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `
};
```

We now need to use `applyStyleModifiers` to each button to get them to render. Add the `applyStyleModifiers(BUTTON_MODIFIERS)` expression to the end of each primary, secondary, and tertiary button (or the styles will be overridden).

```jsx
const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: ${defaultTheme.textColorOnPrimary};
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  background: none;

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
  background: none;

  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
```

Finally inside `index.js` we can add the modifiers as an array on the button components, or as simple strings if there is only one.

```jsx
<PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
<SecondaryButton modifiers='large'>Goodbye World</SecondaryButton>
```

Your primary button should be rendering as a small button and your secondary button should be large.

![Style modifiers](images/style-modifiers.png)

Now it's your turn. Add modifiers for the statuses: warning, error, and success. You'll have to add new variables to your theme. You can use whichever red, yellow, and green color values you like for your hover and focus states.
