import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  line-height: 50px;
  padding: 0 30px;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.color.darkBrown};
  z-index: 2;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.darkBrown};

    &:hover {
      font-weight: bold;
    }
  }

  .logo {
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.xl};
    font-style: italic;
  }
`;
