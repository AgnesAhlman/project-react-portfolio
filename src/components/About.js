import React from 'react';
import { Section } from 'StyledComponents/Section';

const About = () => {
  return (
    <Section>
      <div className="line-dot">
        <span className="line" />
        <span className="dot" />
      </div>
      <p className="about-me">
        I’m a former preschool teacher who is now a frontend developer student
        at Technigo. I’m solution-focused and a creative person who is excited
        to learn more about frontend development. I also have some experience
        with graphic design.
      </p>
    </Section>
  );
};

export default About;
