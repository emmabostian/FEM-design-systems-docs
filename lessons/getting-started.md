---
path: "/getting-started"
title: "Getting started"
section: "Introduction"
order: 1
---

## Getting Started

You should create an account on [Figma](https://www.figma.com/). This is where we'll be designing our color palette, typography, and components.

You should also create an account on [Netlify](https://www.netlify.com/) so you can deploy your Storybook application.

## What This Course Is

This course is a high-level introduction to design systems. It will teach you the foundational skills your team needs to build a set of reusable components and standards.

## What This Course Is Not

This course is not a comprehensive overview to design systems. There is no industry-standard for what a design system truly is, and as a result it can be interpreted differently at different companies.

## Course Updates

If you find any mistakes, feel free to open a PR on the [course repository](https://github.com/emmabostian/fem-design-systems).

## Getting Started

If you'd like to view the working app, follow the steps below.

### Running the development server

1. Clone this repo `git clone https://github.com/emmabostian/fem-design-systems.git`
2. Install dependencies with `npm i`
3. Start the development server `npm start`

   \_If you hit a "path argument must be of type string" error during build, make sure `react-scripts` is version `3.4.0`, delete node_modules, and re-install dependencies with `npm i`. You can read more abou this error [here](https://github.com/facebook/create-react-app/issues/8490).

### Viewing the Storybook

To view the Storybook, you can run it locally with the following steps.

1. Clone this repo `git clone https://github.com/emmabostian/fem-design-systems.git`
2. Install dependencies with `npm i`
3. Start Storybook with `npm run storybook`.

You can also visit the Netlify site [here](https://fem-design-systems-storybook.netlify.com/?path=/story/buttons--primary).
