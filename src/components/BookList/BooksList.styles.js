import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem auto;
`;

export const StyledBooksList = styled.ul`
  max-width: 97rem;
  margin: 1rem auto;
  list-style: none;
  display: ${props => (props.view ? 'flex' : 'grid')};
  flex-direction: column;
  grid-gap: 3rem;

  ${({ theme }) => theme.mq.phone} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShelfName = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: bold;
`;
