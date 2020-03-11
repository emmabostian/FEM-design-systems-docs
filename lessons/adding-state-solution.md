---
path: "/adding-state-solution"
title: "Adding state solution"
section: "Developing syled components"
order: 47
---

First add the disabled states to the theme.

```js
export const defaultTheme = {
  ...
  disabled: neutral[400],
  textOnDisabled: neutral[300]
};
```

Next add the states to the buttons.

```jsx
import styled from "styled-components";
import { defaultTheme, paragraph } from "../utils";

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
    background: none;
  }
`;

export default PrimaryButton;
```

We can test out disabled by adding the `disabled` attribute to one of our buttons.

```jsx
<PrimaryButton disabled>Hello world</PrimaryButton>
<SecondaryButton disabled>Goodbye world</SecondaryButton>
<TertiaryButton disabled>Hey world</TertiaryButton>
```

You should see your disabled button rendering in the UI.

![Disabled buttons](images/disabled-buttons.png)
