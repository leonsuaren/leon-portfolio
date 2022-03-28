import React from 'react';
import { Github, YouTube, LinkIn } from './styled';

export const GitHubLink = ({ children, ...props }) => {
  return (
    <Github {...props}>
      { children }
    </Github>
  )
}

export const YouTubelLink = ({ children, ...props }) => {
  return (
    <YouTube {...props}>
      { children }
    </YouTube>
  )
};

export const LinkedInLink = ({ children, ...props }) => {
  return (
    <LinkIn {...props}>
      { children }
    </LinkIn>
  )
};