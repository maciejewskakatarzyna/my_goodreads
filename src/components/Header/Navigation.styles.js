import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 30px;
  &.active {
    font-weight: bold;
  }
`;
