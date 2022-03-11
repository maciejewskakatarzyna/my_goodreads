import styled from 'styled-components';
import hero from '../../assets/images/hero.jpeg';

export const StyledHeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero});
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 50px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

export const QuoteText = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: lighter;
  font-style: italic;
`;

export const QuoteAuthor = styled.p`
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: lighter;
  align-self: flex-end;
`;
