import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0.5rem;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.darkBrown};

  &.active {
    font-weight: bold;
  }

  ${({ theme }) => theme.mq.phone}, ${({ theme }) => theme.mq.tablet} {
    margin: 0 0.25rem;
    font-size: ${({ theme }) => theme.font.size.s};
  }

  ${({ theme }) => theme.mq.tablet}, ${({ theme }) => theme.mq.desktop} {
    margin: 0 1rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;
