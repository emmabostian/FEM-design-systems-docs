---
path: "/using-extensible-themes"
title: "Using extensible themes"
section: "Developing styled components"
order: 46
description: Now that we've created our theme, let's use it in our component library.
---

Finally let's update our `Buttons.js` file to use our theme prop.

First let's remove the `defaultTheme` import.

Now we can replace the `${defaultTheme.<<prop>>}` with the following syntax: `${props => props.theme.<<prop>>}`.

Our components will take a theme prop from the `ThemeProvider` and render the proper value.

```jsx
import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${props => props.theme.status.warningColorHover};
      outline: 3px solid ${props => props.theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${props => props.theme.status.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${props => props.theme.status.errorColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.status.errorColorHover};
  }

  &:active {
    background-color: ${props => props.theme.status.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${props => props.theme.status.successColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.status.successColorHover};
  }

  &:active {
    background-color: ${props => props.theme.status.successColorActive};
  }
  `
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  background: none;

  &:disabled {
    background: none;
    border: 2px solid ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};
  background: none;

  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
```

Now we can dynamically style our components for the theme.

Lastly let's change `PrimaryButton` to also be a named export. This way we can import it as the default component or explicitly with a named import `{ PrimaryButtton }`.

If you toggle the state you should see our theme working! You may also find some bugs during the theme toggle but you can fix those later.

![Dark theme](images/dark-theme.png)
