import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ArrowButton,
  QuoteAuthor,
  QuoteText,
  QuoteWrapper,
  StyledHeroImage,
} from './HeroImage.style';

const HeroImage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    })();
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <StyledHeroImage>
      <QuoteWrapper>
        <QuoteText>{quote.content}</QuoteText>
        <QuoteAuthor>{quote.author}</QuoteAuthor>
        <ArrowButton onClick={handleScrollDown}>
          <i className='arrowDown' />
        </ArrowButton>
      </QuoteWrapper>
    </StyledHeroImage>
  );
};

export default HeroImage;
