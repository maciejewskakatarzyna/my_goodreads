import styled from 'styled-components';

export const StyledRandomBook = styled.div`
  font-size: ${({ theme }) => theme.font.size.l};
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-weight: bold;
    margin: 10px 0px;
  }

  button {
    margin-top: 20px;
  }
`;
