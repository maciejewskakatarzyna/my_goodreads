import styled from 'styled-components';

export const DeleteQuestion = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  & span {
    font-weight: bold;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 3rem;
  width: 18rem;
  display: flex;
  justify-content: space-between;
`;
