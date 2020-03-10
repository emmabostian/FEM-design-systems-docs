import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div className="index-wrapper">
        <div className="index">
          <h2>What we'll cover</h2>
          <nav className="nav">
            <ul>
              {props.allMarkdownRemark.edges.map(lesson => (
                <li key={lesson.node.frontmatter.path}>
                  <Link to={lesson.node.frontmatter.path}>
                    {lesson.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )}
  />
);

export default IndexPage;
