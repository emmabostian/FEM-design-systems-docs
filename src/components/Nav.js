import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "gatsby";
import close from "../assets/close.svg";
import "./nav.css";

export const Nav = () => (
  <nav className="nav">
    <h3 className="toc-title">Table of Contents</h3>
    <ul>
      <li>
        <Link
          activeClassName="link-selected"
          to="/foundations-of-design-systems"
        >
          Foundations of Design Systems
        </Link>
      </li>
      <li>
        <Link activeClassName="link-selected" to="/foundations-of-design">
          Foundations of Design
        </Link>
      </li>
      <li>
        <Link activeClassName="link-selected" to="/designing-with-figma">
          Designing Components
        </Link>
      </li>
      <li>
        <Link
          activeClassName="link-selected"
          to="/developing-styled-components"
        >
          Developing Components
        </Link>
      </li>
      <li>
        <Link activeClassName="link-selected" to="/animating-components">
          Animating Components
        </Link>
      </li>
      <li>
        <Link activeClassName="link-selected" to="/documenting-components">
          Documenting Components
        </Link>
      </li>
      <li>
        <Link activeClassName="link-selected" to="/tools-and-resources">
          Tools and Resources
        </Link>
      </li>
    </ul>
  </nav>
);

export const MobileNav = ({ showMenu, setShowMenu }) => {
  const animation = useSpring({
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? `translateY(0)` : `translateY(-100%)`
  });

  return (
    <animated.nav className="mobile-nav" style={animation}>
      <div className="nav-wrapper">
        <button
          onClick={() => setShowMenu(false)}
          className="close-menu"
          aria-label="Close menu"
        >
          <img src={close} aria-hidden="true" alt="" />
        </button>
        <h3 className="toc-title">Table of Contents</h3>
        <ul>
          <li>
            <Link
              activeClassName="link-selected"
              to="/foundations-of-design-systems"
            >
              Foundations of Design Systems
            </Link>
          </li>
          <li>
            <Link activeClassName="link-selected" to="/foundations-of-design">
              Foundations of Design
            </Link>
          </li>
          <li>
            <Link activeClassName="link-selected" to="/designing-with-figma">
              Designing Components
            </Link>
          </li>
          <li>
            <Link
              activeClassName="link-selected"
              to="/developing-styled-components"
            >
              Developing Components
            </Link>
          </li>
          <li>
            <Link activeClassName="link-selected" to="/animating-components">
              Animating Components
            </Link>
          </li>
          <li>
            <Link activeClassName="link-selected" to="/documenting-components">
              Documenting Components
            </Link>
          </li>
          <li>
            <Link activeClassName="link-selected" to="/tools-and-resources">
              Tools and Resources
            </Link>
          </li>
        </ul>
      </div>
    </animated.nav>
  );
};

export default Nav;
