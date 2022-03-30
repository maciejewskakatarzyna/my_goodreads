import React from 'react';
import styled from 'styled-components';

const GridListBtn = styled.button`
  --color: ${({ theme }) => theme.color.darkBrown};
  --background: ${({ theme }) => theme.color.beige};
  --icon-color: ${({ theme }) => theme.color.darkBrown};
  padding: 0.6rem 1.2rem 0.6rem 0.8rem;
  margin: 0;
  display: flex;
  outline: none;
  position: relative;
  border: none;
  border-radius: 0.9rem;
  background: var(--b, var(--background));
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
  i {
    position: absolute;
    left: var(--left, 0.4rem);
    top: var(--top, 0.4rem);
    display: block;
    width: var(--width, 0.6rem);
    height: var(--height, 0.6rem);
    background: var(--icon-color);
  }
`;

const Dots = styled.div`
  i {
    &:nth-child(1) {
    }
    &:nth-child(2) {
      --left: 1.3rem;
    }
    &:nth-child(3) {
      --top: 1.3rem;
    }
    &:nth-child(4) {
      --left: 1.3rem;
      --top: 1.3rem;
    }
  }
`;

const Lines = styled.div`
  --name: var(--lines-name, none);
  i {
    --left: 0.4rem;
    --top: 0.3rem;
    --height: 0.2rem;
    --width: 1.5rem;
    &:nth-child(2) {
      --top: 0.8rem;
    }
    &:nth-child(3) {
      --top: 1.3rem;
    }
    &:nth-child(4) {
      --top: 1.8rem;
    }
  }
`;

const Text = styled.div`
  margin-left: 0.4rem;
  position: relative;
  line-height: 2.4rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.m};
  min-width: 2.8rem;
  color: var(--color);
  span {
    display: block;
    &:last-child {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const GridListToggleButton = ({ isList, onClick }) => {
  return (
    <GridListBtn onClick={onClick}>
      <IconWrapper>
        {!isList ? (
          <Lines>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </Lines>
        ) : (
          <Dots>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </Dots>
        )}
      </IconWrapper>
      <Text>{!isList ? <span>List</span> : <span>Grid</span>}</Text>
    </GridListBtn>
  );
};

export default GridListToggleButton;
