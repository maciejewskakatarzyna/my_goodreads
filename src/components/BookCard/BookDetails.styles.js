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

  & button {
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 10px;
    border: none;
    background-color: #817f75;
    color: #f9f7f4;

    &:hover {
      background-color: #2c2726;
    }
  }
`;
