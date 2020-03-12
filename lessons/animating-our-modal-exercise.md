---
path: "/animating-our-modal-exercise"
title: "Animating our modal exercise"
section: "Animating components"
order: 55
description: Let's walk through an example of animating our modal component.
---

First install `react-spring`

```jsx
npm i react-spring
```

Let's first create the state we'll need to show and hide the modal.

Inside `index.js` let's create new state called `showModal`. Then let's add a button underneath the theme switcher buttons which will toggle the visibility of our modal. You can add this underneath the theme switcher buttons.

```jsx
const [showModal, setShowModal] = useState(false);

...

<button
  style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
  onClick={() => setShowModal(true)}
>
  Show modal
</button>
```

Lastly, let's pass `showModal` and `setShowModal` as properties to our `SignUpModal` component.

```jsx
<SignUpModal showModal={showModal} setShowModal={setShowModal} />
```

Inside `Modals.js` we can now destructure `showModal` and `setShowModal` from props.

```jsx
export const SignUpModal = ({ showModal, setShowModal }) => {
```

We'll use `react-spring` to show and hide our modal.

Import `animated` and `useSpring` from `react-spring`.

```jsx
import { useSpring, animated } from "react-spring";
```

Now let's define our animation. We can use the hook state `showModal` to determine the styling of our modal.

```jsx
const animation = useSpring({
  opacity: showModal ? 1 : 0,
  transform: showModal ? `translateY(0)` : `translateY(-200%)`
});
```

Lastly, let's wrap `WrapperModal` in an `animated.div` element and pass our animation as the `style` prop.

```jsx
<animated.div style={animation}>
  <ModalWrapper>
    <SignUp />
    <SignUpHeader>Sign Up</SignUpHeader>
    <SignUpText>
      Sign up today to get access to all of our content and features!
    </SignUpText>
    <PrimaryButton onClick={() => console.log("You signed up!")}>
      Sign Up
    </PrimaryButton>
    <CloseModalButton onClick={() => setShowModal(false)}>
      <CloseIcon />
    </CloseModalButton>
  </ModalWrapper>
</animated.div>
```

`react-spring` comes with a `config` which can be used to change the mass and tension of our components. Let's test it out.

Import `config` from `react-spring`.

```jsx
import { useSpring, animated, config } from "react-spring";
```

Now we can add it as property in the `useSpring` definition. We'll use the `slow` configuration.

```jsx
const animation = useSpring({
  opacity: showModal ? 1 : 0,
  transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  config: config.slow
});
```

If we go back to the UI and click 'Show modal' we should see our modal animating in. This is a bit slow for my liking so I'll remove it but `config` provides some nice configurations for your animations.

Now, go ahead add the anmimation to your other modal.
