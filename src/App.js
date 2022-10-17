import { Header, Title } from 'components/Header';
import React from 'react';
import Tech from 'components/Tech';
import FeaturedProjects from 'components/FeaturedProjects';
import About from 'components/About';

export const App = () => {
  return (
    <div>
      <Header>
        <Title> Portfolio:AGNES AHLMAN</Title>
      </Header>
      <About />
      <Tech />
      <FeaturedProjects />
    </div>
  );
};
