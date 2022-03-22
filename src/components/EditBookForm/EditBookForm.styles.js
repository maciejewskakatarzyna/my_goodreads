import styled from 'styled-components';

export const StyledEditBookForm = styled.form`
  font-size: ${({ theme }) => theme.font.size.m};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin-top: 20px;

  button {
    margin-top: 30px;
  }

  fieldset {
    width: 100%;
    border: none;

    div {
      margin-top: 5px;
    }

    input {
      width: 15%;
      accent-color: ${({ theme }) => theme.color.darkBrown};

      &:checked + label {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }

    label {
      color: ${({ theme }) => theme.color.grey};
      font-size: ${({ theme }) => theme.font.size.s};
      position: static;

      &:hover {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }
  }

  legend {
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.font.size.m};
    background: none;
    text-align: start;
  }
`;
