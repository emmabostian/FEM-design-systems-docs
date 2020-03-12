---
path: "/making-extensible-themes"
title: "Making extensible themes"
section: "Developing styled components"
order: 45
description: In this video we'll create a dark theme which will be used in our component library.
---

Currently we're referencing the `defaultTheme` directly inside of our components, but what if we want a dynamic theme which can be changed?

Let's create a second theme object inside `themes.js`. This will hold our dark theme.

```jsx
export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
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
};
```

We now need a way to toggle the dark theme. We'll use React's `useState` to do this.

Inside of `index.js` let's import `useState` and create a boolean variable `useDarkTheme` which will tell us which theme we should use.

```jsx
import React, { useState } from "react";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
...

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  ...

  return (
```

We also need to use the `ThemeProvider` component which will wrap our entire application and pass the theme as a property.

Inside `index.js` import `ThemeProvider`, then wrap the entire JSX return statement in `<ThemeProvider>`

```jsx
import { ThemeProvider } from "styled-components";
```

```jsx
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
	  <ThemeProvider>
	  ...
	  </ThemeProvider>
```

We'll need to pass the theme we want to use as a prop to `ThemeProvider` so let's do that with a ternary operator.

```jsx
<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
```

Let's add two buttons to toggle the dark theme state.

You can also use one if you prefer simply toggling the state instead of being explicit with two buttons.

```jsx
return (
	  <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      ...
	  </ThemeProvider>
```

Don't forget to import these two themes from `utils`.

```jsx
import { darkTheme, defaultTheme } from "./utils";
```

Let's wrap our primary, secondary, and tertiary buttons in a containing div so we can change the background color depending upon the theme. (If it's dark theme, we need a dark background.)

We'll also add some inline styling to this div.

```jsx
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};
```
