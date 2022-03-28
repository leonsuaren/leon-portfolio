import styled from 'styled-components';
import { GlobalStyled } from '../../global';

export const Title = styled.h1`
  @media screen and (min-width: 800px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 5rem;
    align-self: center;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.responsivePrimaryColor};
    font-size: 3rem;
    align-self: center;
  }
`;

export const SquareBrakets = styled.span`
    @media screen and (min-width: 800px) {
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 5rem;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    color: ${GlobalStyled.fontColor.responsivePrimaryColor};
    font-size: 4rem;
  }
`;

export const FullStackTitle = styled.h3`
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

export const BioText = styled.p`
  @media screen and (min-width: 800px) {
    font-family: ${GlobalStyled.typography.primaryFont};
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    font-family: ${GlobalStyled.typography.primaryFont};
    color: ${GlobalStyled.fontColor.responsivePrimaryColor};
    font-size: 1.5rem;
  }
`;