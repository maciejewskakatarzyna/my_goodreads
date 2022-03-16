import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  font-size: 20px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.color.darkBrown};
  background-color: ${({ theme }) => theme.color.beige};
  color: ${({ theme }) => theme.color.darkBrown};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBrown};
    color: ${({ theme }) => theme.color.beige};
  }
`;

const BasicButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default BasicButton;
