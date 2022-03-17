import styled from 'styled-components';

export const DeleteButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  bottom: 5px;
  display: ${props => props.isVisible};
  background-color: transparent;
  cursor: pointer;
  border: none;
  svg {
    fill: ${({ isDark, theme }) => (isDark ? theme.color.darkBrown : theme.color.beige)};
    background-color: transparent;
  }
`;
