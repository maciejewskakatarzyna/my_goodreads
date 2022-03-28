import styled from 'styled-components';

export const StyledLoginMenu = styled.div`
  display: flex;

  & p {
    margin-right: 30px;
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
