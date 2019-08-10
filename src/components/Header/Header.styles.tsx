import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { fullWidth, styleVars, breakpoint } from '@lib/style';
import { brand } from '@lib/theme';
import SiteLogo from '@components/SiteLogo';

export const StyledLogo = styled(SiteLogo)`
  display: block;
  height: 38px;
  ${breakpoint('medium')} {
    height: 44px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: unset;
  text-decoration: none;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(${styleVars.outerMargin} / 2) 2rem;
  background-color: ${brand.primary};
  // filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2));
  ${breakpoint('medium')} {
    padding: calc(${styleVars.outerMargin}) 2rem;
    
  }
`;

export const getStyledLogoContainer = (isHeading = false) => styled[
  isHeading ? 'h1' : 'div'
]`
  display: block;
  margin: 0;
  font: unset;
`;
