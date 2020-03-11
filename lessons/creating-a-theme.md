---
path: "/creating-a-theme"
title: "Creating a theme"
section: "Developing styled components"
order: 44
---

Inside `themes.js` create a default theme and let's add the following values.

```jsx
import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont
};
```

Lastly let's add an `index.js` file inside of `utils/` which exports each utility.

```jsx
export * from "./colors";
export * from "./typography";
export * from "./themes";
```

This will allow us to import utilities from the `utils` folder instead of the individual folder.

For example we can simply write the following to import our default theme.

```jsx
import { defaultTheme } from "../utils";
```

If we didn't have the index file we would have to name the specific file we wanted to import the utility from, so this is much cleaner.

```jsx
// We don't need this now!
import { defaultTheme } from "../utils/themes";
```

Finally let's use our theme inside of our `Buttons.js` file and remove the hard coded values.

We can also remove the `primaryBlue` constant.

```jsx
import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
```

And we should see all of our components rendering perfectly.
