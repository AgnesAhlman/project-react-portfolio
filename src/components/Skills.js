import React from 'react';
import { Section, SectionTitle } from 'styledComponents/Section';
import { SectionWrapper } from 'styledComponents/Wrapper';

const Skills = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>SKILLS</SectionTitle>
        <div className="skills-container">
          <ul className="colum">
            <li className="skill-list-title">CODE</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
          </ul>

          <ul className="colum">
            <li className="skill-list-title">UPCOMING</li>
            <li>Redux</li>
            <li>Node.js</li>
          </ul>

          <ul className="colum">
            <li className="skill-list-title">TOOLBOX</li>
            <li>Adobe Photoshop</li>
            <li>Slack</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Github</li>
          </ul>
        </div>
      </SectionWrapper>
    </Section>
  );
};

export default Skills;
