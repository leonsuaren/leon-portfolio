import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Programing, Personal, Para, Span, SpanContainer, Title, Projects, Languages, Education, SoftSkills, DownloadButton, ResumeButton,
  LanguageWrapper, ProgresiveBarWrapper, Bar, InputPercentage

} from './styled';
import { paginationAnimation } from '../../global';

import anime from 'animejs';

export const Resume = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    paginationAnimation();
    anime.timeline({
      targets: '.bar-animation',
      width: '100%',
      easing: 'easeInOutQuad',
      duration: 3000
    })
      .add({
        targets: '.bar-animation',
        background: '#4fefaf'
      })
    anime.timeline({
      targets: '.input-percentage',
      value: [0, 100],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 3000
    })
      .add({
        targets: '.input-percentage',
        color: '#4e5060'
      })
      anime.timeline({
        targets: '.bar-english-animation',
        width: '90%',
        easing: 'easeInOutQuad',
        duration: 3000
      })
        .add({
          targets: '.bar-english-animation',
          background: '#93f756'
        })
      anime.timeline({
        targets: '.input-english-percentage',
        value: [0, 90],
        round: 1,
        easing: 'easeInOutQuad',
        duration: 3000
      })
        .add({
          targets: '.input-english-percentage',
          color: '#4e5060'
        })
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