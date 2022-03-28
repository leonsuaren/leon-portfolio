import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context';

import { LinkTo, Name, SquareBrakets, PipeWrapper } from './styled';
import { ToggleButton } from '../../components/toggle-button';

export const Menu = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;
  const { pathname } = useLocation();

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container">
      <LinkTo to='/' className="d-flex align-items-center text-dark text-decoration-none">
        <h1><SquareBrakets>[</SquareBrakets><Name> R. Leon Suarez </Name><SquareBrakets>]</SquareBrakets></h1>
      </LinkTo>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <LinkTo isActive={pathname === "/"} to='/' className="me-3 py-2 text-dark text-decoration-none">{language.home}</LinkTo>
        <LinkTo isActive={pathname === "/projects"} to='projects' className="me-3 py-2 text-dark text-decoration-none">{language.projects}</LinkTo>
        <LinkTo isActive={pathname === "/contact"} to='contact' className="me-3 py-2 text-dark text-decoration-none">{language.contact}</LinkTo>
        <PipeWrapper>|</PipeWrapper>
        <div className="me-3 py-2">
          <ToggleButton />
        </div>
      </nav>
    </div>
  )
}