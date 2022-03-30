import styled from 'styled-components';

const UserSignOutButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 5rem;
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.color.darkBrown};
  }
`;

export default UserSignOutButton;
