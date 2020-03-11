---
path: "/button-activity-solution"
title: "Button activity solution"
section: "Developing syled components"
order: 42
---

```jsx
export const SecondaryButton = styled(Button)`
  border: 2px solid ${primaryBlue};
  color: ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${primaryBlue};
`;
```

If we import this into `index.js` and render it underneath our `PrimaryButton` we should now see our primary, secondary, and tertiary buttons rendering in the UI.

![Three buttons](images/three-buttons.png)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
```

_The primary button import is outside of the curly brackets because it's the default export in our `Buttons` file. We'll change this in a later step._
