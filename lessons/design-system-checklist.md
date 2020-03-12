---
path: "/design-system-checklist"
title: "Design system checklist"
section: "Foundations of design systems"
order: 10
description: Having a design system checklist ensures your components are complete and ready for development. In this video we'll examine some aspects, such as accessibility, that you may want to include on your design checklist.
---

Before a component is considered complete, it must meet several design and development requirements:

### Design Requirements

#### Accessibly

All users, regardless of circumstance, must be able to accomplish the same tasks within our product. Our designs must account for users with visual impairments and must ensure all facets are consumable.

#### Interaction

How should a component respond when a user interacts with it? Is there validation feedback that must occur? The interaction definition must be defined.

#### Context

How and where should this component be used? When should I use a link versus a tertiary button, for example?

#### Completion

Are all states, including neutral, hover, focus, and disabled, defined?

#### Content

What type of content does this component rely upon? Does it accurately embody the brand identity?

#### Customization

Are aspects of this component customizable? If so, how? For example, if my design system serves multiple products, the primary button might have a different background color for product A versus product B. We must define these customizable parameters.

#### Resolution

How does this component look on varying screen resolutions? How does the layout change?

### Development Checklist

#### Accessibility

In addition to an accessible color palette, we must develop our components with semantic HTML elements in order to ensure compliance with assistive technologies. We also must account for keyboard navigation.

#### Responsiveness

Our components must respond to browser window resizing and varying screen resolutions.

#### Completion

Does this component account for all aspects of the design? Have we implemented a near pixel-perfect component?

#### Customization

Have we implemented all of the customizable aspects of this component?

#### Error Handling / Data Validation

How do our components respond when something breaks? Have we incorporated type checking with React Prop Types or TypeScript to ensure our parameters comply with expected data types?

#### Browser Compatibility

Do the technologies we use work across all supported browsers or must we include polyfills?
