import styled from 'styled-components';

export const StyledLoginMenu = styled.div`
  display: flex;

  & p {
    margin-right: 3rem;
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
