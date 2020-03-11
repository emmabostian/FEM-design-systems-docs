---
path: "/font-measurements"
title: "Font measurements"
section: "Foundations of design"
order: 26
---

There are several types of measurements you can use to build a type scale.

**Pixels** are units used by designers, however they shouldn't be used to define a type scale.

Most browsers allow a user to set their default font-size to another value than the default of `16px`. If a user sets their default to `20px`, all font-sizes should scale in relation.

However if you set font-sizes in terms of `px`, a heading set at `30px` will remain at `30px` regardless of the base font-size selected by the user.

**Em** is the unit of typography equal to the currently specified point-size. `1em` can compute to different values depending upon where you are in the code.

Ems perform in a similar fashion to REM, until it comes to nesting.

If you have a `div` with a font-size of `2em`, then you nest a `p` with a font-size of `2em`, the font-size of the paragraph is now `2em` relative to the `div`.

**REM** is the unit of typography equal to the root font size. 1 rem will be equal to the font size defined in the `html` element.

REM is great for creating robust type scale systems which account for user preference and propagate to HTML elements.

You can calculate pixels from REM by multiplying the REM value by the pixel base.
