---
path: "/deploying-storybook"
title: "Deploying Storybook"
section: "Documenting components components"
order: 70
---

You can run `npm run build-storybook` to build your storybook documentation and then you can deploy it for all team members to use.

Once built, commit and push all of your repository code to the `master` branch.

Next head over to [Netlify](https://www.netlify.com/) and log in, or sign up, with GitHub. Click New Site From Git and select GitHub for continuous deployment, then select your repository.

Leave the owner as your default team, and the branch to deploy to `master`. Under Basic build settings, set the following arguments:

```
// Build command
npm run build-storybook

// Publish directory
storybook-static/
```

![Create new site](images/create-new-site.png)

Once the deploy has started, you can then head over to the site settings and change the site name. Netlify makes it super easy to add a custom domain with the Domain management panel. You can read more about adding a custom domain [here](https://docs.netlify.com/domains-https/custom-domains/).

## Resources

- [Storybook](https://storybook.js.org/)
- [Setting up Storybook with Material UI and Styled Components](https://medium.com/encode/setting-up-storybook-with-material-ui-and-styled-components-5bdacb6db866)

---

If you're lost or missed some code, you can check out the branch `step-3-documenting-components` on the [GitHub repo](https://github.com/emmabostian/fem-design-systems)!
