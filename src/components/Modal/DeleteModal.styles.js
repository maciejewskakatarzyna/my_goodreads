import styled from 'styled-components';

export const DeleteQuestion = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
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
  font-size: ${({ theme }) => theme.font.size.l};
  padding: 5px 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.lightBrown};
  color: ${({ theme }) => theme.color.beige};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBrown};
  }
`;
