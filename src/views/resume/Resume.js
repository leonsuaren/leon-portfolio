import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../../context';

import {
  Container, Grid, Programing, Personal, Para, Span, SpanContainer, Title, Projects, Languages, Education, SoftSkills, DownloadButton, ResumeButton,
  LanguageWrapper, ProgresiveBarWrapper, Bar, InputPercentage, PrograminSquare, Circle, NumberWrapper, SvgWrapper, PercentageWrapper, SkillTitle

} from './styled';
import { paginationAnimation, progressiveBarAnimation } from '../../global';

import anime from 'animejs';

export const Resume = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;

  useEffect(() => {
    paginationAnimation();
    progressiveBarAnimation();
    anime({
      targets: '.percentage-value-animation-javascript',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      delay: 500,
      duration: 3000
    })
    anime({
      targets: '.circle-animation-javascript',
      strokeDashoffset: [anime.setDashoffset, `${44}`],
      delay: 500,
      duration: 3000,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.percentage-value-animation-css',
      value: [0, 85],
      round: 1,
      easing: 'easeInOutQuad',
      delay: 500,
      duration: 3000
    })
    anime({
      targets: '.circle-animation-css',
      strokeDashoffset: [anime.setDashoffset, `${66}`],
      delay: 500,
      duration: 3000,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.percentage-value-animation-html',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      delay: 500,
      duration: 3000
    })
    anime({
      targets: '.circle-animation-html',
      strokeDashoffset: [anime.setDashoffset, `${44}`],
      delay: 500,
      duration: 3000,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.percentage-value-animation-react',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      delay: 500,
      duration: 3000
    })
    anime({
      targets: '.circle-animation-react',
      strokeDashoffset: [anime.setDashoffset, `${44}`],
      delay: 500,
      duration: 3000,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.percentage-value-animation-express',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      delay: 500,
      duration: 3000
    })
    anime({
      targets: '.circle-animation-express',
      strokeDashoffset: [anime.setDashoffset, `${44}`],
      delay: 500,
      duration: 3000,
      easing: 'easeInOutQuad'
    });


  }, [language]);
  // calc(440 - (440 * ${props => props.percentage}) / 100)
  return (
    <Container className='animation'>
      <Grid>
        <Programing>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation-javascript' cx='70' cy='70' r='70' color={'#03a9f4'}></Circle>
              </SvgWrapper>
              <NumberWrapper className='percentage-value-animation-javascript' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>JavaScript</SkillTitle>
          </PrograminSquare>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation-css' cx='70' cy='70' r='70' color={'#E6F280'}></Circle>
              </SvgWrapper>
              <NumberWrapper className='percentage-value-animation-css' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>CSS</SkillTitle>
          </PrograminSquare>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation-html' cx='70' cy='70' r='70' color={'#5aedb2'}></Circle>
              </SvgWrapper>
              <NumberWrapper className='percentage-value-animation-html' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>HTML</SkillTitle>
          </PrograminSquare>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation-react' cx='70' cy='70' r='70' color={'#6270ea'}></Circle>
              </SvgWrapper>
              <NumberWrapper className='percentage-value-animation-react' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>React</SkillTitle>
          </PrograminSquare>
          <PrograminSquare>
            <PercentageWrapper>
              <SvgWrapper>
                <Circle cx='70' cy='70' r='70'></Circle>
                <Circle className='circle-animation-express' cx='70' cy='70' r='70' color={'#e51239'}></Circle>
              </SvgWrapper>
              <NumberWrapper className='percentage-value-animation-express' disabled value='0%' />
            </PercentageWrapper>
            <SkillTitle>Express</SkillTitle>
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
          <Title>{language.languagesTitle}</Title>
          <LanguageWrapper>
            <h5>{language.languageOne}</h5>
            <ProgresiveBarWrapper>
              <Bar className='bar-animation'></Bar>
            </ProgresiveBarWrapper>
            <InputPercentage className='input-percentage' value='0%' disabled />
          </LanguageWrapper>
          <LanguageWrapper>
            <h5>{language.languageTwo}</h5>
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