import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  border: ${({ theme }) => theme.color.formBar} 1px solid;
  color: #333;
  height: 32px;
  padding: 4px 26px 4px 8px;
  resize: none;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.m};
`;
