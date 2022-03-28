import styled from 'styled-components';
import { AiOutlineLike, AiFillCopy } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

export const ProjectImage = styled.figure`
  width: 100%;
  height: 100%;
`;

export const CardStyle = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  width: 400px;
  height: 500px;
  border-radius: 15px;
  border-top: solid 10px ${props => props.color};
  background-size: cover;
  overflow: hidden;
  z-index: 10;
  box-shadow: 10px 10px 10px #CCCCCC;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 40px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
`;

export const LikeIcon = styled(AiOutlineLike)`
  font-size: 1.8rem;
  color: #adabab;
`;

export const ShareIcon = styled(BsShare)`
  font-size: 1.8rem;
  color: #adabab;
`;

export const CopyIcon = styled(AiFillCopy)`
  font-size: 1.8rem;
  color: #adabab;
`;

export const Folder = styled.div`
  position: absolute;
  top: 220px;
  left: -30px;
  width: 110%;
  height: 280px;
  background: ${props => props.color};
  transform: rotate(15deg);
  box-shadow: 5px 5px 5px #CCCCCC;
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: 10%, 10% 10% 70%;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-rows: 10%, 10% 10% 70%;
  width: 100%;
  height: 100%;
`;

export const ContactCardStyle = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  border-top: solid 10px ${props => props.color};
  background-size: cover;
  overflow: hidden;
  z-index: 10;
  box-shadow: 10px 10px 10px #CCCCCC;
`;

export const TextContent = styled.h4`
  color: #FFFFFF;
  transform: rotate(15deg);
  font-weight: bold;
`;

export const ContactFolder = styled.div`
  position: absolute;
  top: 100px;
  left: -30px;
  width: 110%;
  height: 200px;
  background: ${props => props.color};
  transform: rotate(15deg);
  box-shadow: 5px 5px 5px #CCCCCC;
`;

export const IconWraper = styled.div`
  width: 100px;
  justify-content: center;
`;

export const Img = styled.img`
  width: 150px;
  transform: rotate(15deg);
`;
