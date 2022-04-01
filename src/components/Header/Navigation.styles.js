import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ShelfButton } from '../Buttons/ShelfButton';

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

export const MobileShelfButton = styled(ShelfButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  svg {
    height: 5rem;
    margin: 0;
    path {
      stroke: ${({ theme }) => theme.color.darkBrown};
      stroke-width: 0.3rem;
    }
  }
`;

export const ShelfsList = styled.ul`
  width: 15rem;
  position: absolute;
  top: 5rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: ${({ theme }) => theme.color.beige};
`;

export const ShelfLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: 1rem;

  &:hover {
    font-weight: bold;
  }
`;
