---
path: "/use-spring-exercise"
title: "Use spring exercise"
section: "Animating components"
order: 51
---

`react-spring` is a hooks-based and a physics-based animation library, and allows you to create complex animations to delight your users.

Typically we use CSS animation libraries with transition timing functions and bezier curves to animate elements in the UI. However, it’s truly difficult to make elements transition in a natural manner.

Elements in real life don’t transition linearly through different states, and your UI elements shouldn’t either.

`useSpring` is the "bread and butter" `react-spring` hook. It allows you to transition an element's CSS properties on enter and exit as well as relative to your React state.

You can define your spring in a few ways.

You can define both the `from` and `to` values.

```jsx
const animation = useSpring({
  from: { opacity: 0, transform: `translateY(-200%)` },
  to: { opacity: 1, transform: `translateY(0)` }
});
```

You can define just the `to` value. This will take the default CSS from the DOM element as the `from` attribute values.

```jsx
const animation = useSpring({
  to: {
    opacity: 1,
    transform: `translateY(0%)`
  }
});
```

You can omit the `to` keyword and wrapping object as well to clean up your syntax.

```jsx
const animation = useSpring({
  opacity: 1,
  transform: `translateY(0%)`
});
```

Or you can use React hook state with a ternary operator to define the spring.

```jsx
const [showModal, setShowModal] = useState(false);
const animation = useSpring({
	opacity: showModal ? 1 : 0,
	transform: showModal ? `translateY(0%)` : `translateY(-200%)
});
```

Once you have defined your `useSpring` hook, you need to preface the animatable element HTML with `animated.` to tell `react-spring` that this element will be animated.

```jsx
<animated.div></animated.div>
<animated.h1></animated.h1>
```

Lastly, you must pass your `animation` constant as a `style` attribute on the animatable DOM element.

```jsx
<animated.div style={animation}></animated.div>
```

Putting that all together we get the following:

```jsx
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const Modal = () => {
	const [showModal, setShowModal] = useState(false);
	const animation = useSpring({
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-200%)
	});

	return <animated.div style={animation}>...</animated.div>
}

export default Modal;
```

Now, it's your turn. Head over to [this CodeSandbox](https://codesandbox.io/s/reverent-currying-fbhix?fontsize=14&hidenavigation=1&theme=dark) and complete the activity in the `FadeIn.js` file.
