import styled from "styled-components";

export const StyledBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
`