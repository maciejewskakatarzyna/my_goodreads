import styled from 'styled-components';

export const DeleteQuestion = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  & span {
    font-weight: bold;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  width: 185px;
  display: flex;
  justify-content: space-between;
`;
