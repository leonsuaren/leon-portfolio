import styled, { css } from 'styled-components';
import { Link as ReactRouterDomLink} from 'react-router-dom';
import { GlobalStyled } from '../../global';

const active = ({isActive}) => {
  if(isActive) {
    return(
      css`
      border-bottom: 5px solid ${GlobalStyled.fontColor.secondaryColor};
      `
    )
  } else {
    return(
      css`
        border-bottom: none;
      `
    )
  }
};

const Link = ({isActive, children, ...props}) => {
  return(
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
};

export const LinkTo = styled(Link)`
  font-family: ${GlobalStyled.typography.primaryFont};
  text-decoration: none;
  display: block;
  text-align: center;
  box-sizing: border-box;
  font-size: 1.3rem;
  ${active}
`;

export const Name = styled.p`
    @media screen and (min-width: 800px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.secondaryColor};
    font-size: 2.5rem;
    position: relative;
    top: -10px;
    display: inline;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.secondaryColor};
    font-size: 2rem;
    position: relative;
    top: -8px;
    display: inline;
  }
`;

export const SquareBrakets = styled.span`
    @media screen and (min-width: 800px) {
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 4rem;
    font-weight: bold;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const PipeWrapper = styled.h1`
  margin: 0px 20px;
  color: ${GlobalStyled.fontColor.secondaryColor}
`;

