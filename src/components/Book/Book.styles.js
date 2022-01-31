import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    color: #2c2726;

    & img {
      width: 150px;
      height: 200px;
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
      filter: brightness(60%);
      position: relative;
      color: #2c2726;

      &:hover {
        filter: brightness(80%);
      }
    }

    .noCover {
      width: 150px;
      height: 200px;
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
      filter: brightness(60%);
      position: relative;
      color: #2c2726;
      background-color: lightgrey;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: solid 2px red;
    }

    & p:first-of-type {
      position: absolute;
      bottom: 30px;
      left: 10px;
      color: white;
      font-size: 18px;
    }

    & p:last-of-type {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
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
