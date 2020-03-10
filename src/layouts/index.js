import React, { useState } from "react";
import Link from "gatsby-link";
import { Nav, MobileNav } from "../components/Nav";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import footer from "../assets/footer.svg";
import hamburger from "../assets/hamburger.svg";
import "prismjs/themes/prism-okaidia.css";

import "./index.css";

const TemplateWrapper = props => {
  const [showMenu, setShowMenu] = useState(false);
  return (
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
          <header className="header">
            <Link to="/" className="navbar-brand">
              {data.site.siteMetadata.title}
            </Link>
            <button
              className="menu-button"
              onClick={() => setShowMenu(true)}
              aria-label="Menu"
            >
              <img src={hamburger} alt="" aria-hidden="true" />
            </button>
          </header>
          <main className="main">{props.children}</main>
          <Nav />
          <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
          <img
            className="footer-image"
            src={footer}
            alt="footer graphic"
            aria-hidden="true"
          />
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
};

export default TemplateWrapper;
