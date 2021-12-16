import styled from "styled-components";

export const StyledBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & .bookWrapper {
    position: relative;
    width: ${props => props.view ? '100%' : '150px'};
    height: ${props => props.view ? '50px' : '200px'};
    
    & button {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
    

    & img {
      width: ${props => props.view ? '100%' : '150px'};
      height: ${props => props.view ? '50px' : '200px'};
      box-shadow: #ccc 5px 5px 5px;
      border-radius: 3px;
    }

    & .noCover {
      width: ${props => props.view ? '100%' : '150px'};
      height: ${props => props.view ? '50px' : '200px'};
      background-color: lightgrey;
      box-shadow: #ccc 5px 5px 5px;
      color: darkgrey;
      text-align: ${props => props.view ? '' : 'center'};
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 3px;
    }
  }
  
 

`