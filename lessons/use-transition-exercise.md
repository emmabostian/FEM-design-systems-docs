---
path: "/use-transition-exercise"
title: "Use transition exercise"
section: "Animating components"
order: 59
---

`useTransition` is a bit more complex and will mount and unmount your elements from the DOM. It can also transition between different elements in the DOM (like in a photo album).

To define your `useTransition` hook, you must define the `from`, `enter`, and `leave` attributes.

To get our transition to render we can't simply pass it as a `style` attribute; we must iterate over it in our return statement.

You can transition arrays of elements:

```jsx
const [items, set] = useState([...])
const transitions = useTransition(items, item => item.key, {
	from: { opacity: 0 },
	enter: { opacity: 1 },
	leave: { opacity: 0 }
})

return transitions.map(({ item, props, key }) =>
	<animated.div key={key} style={props}>{item.text}</animated.div>
)
```

You can toggle between two different elements.

```jsx
const [toggle, set] = useState(false);
const transitions = useTransition(toggle, null, {
  from: { position: "absolute", opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});
return transitions.map(({ item, key, props }) =>
  item ? (
    <animated.div style={props}>Hello</animated.div>
  ) : (
    <animated.div style={props}>Goodbye</animated.div>
  )
);
```

Or you can mount and unmount one element, like a modal, from the DOM based on a conditional statement.

```jsx
const [show, set] = useState(false);
const transitions = useTransition(show, null, {
  from: { position: "absolute", opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});
return transitions.map(
  ({ item, key, props }) =>
    item && (
      <animated.div key={key} style={props}>
        I'm mounted!
      </animated.div>
    )
);
```

Now, it's your turn. Head over to [this CodeSandbox](https://codesandbox.io/s/reverent-currying-fbhix?fontsize=14&hidenavigation=1&theme=dark) and complete the activity in the `EmojiCarousel.js` file.
