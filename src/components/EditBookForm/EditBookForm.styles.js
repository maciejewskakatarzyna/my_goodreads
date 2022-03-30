import styled from 'styled-components';

export const StyledEditBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.phone} {
    width: 25rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 35rem;
  }

  button {
    margin-top: 3rem;
  }

  fieldset {
    width: 100%;
    border: none;

    div {
      margin-top: 0.5rem;
    }

    input {
      width: 15%;
      accent-color: ${({ theme }) => theme.color.darkBrown};
      ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.s};
      }

      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
      }

      &:checked + label {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }

    label {
      color: ${({ theme }) => theme.color.grey};
      position: static;
      font-size: ${({ theme }) => theme.font.size.s};

      &:hover {
        color: ${({ theme }) => theme.color.darkBrown};
      }
    }
  }

  legend {
    color: ${({ theme }) => theme.color.grey};
    background: none;
    text-align: start;
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
`;
