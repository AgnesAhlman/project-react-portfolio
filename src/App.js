import { Header, Title } from 'StyledComponents/Header';
import React, { useEffect, useState } from 'react';
import Tech from 'components/Tech';
import FeaturedProjects from 'components/FeaturedProjects';
import About from 'components/About';
import Skills from 'components/Skills';

export const App = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/AgnesAhlman/repos')
      .then((res) => res.json())
      .then((json) => {
        setRepos(json);
      });
  }, []);
  console.log(repos);
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
