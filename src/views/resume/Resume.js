import React, { useEffect }from 'react';
import { Container, Grid, Programing, Personal, Para, Span, SpanContainer, Title, Projects, Languages, Education, SoftSkills, DownloadButton, ResumeButton } from './styled';
import { paginationAnimation } from '../../global';

export const Resume = () => {


  useEffect(() => {
    paginationAnimation();
  }, []);

  return (
    <Container className='animation'>
      <Grid>
        <Programing>
          Programing Skills
        </Programing>
        <Personal>
          <Title>personal information </Title>
          <SpanContainer>
            <Span>full name:</Span>
            <Para>Roberto Leon Suarez Nieto</Para>
          </SpanContainer>
          <SpanContainer>
            <Span>DOB:</Span>
            <Para>November 10, 1978</Para>
          </SpanContainer>
          <SpanContainer>
            <Span>email:</Span>
            <Para>leonsua@gmail.com</Para>
          </SpanContainer>
          <SpanContainer>
            <Span>phone:</Span>
            <Para> (937) - 424 6188</Para>
          </SpanContainer>
        </Personal>
        <Projects>
          <Title>projects</Title>
        </Projects>
        <Languages>
        <Title>Languages</Title>
        </Languages>
        <Education>
        <Title>Education</Title>
        </Education>
        <SoftSkills>
        <Title>Soft Skills</Title>
        </SoftSkills>
        <DownloadButton>
          <ResumeButton>Download My Resume</ResumeButton>
        </DownloadButton>
      </Grid>
    </Container>
  )
};