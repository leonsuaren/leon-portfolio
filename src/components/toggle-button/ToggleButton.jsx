import React, { useState, useContext } from 'react';
import { ToggleWrapper, Notch, Toggle, Span } from './styled';
import { LanguageContext } from '../../context';

export const ToggleButton = () => {
  const languageContext = useContext(LanguageContext);
  const setSwithLanguage = languageContext.setSwithLanguage;
  const [isActive, setIsActive] = useState(false);

  const onSwitch = () => {
    setIsActive(s => !s)
    setSwithLanguage(s => !s);
  }

  return (
    <ToggleWrapper>
      <Span className='me-3 py-2'>En</Span>
      <Toggle onClick={onSwitch}>
      <Notch  isActive={isActive}>
        <img src={isActive ? 'usa-flag.jpg' : 'mex-flag.jpeg'}/>
      </Notch>
      </Toggle>
      <Span className='me-3 py-2'>Sp</Span>
    </ToggleWrapper>
  )
}