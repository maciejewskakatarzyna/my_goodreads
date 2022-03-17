import styled from 'styled-components';

export const StyledBookCard = styled.div`
  width: 100%;
  padding: 20px 40px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 450px;
    box-shadow: #ccc 5px 5px 5px;
  }

  .noCover {
    width: 350px;
    height: 450px;
    background-color: lightgrey;
    box-shadow: #ccc 5px 5px 5px;
  }
`;

export const StyledBookDetails = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledAuthor = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: 30px;
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
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  svg {
    width: 70px;
    height: 70px;
    fill: ${({ theme }) => theme.color.darkBrown};
    background-color: transparent;
    margin-right: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 30px;
  display: flex;

  button {
    margin: 0 10px;
  }
`;
