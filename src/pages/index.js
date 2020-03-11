import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import logo from "../assets/home-logo.svg";
import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        documentingQuery: allMarkdownRemark(
          filter: {
            frontmatter: {
              section: { eq: "Documenting components with Storybook" }
            }
          }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        developingQuery: allMarkdownRemark(
          filter: {
            frontmatter: { section: { eq: "Developing styled components" } }
          }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        designSystemsQuery: allMarkdownRemark(
          filter: {
            frontmatter: { section: { eq: "Foundations of design systems" } }
          }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        designQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Foundations of design" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        designingQuery: allMarkdownRemark(
          filter: {
            frontmatter: { section: { eq: "Designing components with Figma" } }
          }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        introductionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Introduction" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        animatingQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Animating components" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        conclusionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Conclusion" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
        toolsQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Tools and resources" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
      }
    `}
    render={props => {
      return (
        <div>
          <div>
            <h1>Table of contents</h1>
            <h2>Introduction</h2>
            <ul>
              {props.introductionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Foundations of Design Systems</h2>
            <ul>
              {props.designSystemsQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Foundations of Design</h2>
            <ul>
              {props.designQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Designing Components With Figma</h2>
            <ul>
              {props.designingQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Developing Styled Components</h2>
            <ul>
              {props.developingQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Animating Components With React Spring</h2>
            <ul>
              {props.animatingQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Documenting Components With Storybook</h2>
            <ul>
              {props.documentingQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Tools & Resources</h2>
            <ul>
              {props.toolsQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Conclusion</h2>
            <ul>
              {props.conclusionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <img className="home-logo" src={logo} alt="" aria-hidden="true" />
        </div>
      );
    }}
  />
);

export default IndexPage;
