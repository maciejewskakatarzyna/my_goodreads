import styled from 'styled-components';

export const StyledRandomBook = styled.div`
  font-size: ${({ theme }) => theme.font.size.l};
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
