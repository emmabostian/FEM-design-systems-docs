---
path: "/adding-global-styles"
title: "Adding global styles"
section: "Developing styled components"
order: 45
---

There is a way to add global styles to our styled components, which we'll want to do for things such as defining our root font size.

First, let's install a helper package called [`polished`](https://github.com/styled-components/polished). This gives us some great features, one of which we'll use right now: normalize.

Let's install the package.

```
npm i polished
```

Inside of the `utils/` directory, create a new file called `Global.js`. Let's add the following.

```jsx
import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 65px 0 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}
`;
```

Add `Global.js` to the default export in `index.js`.

```js
export * from "./Global";
```

Back inside `index.js` let's import our global styles and render it as a self-closing tag at the end of our JSX.

```jsx
...
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Goodbye World</SecondaryButton>
    <TertiaryButton>Hey</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
```
