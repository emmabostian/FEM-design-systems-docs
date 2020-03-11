---
path: "/adding-utilities"
title: "Adding utilities"
section: "Developing styled components"
order: 43
---

So this looks great! But it isn't extensible. Now let's build a set of utilities to help us build our components.

Let's create a `utils/` folder inside of `src/` which will hold all of our foundational design system elements.

Inside of the `utils/` folder create three new files: `colors.js`, `themes.js`, and `typography.js`.

### Design Tokens

Design tokens were created prior to 2014 by Jina Anne (you can watch the conference talk [here](https://www.youtube.com/watch?v=wDBEc3dJJV8)) and they allow you to 'capture low-level values and then use them to create styles for your product or app.'

Inside `colors.js` add your color palette. Even though we called the primary color swatches `primary-100`, `primary-200`, we're going to name the colors by color name (we'll get to the `primary` color themes in the next section).

The color tokens will be an object containing the values in increments of 100 which will allow us to access them using the syntax `blue[100]`.

```jsx
export const blue = {
  100: "#3a36e0",
  200: "#0804b8",
  300: "#030086",
  400: "#5f25a4",
  500: "#050449"
};

export const green = {
  100: "#529e66",
  200: "#367b48",
  300: "#276738"
};

export const yellow = {
  100: "#e1c542",
  200: "#cab23f",
  300: "#b49e35"
};

export const red = {
  100: "#d0454c",
  200: "#b54248",
  300: "#95353a"
};

export const neutral = {
  100: "#ffffff",
  200: "#f4f5f7",
  300: "#e1e1e1",
  400: "#737581",
  500: "#4a4b53",
  600: "#000000"
};
```

Next let's add our typography.

Inside `typography.js` create and export a variable with your font family of choice.

```jsx
export const primaryFont = '"Roboto Mono", monospace';
```

Let's also add our typescale. There are many ways to structure these utilities but for this project we'll use an object.

```jsx
export const typeScale = {
  header1: "1.8rem",
  header2: "1.6rem",
  header3: "1.4rem",
  header4: "1.2rem",
  header5: "1.1rem",
  paragraph: "1rem",
  helperText: "0.8rem",
  copyrightText: "0.7rem"
};
```

Now that we have the individual tokens, let's create a theme. Themes are great if you need to support a high contrast mode or dark and light theme.
