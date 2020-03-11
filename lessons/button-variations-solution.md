---
path: "/button-variations-solution"
title: "Button variations solution"
section: "Developing styled components"
order: 44
---

First I added some new variables to my theme.

```jsx
import { blue, neutral, yellow, green, red } from "./colors";

...

status: {
  warningColor: yellow[100],
  warningColorHover: yellow[200],
  warningColorActive: yellow[300],
  errorColor: red[100],
  errorColorHover: red[200],
  errorColorActive: red[300],
  successColor: green[100],
  successColorHover: green[200],
  successColorActive: green[300]
}
```

Next let's add the modifiers for the warning, success, and error states.

```jsx
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, helperText, header5, paragraph } from "../utils";

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
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};

  &:hover {
    background-color: ${defaultTheme.status.errorColorHover};
  }

  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${defaultTheme.status.successColor};
  color: ${defaultTheme.textColorInverted};

  &:hover {
    background-color: ${defaultTheme.status.successColorHover};
  }

  &:active {
    background-color: ${defaultTheme.status.successColorActive};
  }
  `
};
```

Now inside `index.js` we can add another modifier to our buttons.

```jsx
<PrimaryButton modifiers={["small", "success"]}>Hello World</PrimaryButton>
<SecondaryButton modifiers="error">Goodbye World</SecondaryButton>
```

![Modifiers](images/modifiers.png)
