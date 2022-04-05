import styled from 'styled-components';

export const StyledGridBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .bookWrapper {
    width: 15rem;
    height: 20rem;
    text-decoration: none;
    box-shadow: ${({ theme }) => theme.color.lightGrey} 0.5rem 0.5rem 0.5rem;
    position: relative;

    img {
      width: 15rem;
      height: 20rem;
      filter: brightness(65%);

      &:hover {
        filter: brightness(90%);
      }
    }

    .hasCover {
      border-radius: 0.3rem;
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

    .infoWrapper {
      position: absolute;
      bottom: 0;
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 0 0 0.5rem 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.color.beige};
    }

    p:first-of-type {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    p:last-of-type {
      margin-top: 0.5rem;
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
  min-width: 30rem;

  ${({ theme }) => theme.mq.phone} {
    width: 30rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 75rem;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.color.lightGrey};
  }

  .bookWrapper {
    padding: 0 2rem 1rem 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.darkBrown};
    border-bottom: 0.2rem solid ${({ theme }) => theme.color.formBar};

    p:first-of-type {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    p:last-of-type {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    &:hover {
      font-weight: bold;
    }
  }
`;
