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
`;

export const ShelfName = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: bold;
`;
