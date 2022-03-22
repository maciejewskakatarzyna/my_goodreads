import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QuoteAuthor, QuoteText, QuoteWrapper, StyledHeroImage } from './HeroImage.style';

const HeroImage = () => {
  const [quote, setQuote] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data);
      } catch (e) {
        setIsError(true);
      }
    })();
  }, []);

  return (
    <StyledHeroImage>
      <QuoteWrapper>
        {!isError ? (
          <>
            <QuoteText>{quote.content}</QuoteText>
            <QuoteAuthor>{quote.author}</QuoteAuthor>
          </>
        ) : null}
      </QuoteWrapper>
    </StyledHeroImage>
  );
};

export default HeroImage;
