import styled from 'styled-components';
import hero from '../../assets/hero.jpeg';

export const StyledHeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: relative;
`;

export const QuoteWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteText = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: lighter;
  font-style: italic;
`;

export const QuoteAuthor = styled.p`
  margin-bottom: 50px;
  text-align: right;
  font-size: 24px;
  font-weight: lighter;
  font-style: italic;
  align-self: flex-end;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;

  & i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
  }
`;
