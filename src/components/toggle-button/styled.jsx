import styled from 'styled-components';
import { GlobalStyled } from '../../global';

export const ToggleWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  width: 100px;
`;

export const Toggle = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  margin: 0px 30px;
  border-radius: 25px;
  border: 1px solid #666666;
  margin: auto;
  display: flex;
  cursor: pointer;
  background-color: ${GlobalStyled.fontColor.secondaryColor};
`;

export const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666666;
  border-radius: 50%;
  margin-top: 1px;
  background: white;
  transition: transform 0.1s linear;
  transform: translate(${ props => props.isActive ? '26px' : '1px' });
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Span = styled.span`
  font-family: ${GlobalStyled.typography.primaryFont};
  font-size: 1.2rem;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0;
  padding: 0;
`;