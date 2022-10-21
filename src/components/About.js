import React from 'react';
import { AboutMe, Dot, Line, LineDot } from 'styledComponents/LineDot';
import { Section } from 'styledComponents/Section';

const About = () => {
  return (
    <Section>
      <LineDot>
        <Line />
        <Dot />
      </LineDot>

      <AboutMe>
        I’m a former preschool teacher who is now a frontend developer student
        at Technigo. I’m solution-focused and a creative person who is excited
        to learn more about frontend development. I also have some experience
        with graphic design.
      </AboutMe>
    </Section>
  );
};

export default About;
