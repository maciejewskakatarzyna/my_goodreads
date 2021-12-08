import styled from "styled-components";

export const StyledRandomBook = styled.div`
  margin: 20px auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #DCD6CC 1px solid;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #F4F1EA;
  box-shadow:  0 1px 2px rgba(0,0,0,0.15);
  position: relative;
  
  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  & .randomBook {
    font-weight: bold;
    margin: 10px 0px;
  }
`