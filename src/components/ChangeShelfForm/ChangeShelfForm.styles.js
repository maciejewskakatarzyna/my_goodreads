import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;

    fieldset {
      width: 100%;
      border-radius: 3px;
      border: 1px solid ${({ theme }) => theme.color.formBar};
      padding-bottom: 20px;
    }

    legend {
      color: ${({ theme }) => theme.color.darkBrown};
      font-size: ${({ theme }) => theme.font.size.l};
      background: none;
      padding: 3px 12px;
      text-align: center;
    }

    label {
      color: ${({ theme }) => theme.color.grey};
      font-size: ${({ theme }) => theme.font.size.m};
      position: static;

      &:hover {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }
    input {
      width: 15%;
      accent-color: ${({ theme }) => theme.color.darkBrown};
      &:checked + label {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }
    }
  }
`;
