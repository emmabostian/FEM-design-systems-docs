---
path: "/animating-our-modal-exercise-solution"
title: "Animating our modal exercise solution"
section: "Animating components"
order: 62
---

First I extracted out the `useSpring` config to a function which will return our modal animation object.

```jsx
const getAnimation = showModal => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`
  };
};
```

Next I refactored the `SignUp` modal to use this helper function.

```jsx
export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
```

Now I just followed the same process for my second `SignIn` modal.

```jsx
export const SignInModal = ({ showModal, setShowModal }) => (
  <animated.div style={useSpring(getAnimation(showModal))}>
    <ColumnModalWrapper>
      <div>
        <ModalHeader>Sign In</ModalHeader>
        <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
        <PasswordInput label="Password" />
        <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
          Sign Up
        </SecondaryButton>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
      <SignIn />
      <CloseModalButton onClick={() => setShowModal(false)}>
        <CloseIcon />
      </CloseModalButton>
    </ColumnModalWrapper>
  </animated.div>
);
```

---

If you're lost or missed some code, you can check out the branch `step-2-animating-components` on the [GitHub repo](https://github.com/emmabostian/fem-design-systems)!
