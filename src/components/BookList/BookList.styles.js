import styled from "styled-components";

export const StyledBookList = styled.ul`
  list-style: none;
  display: ${props => props.view ? 'flex' : 'grid'};
  flex-direction: column;
  grid-template-columns: repeat(5, 150px);
  gap: 30px;
  margin: 30px auto;
`