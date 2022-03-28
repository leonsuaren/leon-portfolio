import React, { useEffect } from 'react';
import { paginationAnimation } from '../../global';
import anime from 'animejs';

import { Card } from '../../components/card';
import { ProjectsLayout, Columns } from './styled';

export const Projects = () => {

  useEffect(() => {
    paginationAnimation();
  }, []);

  const handleAnimationEnter = (element) => {
    anime({
      targets: `${element}`,
      scale: 1.05
    });
  }
  const handleAnimationLeave = (element) => {
    anime({
      targets: `${element}`,
      scale: 1
    });
  }

  return (
    <main className='animation page-animation'>
      <div className="container">
        <ProjectsLayout className="row">
          <Columns className="col">
            <Card
              className="pacman card"
              color='#6270ea'
              onMouseEnter={() => handleAnimationEnter('.pacman')}
              onMouseLeave={() => handleAnimationLeave('.pacman')}
              title='The PacMan'
              description='Create your own pacman and see how goes around the screen'
              languages='JavaScript, HTML, CSS'
              githubRef='https://github.com/leonsuaren/PacMen'
            >
              <img src='PacMan1.png' className="card-img-top " alt="..." />
            </Card>
          </Columns>
          <Columns className="col">
            <Card
              className="eyes card"
              color='#59c49a'
              onMouseEnter={() => handleAnimationEnter('.eyes')}
              onMouseLeave={() => handleAnimationLeave('.eyes')}
              title='The Eyes Follow You'
              description='See how the Eyes follow your cursor'
              languages='JavaScript, HTML, CSS'
              githubRef='https://github.com/leonsuaren/eyes'
            >
              <img src='eyes.png' className="card-img-top " alt="..." />
            </Card>
          </Columns>
          <Columns className="col">
            <Card 
            className="bus card" 
            color='#fee28b' 
            title='Real Time Bus Tracker' 
            description='Interactive Map that shows some bus stops in L.A' 
            languages='JavaScript, HTML, CSS' 
            onMouseEnter={() => handleAnimationEnter('.bus')} 
            onMouseLeave={() => handleAnimationLeave('.bus')}
            githubRef='https://github.com/leonsuaren/Real-Time-Bus-Tracker'>
              <img src='busstop.png' className="card-img-top " alt="..." />
            </Card>
          </Columns>
          <Columns className='col'>
            <Card 
            className="movies card" 
            color='#f74242' 
            title='Movies' 
            description='Find the movie you want with all the content you need' 
            languages='Full Stack Project With MERN and Bootstrap' 
            onMouseEnter={() => handleAnimationEnter('.movies')} 
            onMouseLeave={() => handleAnimationLeave('.movies')}
            githubRef='https://github.com/leonsuaren/moviesRepo'>
              <img src='movies-logo.png' className="card-img-top " alt="..." />
            </Card>
          </Columns>
        </ProjectsLayout>
      </div>
    </main>
  )
}