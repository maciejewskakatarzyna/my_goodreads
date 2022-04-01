import styled from 'styled-components';

export const StyledBookCard = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.phone} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.tablet}, ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }

  img,
  .noCover {
    box-shadow: #ccc 0.5rem 0.5rem 0.5rem;

    ${({ theme }) => theme.mq.phone} {
      width: 20rem;
      height: 30rem;
    }

    ${({ theme }) => theme.mq.desktop} {
      width: 35rem;
      height: 45rem;
    }
  }

  .noCover {
    background-color: lightgrey;
  }
`;

export const StyledBookDetails = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.phone} {
    margin: 3rem 0 0 0;

  ${({ theme }) => theme.mq.tablet}, ${({ theme }) => theme.mq.desktop} {
    margin-left: 5rem;  }
  
`;

export const StyledTitle = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

export const StyledAuthor = styled.p`
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.s};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;

export const StyledPublisher = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: 3rem;
`;

export const StyledGenre = styled.p`
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.s};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const StyledShelfName = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button {
    margin: 0 1rem;
  }
`;
