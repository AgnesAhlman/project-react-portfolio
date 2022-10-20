import styled from 'styled-components';

export const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const Project = styled.div`
  background-color: rgb(198, 215, 207);
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-width: 327px;
  min-height: 300px;
  justify-content: center;
  position: relative;

  &:hover {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }
`;
