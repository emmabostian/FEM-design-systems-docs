---
path: "/button-activity-exercise"
title: "Button activity exercise"
section: "Developing styled components"
order: 36
---

Let's create a second button called `SecondaryButton`. We want this button to inherit most of the properties from the first button, like padding, font size, etc.

So let's first extract out the common button properties we _know_ we will need in all three base buttons (primary, secondary, tertiary). This will be based on your Figma design, so your code may look a bit different than mine.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;
```

To use our custom Google font, grab the link which you can find when adding a font within the Google fonts site, and add it within the `head` in the `index.html` file.

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
  rel="stylesheet"
/>
```

Now let's refactor our `PrimaryButton` component; since we moved the base button functionality out into `Button`, we don't need all of it inside of `PrimaryButton`.

We now want this component to inherit the properties from the `Button` component. So instead of setting `const PrimaryButton = styled.button` we can write `const PrimaryButton = styled(Button)`.

We can now remove the styles being applied from the `Button` component.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: red;
  border: none;
  color: white;
`;
```

Let's create a new `const` which contains the hex code for the background color of our primary button. You can add this underneath the `styled` import.

These colors will be _your_ primary colors from your Figma kit.

```jsx
const primaryBlue = "#030086";
```

Next, let's add the individual properties we want our `PrimaryButton` component to have.

We can use our `primaryBlue` variable inside of our styled component with the `${}` syntax.

```jsx
const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  color: white;
  border: 2px solid transparent;
`;
```

And now if we head back to our browser we should see the primary button with updated styling.

![Primary button blue](images/primary-button.png)

Great, now it's your turn. Go add the secondary button and tertiary button to your `Buttons.js` file and render them inside of `index.js`.
