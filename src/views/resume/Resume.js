import React, { useEffect } from 'react';
import {
  Container, Grid, Programing, Personal, Para, Span, SpanContainer, Title, Projects, Languages, Education, SoftSkills, DownloadButton, ResumeButton,
  LanguageWrapper, ProgresiveBarWrapper, Bar, InputPercentage

} from './styled';
import { paginationAnimation, progressiveBarAnimation } from '../../global';

export const Resume = () => {

  useEffect(() => {
    paginationAnimation();
    progressiveBarAnimation();
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
          <LanguageWrapper>
            <h5>Spanish</h5>
            <ProgresiveBarWrapper>
              <Bar className='bar-animation'></Bar>
            </ProgresiveBarWrapper>
            <InputPercentage className='input-percentage' value='0%' disabled />
          </LanguageWrapper>
          <LanguageWrapper>
            <h5>English</h5>
            <ProgresiveBarWrapper>
              <Bar className='bar-english-animation'></Bar>
            </ProgresiveBarWrapper>
            <InputPercentage className='input-english-percentage' value='0%' disabled />
          </LanguageWrapper>
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