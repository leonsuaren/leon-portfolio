import React, {useEffect, useContext} from 'react';
import anime from 'animejs';
import { paginationAnimation } from '../../global';
import { Title, SquareBrakets, FullStackTitle, ContactLayout, Mail } from './styled';
import { ContactCard } from '../../components/card';

import { LanguageContext } from '../../context';

export const Contact = () => {
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
    <div className="container page-animation animation">
      <div className="p-3 pb-md-4 mx-auto text-center contactSlogan">
        <div>
          <Title>{language.contactTitle}</Title>
          <div>
            <SquareBrakets>[</SquareBrakets> <FullStackTitle> {language.contactSlogan} </FullStackTitle><SquareBrakets>]</SquareBrakets>
          </div>
        </div>
      </div>
      <ContactLayout>
        <ContactCard onMouseEnter={() => handleAnimationEnter('.email')} onMouseLeave={() => handleAnimationLeave('.email')} className="card email" color='#6270ea' image='gmail.png'>leonsua@gmail.com</ContactCard>
        <ContactCard onMouseEnter={() => handleAnimationEnter('.phone')} onMouseLeave={() => handleAnimationLeave('.phone')} className="card phone" color='#59c49a' image='phone.png'>(937) - 424 6188</ContactCard>
        <ContactCard onMouseEnter={() => handleAnimationEnter('.linked-in')} onMouseLeave={() => handleAnimationLeave('.linked-in')} className="card linked-in" color='#fee28b' image='linkedin.png'>
        <a href='#'>LinkedIn</a>
        </ContactCard>
        <ContactCard onMouseEnter={() => handleAnimationEnter('.facebook')} onMouseLeave={() => handleAnimationLeave('.facebook')} className="card facebook" color='#f74242' image='facebook.png'>
        <a href='#'>Facebook</a>
        </ContactCard>
      </ContactLayout>
    </div>
  )
}