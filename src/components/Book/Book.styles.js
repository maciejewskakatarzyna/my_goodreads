import styled from 'styled-components';

export const StyledGridBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & .bookWrapper {
    width: 150px;
    height: 200px;
    text-decoration: none;
    box-shadow: ${({ theme }) => theme.color.lightGrey} 5px 5px 5px;

    & img {
      width: 150px;
      height: 200px;
      filter: brightness(65%);

      &:hover {
        filter: brightness(90%);
      }
    }

    .hasCover {
      border-radius: 3px;
      position: relative;
    }

    .noCover {
      width: 150px;
      height: 200px;
      border-radius: 3px;
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
      bottom: 30px;
      left: 10px;
      color: ${({ theme }) => theme.color.beige};
      font-size: ${({ theme }) => theme.font.size.l};
    }

    & p:last-of-type {
      position: absolute;
      bottom: 10px;
      left: 10px;
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
  height: 40px;
  width: 960px;
  padding: 0px 10px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.lightGrey};
  }

  & .bookWrapper {
    padding: 0px 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.darkBrown};

    &:hover {
      font-weight: bold;
    }
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: ${props => props.isVisible};
`;
