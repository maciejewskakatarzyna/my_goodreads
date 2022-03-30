import styled, { keyframes } from 'styled-components';

const moveLabelToTop = keyframes`
  0% {
    display: none;
    opacity: 0;
    top: 0.3rem;
    left: 0;
    font-size: ${({ theme }) => theme.font.size.m};
  }
  100% {
    display: block;
    opacity: 1;
    top: -2.2rem;
    left: 0;
    font-size: ${({ theme }) => theme.font.size.xs};
  }`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const FormItem = styled.div`
  width: 100%;
  margin: ${({ isError, isRadio }) =>
    isError || isRadio ? '2.4rem 0rem 1rem 0rem' : '2.4rem 0rem'};
  position: relative;
  flex-shrink: 0;
  display: block;
`;
export const FormItemBar = styled.div`
  width: 100%;
  height: 0.2rem;
  background: ${({ isError, theme }) => (isError ? theme.color.red : theme.color.formBar)};
  transition: 0.1s all;
`;

export const Label = styled.label`
  top: 0.3rem;
  left: 0;
  opacity: 0;
  color: ${({ theme }) => theme.color.grey};
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.xs};
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.s};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.grey};
  border: none;
  line-height: 2.2rem;
  width: 100%;
  background: none;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.s};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

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
    background: ${({ isError, theme }) => (isError ? theme.color.red : theme.color.darkBrown)};
  }
`;
