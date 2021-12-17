import styled from "styled-components";

export const StyledBookList = styled.ul`
  list-style: none;
  display: ${props => props.view ? 'flex' : 'grid'};
  flex-direction: column;
  grid-template-columns: repeat(5, 150px);
  gap: 30px;
  margin: 30px auto;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  & .listViewButtons {
  
    & button {
        border: none;
        background: none;
      
      &:disabled img {
        filter: opacity(0.5);
      }

      & img {
        width: 20px;
        height: 20px;
      }
    }
  }

 
`