import React from 'react';
import { GridParent, Project } from 'styledComponents/Grid';
import { Section, SectionTitle } from 'styledComponents/Section';
import { Tags, TagsContainer } from 'styledComponents/Tags';
import { SectionWrapper } from 'styledComponents/Wrapper';
import chatbot from '../assets/chatbot.png';
import gameIcon from '../assets/game.png';

const FeaturedProjects = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>FEATURED PROJECTS</SectionTitle>

        <GridParent>
          <div>
            <Project image="chatbot1.png" />
            <h3> Movies</h3>
            <TagsContainer>
              <Tags>HTML5</Tags>
              <Tags>CSS3</Tags>
              <Tags>JavaScript ES6</Tags>
              <Tags>React</Tags>
            </TagsContainer>
          </div>
          <div>
            <Project image="game1.png">
              <img className="icon" src={chatbot} alt="chatboticon" />
            </Project>
            <h3> Chatbot</h3>
            <TagsContainer>
              <Tags>HTML5</Tags>
              <Tags>CSS3</Tags>
              <Tags>JavaScript ES6</Tags>
            </TagsContainer>
          </div>
          <div>
            <Project />
            <h3> Lord of the Rings</h3>
            <TagsContainer>
              <Tags>HTML5</Tags>
              <Tags>CSS3</Tags>
              <Tags>JavaScript ES6</Tags>
              <Tags>React</Tags>
            </TagsContainer>
          </div>
          <div>
            <Project>
              <img className="gameIcon" src={gameIcon} alt="gameIcon" />
            </Project>
            <h3> Guess Who</h3>
            <TagsContainer>
              <Tags>HTML5</Tags>
              <Tags>CSS3</Tags>
              <Tags>JavaScript ES6</Tags>
            </TagsContainer>
          </div>
        </GridParent>
      </SectionWrapper>
    </Section>
  );
};

export default FeaturedProjects;
