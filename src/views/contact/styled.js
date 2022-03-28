import styled from 'styled-components';
import { GlobalStyled } from '../../global';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiOutlineFacebook } from "react-icons/ai";
import anime from 'animejs';

export const Title = styled.h1`
  @media screen and (min-width: 800px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.primaryColor};
    font-size: 5rem;
    align-self: center;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    font-family: ${GlobalStyled.typography.secondaryFont};
    color: ${GlobalStyled.fontColor.primaryColor};
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
    color: ${GlobalStyled.fontColor.primaryColor};
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

export const ContactGrid = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
  }
`;

export const Mail = styled(AiOutlineMail)`
  color: #095fd6;
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 100px;
  font-weight: 1px;
`;

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;