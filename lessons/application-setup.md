---
path: "/application-setup"
title: "Application setup"
section: "Developing syled components"
order: 39
---

We're going to build our components using [create-react-app](https://github.com/facebook/create-react-app).

**I wouldn't condone using `create-react-app` under normal circumstances if you're building an enterprise design system; this tool is great for building React _applications_ but not for creating component libraries.**

I wanted to focus on the content and not on the deployment and build processes.

There was a library I attempted, and hoped, to use for this workshop called `create-react-library`, which you can check out [here](https://www.npmjs.com/package/create-react-library), but unfortunately getting it to work with styled components was a hassle and many of the dependent packages were sorely deprecated.

If they update this library to use the newest version of React, this is the solution I would opt for!

If there's a future version of this workshop, I would love to include the setup of a monorepo, but I simply didn't have time!

## Editor Settings

At the time of this recording I am using the [Dank Mono](https://dank.sh/) font, which is a paid font for 40 GBP, however you can use [Fira Code](https://github.com/tonsky/FiraCode) if you're looking for something similar, with font ligatures, for free!

I am also using the VS Code color theme [Dracula](https://draculatheme.com/visual-studio-code/).

## Application setup

Open your terminal and change directories to the place you want to house your project. I'll save mine to my desktop.

```
cd Desktop
```

Then use `create-react-app` to create a new React application. I use [`npx`](https://nodejs.dev/the-npx-nodejs-package-runner), node.js package runner to use `create-react-app`.

This is a great tool because it allows you to leverage tools without installing them and you can run different versions of the packages with the `@version` prompt.

Once in your desired location, run the following commands to create a new project.

`npx` is a great feature that comes with `npm >= 5.2.0`, so if you're on a lower `npm` version, I recommend updating.

```js
npx create-react-app my-component-library && cd my-component-library
```

I am then going to open my React application in my editor of choice: [VS Code](https://code.visualstudio.com/docs/editor/command-line).

I use the command `code .` to open the current project in VSCode. You can install the VSCode command line interface (CLI) [here](https://code.visualstudio.com/docs/editor/command-line) if you'd also like this functionality!

Once VSCode is open I prefer to use the integrated terminal. You can open this by clicking control + back tick on Mac, or by going to the View menu and clicking Terminal.
