import styled, { keyframes } from 'styled-components';

const moveLabelToTop = keyframes`
  0% {
    display: none;
    opacity: 0;
    top: 3px;
    left: 0;
    font-size: 16px;
  }
  100% {
    display: block;
    opacity: 1;
    top: -22px;
    left: 0;
    font-size: 13px;
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
  background: #dcd6cc;
  transition: 0.1s all;
`;

export const Label = styled.label`
  top: 3px;
  left: 0;
  opacity: 0;
  color: #7d7d7d;
  position: absolute;
  font-size: 16px;
`;

export const Input = styled.input`
  color: #7d7d7d;
  font-size: 16px;
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
    background: #2c2726;
  }
`;
