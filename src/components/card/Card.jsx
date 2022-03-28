import React from 'react';
import { CardStyle, Folder, IconContainer, LikeIcon, ShareIcon, CopyIcon, Buttons, ProjectImage, Header, Body, ContactCardStyle, TextContent, ContactFolder, IconWraper, Img } from './styled';

export const Card = ({ children, title, languages, description, color, githubRef, ...props }) => {
  return (
    <CardStyle color={color} {...props}>
      <Header>
        <ProjectImage>
          {children}
        </ProjectImage>
        <IconContainer>
          <LikeIcon />
          <ShareIcon />
          <CopyIcon />
        </IconContainer>
      </Header>
      <Body className="card-body">
        <h3 className="card-text">{title}</h3>
        <p>{languages}</p>
        <p>{description}</p>
        <Buttons>
          <a type="button" className="btn btn-primary" href={githubRef} target='_blanck'>Github Repo</a>
          <a type="button" className="btn btn-primary" href='#'>About This Project</a>
        </Buttons>
      </Body>
      <Folder color={color} />
    </CardStyle>
  )
}


export const ContactCard = ({ children, title, languages, description, color, githubRef, image, ...props }) => {
  return (
    <ContactCardStyle color={color} {...props}>
      <Header>
        <div/>
        <IconWraper>
        <Img src={image} />
        </IconWraper>
      </Header>
      <Body className="card-body">
        <TextContent className="card-text">{children}</TextContent>
      </Body>
      <ContactFolder color={color} />
    </ContactCardStyle>
  )
}