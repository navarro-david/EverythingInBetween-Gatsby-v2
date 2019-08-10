import React from 'react';
import { StyledFooter, StyledLink } from './Footer.styles';

const Footer: React.FC<JSX.IntrinsicElements['footer']> = props => {
  return (
    <StyledFooter {...props}>
      <p>
        Made by that 🤖 
        <StyledLink
          href="https://www.dnavdeej.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          David Navarro
        </StyledLink>
      </p>
      <p>
        <StyledLink
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby.js
        </StyledLink>{' '}
        |{' '}
        <StyledLink
          href="https://github.com/chancestrickland/chancethedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </StyledLink>
      </p>
    </StyledFooter>
  );
};

export default Footer;
