import styled, { keyframes } from 'styled-components';

const moveLabelToTop = keyframes`
  0% {
    display: none;
    opacity: 0;
    top: 3px;
    left: 0;
    font-size: ${({ theme }) => theme.font.size.m};
  }
  100% {
    display: block;
    opacity: 1;
    top: -22px;
    left: 0;
    font-size: ${({ theme }) => theme.font.size.s};
  }`;

export const Wrapper = styled.div`
  width: 50%;
  margin: 50px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const FormItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`;
export const FormItemBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.color.formBar};
  transition: 0.1s all;
`;

export const Label = styled.label`
  top: 3px;
  left: 0;
  opacity: 0;
  color: ${({ theme }) => theme.color.grey};
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.font.size.m};
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  &:focus {
    outline: none;

    ::placeholder {
      opacity: 0;
    }
  }

  &:focus + ${Label} {
    animation: ${moveLabelToTop} 0.3s forwards;
  }

  &:not(:placeholder-shown) + ${Label} {
    animation: ${moveLabelToTop} 0.3s forwards;
  }

  &:focus ~ ${FormItemBar} {
    background: ${({ theme }) => theme.color.darkBrown};
  }
`;
