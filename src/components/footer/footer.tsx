import React from "react";
import { Link } from "gatsby";
import utils from "../../lib/utils";
import { FooterSection } from "../../types/types";
import { FooterOptionsProps } from "./index";

interface FooterProps {
  footer: FooterSection[];
}

const renderSection = (section: FooterSection) => (
  <>
    <div className="section-title">
      <strong>{section.title}</strong>
    </div>
    <ul>
      {section.links.map((link, j: number) => {
        if (utils.isExternalLink(link.linkPath)) {
          return (
            <li key={j}>
              <a target="_blank" href={link.linkPath} rel="noopener noreferrer">
                {link.linkName}
              </a>
            </li>
          );
        }
        return (
          <li key={j}>
            <Link to={link.linkPath}>{link.linkName}</Link>
          </li>
        );
      })}
    </ul>
  </>
);

const renderSections = (sections: FooterSection[]) => (
  <>
    {sections.map((section, i: number) => (
      <div className="column is-3" key={i}>
        {renderSection(section)}
      </div>
    ))}
  </>
);

const Footer = ({ footer, showFooter }: FooterProps & FooterOptionsProps) => {
  if (showFooter) {
    return (
      <footer className="footer">
        <div className="container has-text-centered">
          <Link to="/mentions-legales">Mentions légales</Link>
          {/* 
          
            footer V2:

          <div className="columns is-centered">
            <div className="column is-1">
              hola
            </div>
            <div className="column is-two-fifths">Copyright stuff</div>
            <div className="column">
              <div className="columns">
                <div className="column" />
                {renderSections(footer)}
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    );
  }
  return null;
};

export default Footer;
