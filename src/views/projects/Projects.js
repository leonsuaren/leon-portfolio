import React, { useEffect, useContext } from 'react';
import { paginationAnimation } from '../../global';
import anime from 'animejs';

import { LanguageContext } from '../../context';

import { Card } from '../../components/card';
import { ProjectsLayout, Columns } from './styled';

export const Projects = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;

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
              title={language.projectsOverview[0].name}
              description={language.projectsOverview[0].description}
              languages={language.projectsOverview[0].languages}
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
              title={language.projectsOverview[1].name}
              description={language.projectsOverview[1].description}
              languages={language.projectsOverview[1].languages}
              githubRef='https://github.com/leonsuaren/eyes'
            >
              <img src='eyes.png' className="card-img-top " alt="..." />
            </Card>
          </Columns>
          <Columns className="col">
            <Card 
            className="bus card" 
            color='#fee28b' 
            title={language.projectsOverview[2].name}
            description={language.projectsOverview[2].description}
            languages={language.projectsOverview[2].languages} 
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
            title={language.projectsOverview[3].name} 
            description={language.projectsOverview[3].description}
            languages={language.projectsOverview[3].languages}
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