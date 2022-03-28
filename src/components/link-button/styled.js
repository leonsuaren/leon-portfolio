import styled, { css } from 'styled-components';

const smallScreenStyle = () => {
  return (
    css`
    display: flex;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 2.2rem;
    justify-content: center;
    align-items: center;
    margin: 5px;
    `
  )
}

const largeScreenStyle = () => {
  return (
    css`
    display: flex;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 2.2rem;
    justify-content: center;
    align-items: center;
    margin: 5px;
    `
  )
};

export const Github = styled.a`
  @media screen and (min-width: 800px) {
    background-color: #4e5060;
    color: aliceblue;
    ${largeScreenStyle};
    &:hover {
      background-color: aliceblue;
      color: #4e5060;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    background-color: aliceblue;
    color: #4e5060;
    ${smallScreenStyle};
  }
`;

export const YouTube = styled.a`
  @media screen and (min-width: 800px) {
    background-color: #ff0100;
    color: aliceblue;
    ${largeScreenStyle};
    &:hover {
      background-color: aliceblue;
      color: #ff0100;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    background-color: aliceblue;
    color: #ff0100;
    font-size: 2rem;
    ${smallScreenStyle};
  }
`;

export const LinkIn = styled.a`
  @media screen and (min-width: 800px) {
    background-color: #0c66c2;
    color: aliceblue;
    ${largeScreenStyle};
    &:hover {
      background-color: aliceblue;
      color: #0c66c2;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    background-color: aliceblue;
    color: #0c66c2;
    font-size: 2rem;
    ${smallScreenStyle};
  }
`;