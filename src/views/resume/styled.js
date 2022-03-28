import styled from 'styled-components';
import { GlobalStyled } from '../../global';

export const Container = styled.div`
  margin: 10px 50px;
  opacity: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: 
    "programing personal download"
    "programing projects projects"
    "programing projects projects"
    "programing education languages"
    "programing education soft"
  ;
  gap: 10px;
`;
//======Programin Start=====
export const Programing = styled.div`
  width: 100%;
  height: 100vh;
  grid-area: programing;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 0px 20px;
  background-color: aliceblue;
  align-content: center;
  justify-content: center;
`;
//=====Programin Ends=====
//====Personal Start====
export const Personal = styled.div`
  width: 100%;
  height: 100%;
  grid-area: personal;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  background-color: #8ca9d1;
  align-content: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${GlobalStyled.typography.secondaryFont};
  color: ${GlobalStyled.fontColor.primaryColor};
`;

export const Para = styled.p`
  font-family: ${GlobalStyled.typography.primaryFont};
  font-size: 1.3rem;
`;

export const Span = styled.p`
  font-family: ${GlobalStyled.typography.secondaryFont};
  font-weight: bold;
  font-size: 1.3rem;
`;

export const SpanContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 30px;
`;

//=====Personal End======
//=====Projects start====
export const Projects = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: projects;
  padding: 0px 20px;
  background-color: #c9cfd6;
  align-content: center;
  justify-content: center;
`;
//=====Projects End======
//=====Languages Start====
export const Languages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: languages;
  padding: 0px 20px;
  background-color: #c0e3e7;
  align-content: center;
  justify-content: center;
`;
//=====Languages End======
//=====Education Start=====
export const Education = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: education;
  padding: 0px 20px;
  background-color: #e6f280;
  align-content: center;
  justify-content: center;
`;
//=====Education End======
//=====Soft Skills Start=====
export const SoftSkills = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: soft;
  padding: 0px 20px;
  background-color: aliceblue;
  align-content: center;
  justify-content: center;
`;
//=====Soft Skills End=====
//=====Download Button Start=====
export const DownloadButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: download;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
`;

export const ResumeButton = styled.button`
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
//=====Download Button End=====