---
path: "/use-spring-exercise-solution"
title: "Use spring exercise solution"
section: "Animating components"
order: 58
---

```jsx
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

/*
 ** Exercise 1: useSpring
 ** In this exercise you'll animate text in and out depending upon the state
 ** The text will slide in and fade in from the top (30%) on show
 ** and fade out and slide out towards the top on hide
 */

const FadeIn = () => {
  const [show, setShow] = useState(false);
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-30%)`
  });

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle animation</button>
      <animated.p style={animation}>Animate me on click!</animated.p>
    </div>
  );
};

export default FadeIn;
```
