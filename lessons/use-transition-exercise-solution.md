---
path: "/use-transition-exercise-solution"
title: "Use transition exercise solution"
section: "Animating components"
order: 60
---

```jsx
import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

/*
 ** Exercise 2: useToggle
 ** In this exercise you'll transition between two emojis: sad and happy
 ** You should have a happy state which will be a boolean denoting whether or not the emoji should
 ** be happy or sad.
 ** The emojis should transition from opacity: 0 to opacity: 1
 ** The button text should change depending upon the happy state: "Make sad" if currently happy and "Make happy" if currently sad
 */

const EmojiCarousel = () => {
  const [happy, setHappy] = useState(true);

  const transition = useTransition(happy, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div className="emoji-carousel">
      <button onClick={() => setHappy(!happy)}>
        {happy ? "Make sad" : "Make happy"}
      </button>
      {transition.map(({ item, props }) => {
        return item ? (
          <animated.span role="img" style={props} aria-label="Happy">
            😀
          </animated.span>
        ) : (
          <animated.span role="img" style={props} aria-label="Sad">
            😭
          </animated.span>
        );
      })}
    </div>
  );
};

export default EmojiCarousel;
```

## Other React Spring Hooks

There are several other `react-spring` hooks you can use to create beautiful micro-interactions for your design system.

The full list can be found [here](https://www.react-spring.io/docs/hooks/basics).
