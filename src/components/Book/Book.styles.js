import styled from 'styled-components';

export const StyledGridBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & .bookWrapper {
    width: 15rem;
    height: 20rem;
    text-decoration: none;
    box-shadow: ${({ theme }) => theme.color.lightGrey} 0.5rem 0.5rem 0.5rem;

    & img {
      width: 15rem;
      height: 20rem;
      filter: brightness(65%);

      &:hover {
        filter: brightness(90%);
      }
    }

    .hasCover {
      border-radius: 0.3rem;
      position: relative;
    }

    .noCover {
      width: 15rem;
      height: 20rem;
      border-radius: 0.3rem;
      position: relative;
      background-color: ${({ theme }) => theme.color.lightGrey};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      filter: brightness(65%);

      &:hover {
        filter: brightness(90%);
      }
    }

    & p:first-of-type {
      position: absolute;
      bottom: 3rem;
      left: 1rem;
      color: ${({ theme }) => theme.color.beige};
      font-size: ${({ theme }) => theme.font.size.l};
    }

    & p:last-of-type {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      color: ${({ theme }) => theme.color.beige};
      font-size: ${({ theme }) => theme.font.size.s};
    }
  }
`;
export const StyledListBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 4rem;
  width: 74rem;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.color.lightGrey};
  }

  & .bookWrapper {
    padding: 0 2rem 1rem 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.darkBrown};
    border-bottom: 0.2rem solid ${({ theme }) => theme.color.formBar};

    & p:first-of-type {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    & p:last-of-type {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    &:hover {
      font-weight: bold;
    }
  }
`;
