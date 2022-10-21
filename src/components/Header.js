import React from 'react';
import {
  Dots,
  ProfileImg,
  StyleHeader,
  TitleContainer
} from 'styledComponents/StyleHeader';
import { Wrapper } from 'styledComponents/Wrapper';
import profileImg from '../assets/profilbild.png';
import dots from '../assets/dots.svg';

const Header = () => {
  return (
    <StyleHeader>
      <Dots src={dots} alt="dots" />

      <Wrapper>
        <TitleContainer>
          <p>PORTFOLIO:AGNES AHLMAN</p>
          <h1>
            Frontend <br /> developer
          </h1>
        </TitleContainer>
        <ProfileImg src={profileImg} alt="profileImg" />
      </Wrapper>
    </StyleHeader>
  );
};

export default Header;
