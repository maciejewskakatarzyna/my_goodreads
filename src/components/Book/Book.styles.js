import styled from "styled-components";

export const StyledGridBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & .bookWrapper {
    position: relative;
    width: 150px;
    height: 200px;
    
    & button {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }

    & img {
      width: 150px;
      height: 200px;
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
    }

    & .noCover {
      width: 150px;
      height: 200px;
      background-color: lightgrey;
      box-shadow: #ccc 5px 5px 5px;
      color: darkgrey;
      text-align: center;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 3px;
    }
  }
`
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
  
  & button {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
  
  & .bookWrapper {
    padding: 0px 10px;
  }

`
