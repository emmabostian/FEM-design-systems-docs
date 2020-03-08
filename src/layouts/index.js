import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import "prismjs/themes/prism-okaidia.css";

import "./index.css";

const TemplateWrapper = props => (
  <StaticQuery
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "keywords",
              content: data.site.siteMetadata.keywords.join(", ")
            }
          ]}
        />
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            {data.site.siteMetadata.title}
          </Link>
          <p>Frontend Masters</p>
        </nav>
        <main className="main">{props.children}</main>
      </div>
    )}
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
      }
    `}
  />
);

export default TemplateWrapper;
