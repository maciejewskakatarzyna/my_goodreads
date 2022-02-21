import styled from 'styled-components';

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
  color: #7d7d7d;
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
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
  }

  &:focus + ${Label} {
    top: -22px;
    font-size: 13px;
  }

  &:not(:placeholder-shown) + ${Label} {
    top: -22px;
    font-size: 13px;
  }

  &:focus ~ ${FormItemBar} {
    background: #2c2726;
  }
`;
