import React from "react";
import { Link } from "gatsby";
import utils from "../../lib/utils";

const Header = ({ header }) => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">
          <img src="/icon.png" alt="Logo" />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">{renderSections(header)}</div>
      </div> */}
    </div>
  </nav>
);

const renderSections = sections => (
  <>
    {sections.map((section, i: number) => {
      if (isDropdown(section)) return renderDropdown(section, i);

      if (utils.isExternalLink(section.linkPath)) {
        return (
          <a
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
            href={section.linkPath}
            key={i}
          >
            {section.title}
          </a>
        );
      }

      return (
        <a className="navbar-item" key={i}>
          <Link to={section.linkPath}>{section.title}</Link>
        </a>
      );
    })}
  </>
);

function isDropdown(section) {
  return section.links;
}

const renderDropdown = (section, j: number) => (
  <div className="navbar-item has-dropdown is-hoverable" key={j}>
    <a className="navbar-link">{section.title}</a>
    <div className="navbar-dropdown">
      {section.links.map((link, i: number) => {
        if (utils.isExternalLink(link.linkPath)) {
          return (
            <a
              className="navbar-item"
              target="_blank"
              rel="noopener noreferrer"
              href={link.linkPath}
              key={i}
            >
              {link.linkName}
            </a>
          );
        }
        return (
          <a className="navbar-item" key={i}>
            <Link to={link.linkPath}>{link.linkName}</Link>
          </a>
        );
      })}
    </div>
  </div>
);

export default Header;
