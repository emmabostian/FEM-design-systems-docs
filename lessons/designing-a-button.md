---
path: "/designing-a-button"
title: "Designing a button"
section: "Designing components with Figma"
order: 31
---

Let's design our default primary, secondary, and tertiary buttons.

I've created a Figma starter kit for you to copy. You can grab it [here](https://www.figma.com/file/FUgY11amAHtmR2zyiHcSYs/FEM-Template?node-id=0%3A1), copy and paste it into a new project.

Our primary button will be a filled button which uses our primary color (primary-300) and will use either black or white text depending upon color contrast ratios.

Our secondary button will be either a ghost button or a filled button having a lighter version of our primary color.

Our tertiary button will be the button label without a background color or outline.

In the Figma starter you cloned I've created a table with the following axes. It's your job to fill it in with button designs!

### X-Axis Labels

- Default
- Hover
- Focus
- Active
- Disabled

### Y-Axis Labels

- Primary
- Secondary
- Tertiary
- Large
- Small
- Icon (no text)
- Labelled icon
- Warning
- Error
- Success

We haven't defined colors for warning, success, and error so you can use the following HEX codes.

```
Warning: #fddb3a (black text)
Error: #fa4d56 (black text)
Success: #6fdc8c (black text)
```

Use the following values for your buttons:

```
Large button vertical padding: 16px
Default button vertical padding: 8px
Small button vertical padding: 8px

Large button horizontal padding: 24px
Default button horizontal padding: 12px
Small button horizontal padding: 8px

Large button minimum width: 125px
Default button minimum width: 100px
Small button minimum width: 75px

Large button icon size: 24 x 24
Default button icon size: 16 x 16
Small button icon size: 8 x 8

8px padding right between the icon and the button text
```

You can choose the button styles that you like (filled versus ghost, border radius, text style).

We will use the save icon from [The Noun Project](https://thenounproject.com/search/?q=save&i=2209758) to create our icon buttons. Click 'Get this icon' and select basic download. Then download the SVG. You can drag the downloaded SVG into Figma.

Take the next 30 minutes and design your buttons in Figma.

Once completed, right click on your default elements (primary, secondary, tertiary, etc.) and click "Create component." You can also select the component and type "option + command + k" on a Mac as a shortcut.

You can additionally add a component description in the right-hand sidebar.

Then on the left sidebar click "Assets" and you should see your components there.
