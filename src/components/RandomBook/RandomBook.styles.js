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
    margin: 1rem 0;
  }

  button {
    margin-top: 2rem;
  }
`;
