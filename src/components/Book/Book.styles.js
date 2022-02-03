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

    & img {
      width: 150px;
      height: 200px;
      filter: brightness(65%);

      &:hover {
        filter: brightness(90%);
      }
    }

    .hasCover {
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
      position: relative;
    }

    .noCover {
      width: 150px;
      height: 200px;
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
      position: relative;
      background-color: lightgrey;
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
      color: #f9f7f4;
      font-size: 18px;
    }

    & p:last-of-type {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #f9f7f4;
      font-size: 12px;
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
    background-color: lightgrey;
  }

  & .bookWrapper {
    padding: 0px 10px;
    text-decoration: none;
    color: #2c2726;

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
