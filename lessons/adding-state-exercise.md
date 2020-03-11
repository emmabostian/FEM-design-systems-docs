---
path: "/adding-state-exercise"
title: "Adding state exercise"
section: "Developing syled components"
order: 46
---

Now let's implement our button states: hover, focused, active, and disabled.

We can nest styling just as you would with a CSS pre-processor like Sass.

Since all three of my buttons (primary, secondary, and tertiary) have the same hover state, I'll add the state to the `Button` component. I'll also add a transition to smooth out the background and color changes.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;
```

We should now see our transitions being added to our buttons.

Go ahead and add the rest of the states for your buttons. You may also want to add some of these variables to your theme (i.e. disabled).
