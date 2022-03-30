import styled from 'styled-components';

export const DeleteButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  right: 0.5rem;
  bottom: 0.5rem;
  display: ${props => props.isVisible};
  background-color: transparent;
  cursor: pointer;
  border: none;
  svg {
    fill: ${({ isDark, theme }) => (isDark ? theme.color.darkBrown : theme.color.beige)};
    background-color: transparent;
  }
`;
