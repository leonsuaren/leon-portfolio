import React from 'react';

export const ContactAvatar = ({ title, content, children }) => {
  return (
    <div className='avatarWrapper'>
      <div className='contactAvatarCircle'>
        <div className='contactAvatar'>
          {children}
        </div>
      </div>
      <h3>{title}</h3>
      <h3>{content}</h3>
    </div>
  )
}