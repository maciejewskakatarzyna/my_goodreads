import React from 'react';
import {
  ArrowButton,
  CitationAuthor,
  CitationText,
  CitationWrapper,
  StyledHeroImage,
} from './HeroImage.style';

const HeroImage = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <StyledHeroImage>
      <CitationWrapper>
        <CitationText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </CitationText>
        <CitationAuthor>Adam Kowalski</CitationAuthor>
        <ArrowButton onClick={handleScrollDown}>
          <i className='arrowDown' />
        </ArrowButton>
      </CitationWrapper>
    </StyledHeroImage>
  );
};

export default HeroImage;
