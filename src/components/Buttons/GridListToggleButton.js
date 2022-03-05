import React from 'react';
import styled from 'styled-components';

const GridListBtn = styled.button`
  --color: #f9f7f4;
  --background: #2c2726;
  --icon-color: #f9f7f4;
  padding: 6px 12px 6px 8px;
  margin: 0;
  display: flex;
  outline: none;
  position: relative;
  border: none;
  border-radius: 9px;
  background: var(--b, var(--background));
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  i {
    position: absolute;
    left: var(--left, 4px);
    top: var(--top, 4px);
    display: block;
    width: var(--width, 6px);
    height: var(--height, 6px);
    background: var(--icon-color);
  }
`;

const Dots = styled.div`
  i {
    &:nth-child(1) {
    }
    &:nth-child(2) {
      --left: 13px;
    }
    &:nth-child(3) {
      --top: 13px;
    }
    &:nth-child(4) {
      --left: 13px;
      --top: 13px;
    }
  }
`;

const Lines = styled.div`
  --name: var(--lines-name, none);
  i {
    --left: 4px;
    --top: 3px;
    --height: 2px;
    --width: 15px;
    &:nth-child(2) {
      --top: 8px;
    }
    &:nth-child(3) {
      --top: 13px;
    }
    &:nth-child(4) {
      --top: 18px;
    }
  }
`;

const Text = styled.div`
  margin-left: 4px;
  position: relative;
  line-height: 24px;
  font-weight: 600;
  font-size: 14px;
  min-width: 28px;
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
