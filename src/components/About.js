import React from 'react';
import { AboutMe, Dot, Line, LineDot } from 'styledComponents/LineDot';
import { Section } from 'styledComponents/Section';
import { SectionWrapper } from 'styledComponents/Wrapper';

const About = () => {
  return (
    <Section>
      <SectionWrapper>
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
      </SectionWrapper>
    </Section>
  );
};

export default About;
