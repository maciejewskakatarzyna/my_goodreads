import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QuoteAuthor, QuoteText, QuoteWrapper, StyledHeroImage } from './HeroImage.style';

const HeroImage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    })();
  }, []);

  return (
    <StyledHeroImage>
      <QuoteWrapper>
        <QuoteText>{quote.content}</QuoteText>
        <QuoteAuthor>{quote.author}</QuoteAuthor>
      </QuoteWrapper>
    </StyledHeroImage>
  );
};

export default HeroImage;
