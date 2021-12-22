import styled from "styled-components";

export const StyledBookCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 60vw;
  height: 60vh;
  padding: 20px 40px;
  margin: 20px auto;
  font-size: 18px;
  border: #DCD6CC 1px solid;
  border-radius: 5px;
  background-color: #F4F1EA;
  box-shadow:  0 1px 2px rgba(0,0,0,0.15);
  position: relative;
  
  & img {
    width: 250px;
    height: 350px;
  }

  & .noCoverCard {
    width: 250px;
    height: 350px;
    background-color: lightgrey;
    box-shadow: #ccc 5px 5px 5px;
  }
  
  & .prevBtn {
    position: absolute;
    left: 10px;
    top: 50%;
  }

  & .nextBtn {
    position: absolute;
    right: 10px;
    top: 50%;
  }
`