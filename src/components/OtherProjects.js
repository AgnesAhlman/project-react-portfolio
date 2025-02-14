import React from 'react';
import { Section, SectionTitle } from 'styledComponents/Section';
import { SectionWrapper } from 'styledComponents/Wrapper';

const OtherProjects = (props) => {
  const idsToFilterOut = [530348858, 548878582, 530192992, 541479613];

  console.log(props.repos);
  const showProjects = props.repos.filter((repo) => {
    return !idsToFilterOut.includes(repo.id);
  });

  console.log('hej', showProjects);

  return (
    <Section primary>
      <SectionWrapper>
        <SectionTitle> OTHER PROJECTS </SectionTitle>
        {showProjects.map((project) => (
          <div key={project.id}>{project.full_name}</div>
        ))}
      </SectionWrapper>
    </Section>
  );
};

export default OtherProjects;
