import React, { useEffect, useState } from 'react';
import Tech from 'components/Tech';
import FeaturedProjects from 'components/FeaturedProjects';
import About from 'components/About';
import Skills from 'components/Skills';
import OtherProjects from 'components/OtherProjects';
import Header from 'components/Header';

export const App = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/AgnesAhlman/repos')
      .then((res) => res.json())
      .then((json) => {
        setRepos(json);
      });
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Tech />
      <FeaturedProjects />
      <OtherProjects repos={repos} />
      <Skills />
    </div>
  );
};
