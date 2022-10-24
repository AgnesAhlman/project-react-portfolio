import React from 'react';
import {
  Dots,
  ProfileImg,
  StyleHeader,
  TitleContainer
} from 'styledComponents/StyleHeader';
import { Wrapper } from 'styledComponents/Wrapper';
import { Icon, IconContainer } from 'styledComponents/Icons';
import profileImg from '../assets/profilbild.png';
import dots from '../assets/dots.svg';
import githubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linked.png';
import instagramIcon from '../assets/insta.png';

const Header = () => {
  return (
    <StyleHeader>
      <Dots src={dots} alt="dots" />
      <Wrapper>
        <IconContainer>
          <a
            href="https://github.com/AgnesAhlman"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={githubIcon} alt="Icon1" />
          </a>
          <a
            href="https://www.linkedin.com/in/agnes-ahlman-1b2018251/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={linkedInIcon} alt="Icon2" />
          </a>
          <a
            href="https://www.instagram.com/artbyahlman/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={instagramIcon} alt="Icon3" />
          </a>
        </IconContainer>

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
