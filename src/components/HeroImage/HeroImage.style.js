import styled from 'styled-components';
import hero from '../../assets/images/hero.jpeg';

export const StyledHeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero});
  height: 30rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.charm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  padding: 1rem;
  line-height: 230%;
`;

export const QuoteText = styled.p`
  margin-bottom: 3rem;
  text-align: center;
  font-style: italic;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

export const QuoteAuthor = styled.p`
  text-align: right;
  align-self: flex-end;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
