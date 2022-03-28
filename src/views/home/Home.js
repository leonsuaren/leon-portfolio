import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { paginationAnimation } from '../../global';

import { LanguageContext } from '../../context';

import { ResumeButton } from '../../components/resume-button';
import { GitHubLink, YouTubelLink, LinkedInLink } from '../../components/link-button';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';

import { Title, SquareBrakets, FullStackTitle, BioText, LinkTo } from './styled';

const GmailPopper = () => {
  return (
    <div className='gmail-popper'>
      <span className='popper-text'>
        leonsua@gmail.com
     </span>
    </div>
  )
}

export const Home = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;
  const [showPopper, setShowPopper] = useState(false);

  const handlePopper = () => {
    setShowPopper(s => !s);
    setTimeout(() => {
      setShowPopper(false);
    }, 6000);
  };

  useEffect(() => {
    paginationAnimation();
  }, []);

  return (
    <main className='mainHomeContainer animation'>
      <div>
        <img className='grid-image' src='leonsuarezavatar.png' alt='Leon Suarez' />
      </div>
      <div className="p-3 pb-md-4 mx-auto text-center bio-grid">
        <div>
          <Title>{language.greet}</Title>
          <div>
            <SquareBrakets>[</SquareBrakets> <FullStackTitle> Full Stack Web Developer </FullStackTitle><SquareBrakets>]</SquareBrakets>
          </div>
        </div>
        <div>
          <BioText>I earned a degree in Information Technology and a Master's Degree in Entrepreneurial and Small Business Operations, and I thought that today is the perfect time to update my career and decided to start doing it by taking the Professional
          Certificate in Coding: Full Stack Developer with MERN on MIT xPro, Why? because I enjoy coding.
            </BioText>
          <BioText>
            Outside of work, I love swimming, running, and biking. Or, in other words, "Triathlons". Thriathons have taught me that the path can be difficult, but once you arrive, the reward is enormous.
            </BioText>
        </div>
        <div className='links-container'>
          <div>
            <button className="link-button-style gmail-link" onClick={handlePopper}><BsGoogle /></button>
            {showPopper && <GmailPopper />}
          </div>
          <GitHubLink href="https://github.com/leonsuaren" target='_blank' rel="noreferrer"><AiFillGithub /></GitHubLink>
          <LinkedInLink className="link-button-style linked-link" href='http://www.linkedin.com/in/leon-suarez' target='_blank' rel="noreferrer"><AiOutlineLinkedin /></LinkedInLink>
          <YouTubelLink className="link-button-style youtube-link" href='#' target='_blank' rel="noreferrer"><AiOutlineYoutube /></YouTubelLink>
        </div>
        <Link to='resume'>
          <ResumeButton>See my Resume</ResumeButton>
        </Link>
      </div>
    </main>
  )
}