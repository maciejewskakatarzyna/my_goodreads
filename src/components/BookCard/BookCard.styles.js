import styled from 'styled-components';

export const StyledBookCard = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  .noCover {
    width: 35rem;
    height: 45rem;
    box-shadow: #ccc 0.5rem 0.5rem 0.5rem;
  }

  .noCover {
    background-color: lightgrey;
  }
`;

export const StyledBookDetails = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const StyledAuthor = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: 3rem;
`;

export const StyledPublisher = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: 30px;
`;

export const StyledGenre = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  margin-bottom: 30px;
`;

export const StyledShelfName = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button {
    margin: 0 10px;
  }
`;
