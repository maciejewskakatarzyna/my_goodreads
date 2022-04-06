import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QuoteAuthor, QuoteText, QuoteWrapper, StyledHeroImage } from './HeroImage.style';

const HeroImage = () => {
  const [quote, setQuote] = useState('');
  const [isError, setIsError] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await axios.get('https://api.quotable.io/random');
          setQuote(response.data);
        } catch (e) {
          setIsError(true);
        }
      })();
    }
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  });

  return (
    <StyledHeroImage>
      <QuoteWrapper>
        {!isError ? (
          <>
            <QuoteText data-testid='quoteText'>{quote.content}</QuoteText>
            <QuoteAuthor data-testid='quoteAuthor'>{quote.author}</QuoteAuthor>
          </>
        ) : null}
      </QuoteWrapper>
    </StyledHeroImage>
  );
};

export default HeroImage;
