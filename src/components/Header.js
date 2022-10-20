import React from 'react';
import { ProfileImg, StyleHeader } from 'StyledComponents/StyleHeader';
import { Wrapper } from 'StyledComponents/Wrapper';
import profileImg from '../assets/profilbild.png';

const Header = () => {
  return (
    <StyleHeader>
      <Wrapper>
        <ProfileImg src={profileImg} alt="profileImg" />
      </Wrapper>
    </StyleHeader>
  );
};

export default Header;
