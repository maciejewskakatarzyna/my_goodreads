import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
  --b: 3px;
  --c: #000 90deg, #f9f7f4 0;
  width: 20px;
  aspect-ratio: 1/1;
  background: conic-gradient(from 90deg at var(--b) var(--b), var(--c)) calc(100% + var(--b) / 2)
    calc(100% + var(--b) / 2) / calc(50% + var(--b)) calc(50% + var(--b));
  border: 4px solid #2c2726;
  border-radius: 50%;
  transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default CloseButton;
