import { Header, Title } from 'components/Header';
import React from 'react';
import Tech from 'components/Tech';
import FeaturedProjects from 'components/FeaturedProjects';
import About from 'components/About';
import Skills from 'components/Skills';

export const App = () => {
  return (
    <div>
      <Header>
        <Title> Portfolio:AGNES AHLMAN</Title>
      </Header>
      <About />
      <Tech />
      <FeaturedProjects />
      <Skills />
    </div>
  );
};
