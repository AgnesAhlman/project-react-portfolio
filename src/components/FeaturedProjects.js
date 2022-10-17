import React from 'react';
import { GridParent, Project } from 'StyledComponents/Grid';
import { Section, SectionTitle } from 'StyledComponents/Section';

const FeaturedProjects = () => {
  return (
    <Section>
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      <GridParent>
        <Project />
        <Project />
        <Project />
        <Project />
      </GridParent>
    </Section>
  );
};

export default FeaturedProjects;
