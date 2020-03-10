import React from "react";
import "./index.css";

const IndexPage = () => (
  <>
    <h2>Welcome!</h2>
    <p>
      Design systems have been a passion of mine for the last couple of years so
      I'm thrilled to teach you this course.
    </p>
    <p>
      You will learn many skills, some of which may be new and some of which you
      may have prior experience with. I will cover the pieces of each technology
      you need to know to complete this course, but this course will not be an
      in-depth tutorial for any one technology.
    </p>
    <p>
      We will be coding in React, so it's recommended you have React knowledge
      prior to taking this course, but the rest of the skills we'll learn don't
      require prior experience.
    </p>
    <p>Some of the topics and technologies we'll cover include:</p>
    <ul>
      <li>Design systems</li>
      <li>Design</li>
      <li>Designing components with Figma</li>
      <li>Developing components with React styled components</li>
      <li>Animating components with react-spring</li>
      <li>Documenting components with Storybook</li>
      <li>Tooling and resources</li>
    </ul>
    <h3>Before the course</h3>
    <p>
      You should create an account on <a href="https://www.figma.com/">Figma</a>
      . This is where we'll be designing our color palette, typography, and
      components.
    </p>
    <h3>About me</h3>
    <p>
      I'm Emma Bostian, a Software Engineer at LogMeIn in Karlsruhe, Germany.
      Born and raised in Upstate New York, I graduated from Siena College in
      2015 with a B.S. in Computer Science and moved down to Austin, Texas where
      I began my first full-time software job at IBM.
    </p>
    <p>
      After three years with IBM I sold everything and moved to Germany where
      I've lived for the past two years.
    </p>
    <p>
      In my spare time I do a multitude of fun activities. I am a co-host of the{" "}
      <a href="https://www.ladybug.dev/">Ladybug Podcast</a> and panelist on{" "}
      <a href="https://changelog.com/jsparty">JS Party</a>. I write blogs for
      Ultimate Courses, Stack Overflow, and Dev. I create courses for LinkedIn
      Learning, Frontend Masters, and Egghead.io. And I speak at conferences!
    </p>
    <p>
      If you have any questions during or after this course, feel free to
      contact me on Twitter{" "}
      <a href="https://twitter.com/emmabostian">@emmabostian</a>.
    </p>
    <h3>What this course is</h3>
    <p>
      This course is a high-level introduction to design systems. It will teach
      you the foundational skills your team needs to build a set of reusable
      components and standards.
    </p>
    <h3>What this course is not</h3>
    <p>
      This course is not a comprehensive overview to design systems. There is no
      industry-standard for what a design system truly is, and as a result it
      can be interpreted differently at different companies.
    </p>
    <h3>Course updates</h3>
    <p>
      If you find any mistakes, feel free to open a PR on the{" "}
      <a href="https://github.com/emmabostian/fem-design-systems">
        course repository
      </a>
      .
    </p>
    <h3>Getting started</h3>
    <p>If you'd like to view the working app, follow the steps below.</p>
    <h4>Running the development server</h4>
    <ul>
      <li>
        Clone this repo `git clone
        https://github.com/emmabostian/fem-design-systems.git`
      </li>
      <li>Install dependencies with `npm i`</li>
      <li>Start the development server `npm start`</li>
    </ul>
    <p>
      If you hit a "path argument must be of type string" error during build,
      make sure `react-scripts` is version `3.4.0`, delete node_modules, and
      re-install dependencies with `npm i`. You can read more abou this error{" "}
      <a href="https://github.com/facebook/create-react-app/issues/8490">
        here
      </a>
      .
    </p>
    <h4>Viewing the Storybook</h4>
    <p>
      To view the Storybook, you can run it locally with the following steps.
    </p>
    <ul>
      <li>
        Clone this repo `git clone
        https://github.com/emmabostian/fem-design-systems.git`
      </li>
      <li>Install dependencies with `npm i`</li>
      <li>Start Storybook with `npm run storybook`.</li>
    </ul>
    <p>
      You can also visit the Netlify site
      <a href="https://fem-design-systems-storybook.netlify.com/?path=/story/buttons--primary">
        here
      </a>
      .
    </p>
  </>
);

export default IndexPage;
