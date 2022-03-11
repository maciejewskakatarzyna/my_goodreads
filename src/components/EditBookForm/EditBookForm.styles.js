import styled from 'styled-components';

export const StyledEditBookForm = styled.form`
  width: 100%;
  margin: 20px auto;
  font-size: ${({ theme }) => theme.font.size.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;
