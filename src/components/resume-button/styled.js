import styled from 'styled-components';
import {GlobalStyled} from '../../global';

export const ResumeButtonStyled = styled.button`
  width: 200px;
  height: 50px;
  padding: 5px;
  color: white;
  background-color: #6270ea;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: ${GlobalStyled.typography.secondaryFont};
  font-weight: bold;
`;