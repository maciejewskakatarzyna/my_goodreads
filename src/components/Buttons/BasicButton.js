import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.color.formBar};
  background-color: ${({ theme }) => theme.color.beige};
  color: ${({ theme }) => theme.color.darkBrown};
  margin-top: ${({ isError }) => (isError ? '20px' : 'initial')};
  cursor: pointer;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.s};
    padding: 0.5rem 1rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
    padding: 1rem 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBrown};
    color: ${({ theme }) => theme.color.beige};
    border: 1px solid ${({ theme }) => theme.color.darkBrown};
  }
`;

const BasicButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default BasicButton;
