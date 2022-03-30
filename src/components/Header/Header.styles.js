import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  min-width: 48rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledHeader = styled.div`
  display: grid;
  justify-items: center;
  background-color: ${({ theme }) => theme.color.beige};
  height: 50px;
  position: fixed;
  top: 0;
  line-height: 50px;
  padding: 0 25px;
  color: ${({ theme }) => theme.color.darkBrown};
  z-index: 2;

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  }
  
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    grid-template-columns: 1fr 3fr 2fr 0.5fr 0.5fr;
  }

  ${({ theme }) => theme.mq.desktop} {
  width: 90%;
    grid-template-columns: 2fr 4fr 1fr 0.5fr 3fr;
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 75%;
    grid-template-columns: 3fr 5fr 1fr 0.5fr 3fr;
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

    ${({ theme }) => theme.mq.tablet},  ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    ${({ theme }) => theme.mq.bigDesktop} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
`;
