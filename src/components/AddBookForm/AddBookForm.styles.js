import styled from 'styled-components';

export const StyledAddBookForm = styled.form`
  margin: 20px auto;
  font-size: ${({ theme }) => theme.font.size.l}
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ theme }) => theme.color.formBar} 1px solid;
  padding: 60px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  position: relative;
`;
