import React, { useState, useContext } from 'react';
import { ToggleWrapper, Notch, Toggle, Span, Img } from './styled';
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
        <Img src={isActive ? 'mex-flag.jpeg' : 'usa-flag.jpg'}/>
      </Notch>
      </Toggle>
      <Span className='me-3 py-2'>Sp</Span>
    </ToggleWrapper>
  )
}