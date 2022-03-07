import styled from 'styled-components';

export const StyledBookList = styled.ul`
  list-style: none;
  display: ${props => (props.view ? 'flex' : 'grid')};
  flex-direction: column;
  grid-template-columns: repeat(5, 150px);
  gap: 30px;
  margin: 30px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    line-height: 28px;
  }
`;
