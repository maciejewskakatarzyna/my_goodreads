import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: grid;
  justify-items: center;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  line-height: 50px;
  padding: 0 25px;
  color: ${({ theme }) => theme.color.darkBrown};
  z-index: 2;
  
  ${({ theme }) => theme.mq.phone}, ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 4fr 2fr 1fr 1fr;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 2fr 5fr 2fr 1fr 3fr;
  }
  }

  .logo {
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.color.darkBrown};
    text-decoration: none;
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
`;
