import styled from 'styled-components';

const UserSignOutButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 5rem;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.darkBrown};
  }
`;

export default UserSignOutButton;
