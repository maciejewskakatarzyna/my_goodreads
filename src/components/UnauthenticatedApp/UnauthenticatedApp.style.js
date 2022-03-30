import styled from 'styled-components';

export const UnauthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem auto 0;

  ${({ theme }) => theme.mq.phone} {
    width: 30rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 75rem;
  }

  h1 {
    margin: 10rem 0 3rem 0;
  }

  h2 {
    margin-bottom: 10rem;
  }

  Form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${({ theme }) => theme.mq.phone} {
      width: 25rem;
    }

    ${({ theme }) => theme.mq.tablet} {
      width: 50rem;
    }

    ${({ theme }) => theme.mq.desktop} {
      width: 75rem;
    }
  }
`;
