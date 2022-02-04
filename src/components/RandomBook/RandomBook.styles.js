import styled from 'styled-components';

export const StyledRandomBook = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 60px 90px;

  position: relative;

  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .randomBook {
    font-weight: bold;
    margin: 10px 0px;
  }
`;
