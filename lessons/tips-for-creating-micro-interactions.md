---
path: "/tips-for-creating-micro-interactions"
title: "Tips for creating micro-interactions"
section: "Animating components"
order: 50
description: While micro-interactions have many benefits, there are a few things to keep in mind when creating them.
---

Before you build your first micro-interaction, here are a few tips

### Accessibility

Users won’t care about the coolest micro-interaction in the world if it’s not accessible. If the interaction indicates state change, ensure that the proper HTML elements and attributes are used; otherwise, add the appropriate WAI-ARIA counterparts.

### Intentionality

Animations draw the user’s attention, but not all information has the same level of importance.

First understand which component on the page has the most pertinent or time sensitive information or priority, and then decide what to animate.

### Relatability

Our goal is to create animations which feel natural and fluid, not robotic and linear. Try to mimic the physics of the real world when designing and developing micro-interactions.

### Performance

Never make your users wait for an animation to complete if their page or data is ready.
