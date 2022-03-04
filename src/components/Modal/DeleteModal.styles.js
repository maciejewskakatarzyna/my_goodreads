import styled from 'styled-components';

export const DeleteQuestion = styled.p`
  font-size: 20px;
  & span {
    font-weight: bold;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  background-color: #817f75;
  color: #f9f7f4;

  &:hover {
    background-color: #2c2726;
  }
`;
