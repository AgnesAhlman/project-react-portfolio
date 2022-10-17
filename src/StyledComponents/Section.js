import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => (props.primary ? 'white' : '#f3f3f3')};
  padding: 50px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  padding: 10px;
  margin: 0 auto;
  background: rgb(243 177 74);
  color: white;
`;
