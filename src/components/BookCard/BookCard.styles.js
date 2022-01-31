import styled from 'styled-components';

export const StyledBookCard = styled.div`
  width: 100%;
  padding: 20px 40px;
  margin: 20px auto;
  font-size: 18px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & img {
    width: 250px;
    height: 350px;
  }

  & .noCoverCard {
    width: 250px;
    height: 350px;
    background-color: lightgrey;
    box-shadow: #ccc 5px 5px 5px;
  }
`;
