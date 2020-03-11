---
path: "/typescale"
title: "Typescale"
section: "Foundations of design"
order: 27
---

There are several scales to choose from when building an application. Here are some of the most popular.

- Major Third
- Major Second
- Perfect Fourth
- Golden Ratio
- Perfect Fifth

### Creating A Type Scale In Figma

In your Figma project, head to the Typography tab and use the provided artboards as a template.

You should pick a font family and a typescale.

Head to the [Google fonts website](https://fonts.google.com/) and find a font family for your design system.

I'll choose Poppins, a nice sans-serif font.

Now, head over to the [type scale calculator](https://type-scale.com/) and select a type scale.

I chose the Major Second.

We're going to create text styles for our `h1` to `h5` headers as well as paragraphs, helper text, and copyright text.

Create a new text item by pressing 'T' and typing the following:

```
Paragraph - 16px (1rem) FEM Design System
```

I chose to round my REM values to one decimal place, however you may want to extend this out to the hundredths or thousandths place if you want to be more explicit.

We will then use the type scale we just selected to calculate the headers, helper text, and copyright text.

```
H1 - 28px (1.8rem) FEM Design System
H2 - 25px (1.6rem) FEM Design System
H3 - 22px (1.4rem) FEM Design system
H4 - 20px (1.2rem) FEM Design System
H5 - 18px (1.1rem) FEM Design System
Paragraph - 16px (1rem) FEM Design System
Helper Text - 14px (0.8rem) FEM Design System
Copyright Text - 12px (0.7rem) FEM Design System
```

Once each of these has been created (with the respective pixel values and font family you chose in the previous step), select each individually, press the four dots next to Text in the right-hand sidebar, and click the plus icon to add a new style. Give it the name of the element it will represent (i.e. Paragraph, Header 1).

Select all of the text blocks and next to Fill in the right-hand sidebar, click the four dots and select `Text Color` from our color palette.

Now, let's create the inverted text.

Clone the art board we just created and set the background color to black (#000000).

Select all of the text blocks and set the color to `Text Color Inverted`.
