import styled from 'styled-components';

export const GridParent = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 50px;
  flex-direction: column;

  @media (min-width: 667px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const Project = styled.div`
  background-color: rgb(198, 215, 207);
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;
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
