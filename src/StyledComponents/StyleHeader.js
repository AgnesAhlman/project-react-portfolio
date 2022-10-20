import styled from 'styled-components';

export const StyleHeader = styled.header`
  background-color: rgb(198, 215, 207);
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-family: 'Roboto', sans-serif;
  color: black;
`;

export const ProfileImg = styled.img`
  position: absolute;
  max-width: 200px px;
  bottom: 0;
  right: 0;
  max-height: 60%;
`;
