import React from "react";
import { Link, navigate } from "gatsby";
import utils from "../../lib/utils";
import { HeaderSection, Link as LinkType } from "../../types/types";
import { HeaderOptionsProps } from "./index";

interface DropdownSection {
  title: string;
  links: LinkType[];
}

interface HeaderProps {
  header: HeaderSection[];
}

function isDropdown(section: HeaderSection) {
  return section.links;
}

const renderDropdown = (section: DropdownSection, j: number) => (
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

const renderSections = (sections: HeaderSection[]) => (
  <>
    {sections.map((section, i: number) => {
      if (isDropdown(section))
        return renderDropdown(section as DropdownSection, i);

      if (utils.isExternalLink(section.linkPath as string)) {
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
          <Link to={section.linkPath as string}>{section.title}</Link>
        </a>
      );
    })}
  </>
);

const Header = ({
  header,
  dontShowLogo,
  showLoginButton
}: HeaderProps & HeaderOptionsProps) => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      {!dontShowLogo && (
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/logo-fond-bleu.svg" alt="Logo" className="navbar-logo" />
          </a>

          {/* <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
        </div>
      )}

      <div id="navbarMenu" className="navbar-menu">
        {/* render left navbar links: */}
        {/* <div className="navbar-start">{renderSections(header)}</div> */}
        {showLoginButton && (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="transparent-button"
                  onClick={() => navigate("/login")}
                >
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </nav>
);

export default Header;
