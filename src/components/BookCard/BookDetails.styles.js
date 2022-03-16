import styled from 'styled-components';

export const StyledBookDetails = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;

  button {
    margin: 0 10px;
  }
`;
