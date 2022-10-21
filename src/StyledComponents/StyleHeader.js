import styled from 'styled-components';

export const StyleHeader = styled.header`
  background-color: rgb(198, 215, 207);
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleContainer = styled.div`
  margin-top: 40px;
  font-family: 'Roboto', sans-serif;
  color: black;

  h1 {
    font-size: 4em;
    line-height: 0.95em;
  }

  p {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 60%;
`;

export const Dots = styled.img`
  position: absolute;
  max-width: 490px;
`;
