import React, { useEffect } from 'react';
import {
  Container, Grid, Programing, Personal, Para, Span, SpanContainer, Title, Projects, Languages, Education, SoftSkills, DownloadButton, ResumeButton,
  LanguageWrapper, ProgresiveBarWrapper, Bar, InputPercentage, PrograminSquare, Circle, NumberWrapper, SvgWrapper, PercentageWrapper, SkillTitle

} from './styled';
import { paginationAnimation, progressiveBarAnimation } from '../../global';

import anime from 'animejs';

export const Resume = () => {

  useEffect(() => {
    paginationAnimation();
    progressiveBarAnimation();
    anime({
      targets: '.percentage-value-animation-javascript',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 3000
    })
    anime({
      targets: '.percentage-value-animation-css',
      value: [0, 85],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 3000
    })
  
  }, []);
//calc(440 - (440 * 87) / 100)

  return (
    <Container className='animation'>
      <Grid>
        <Programing>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation' cx='70' cy='70' r='70' percentage={90}></Circle>
              </SvgWrapper>
                <NumberWrapper className='percentage-value-animation-javascript' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>JavaScript</SkillTitle>
          </PrograminSquare>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation' cx='70' cy='70' r='70' percentage={85}></Circle>
              </SvgWrapper>
                <NumberWrapper className='percentage-value-animation-css' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>CSS</SkillTitle>
          </PrograminSquare>
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