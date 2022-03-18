import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 300px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;

    label:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 50%;
    }
    label:not(:first-child) {
      color: ${({ theme }) => theme.color.darkBrown};
      font-size: ${({ theme }) => theme.font.size.m};
      position: static;

      &:hover {
        font-weight: bold;
      }
    }
    input {
      width: 15%;
    }
  }
`;
