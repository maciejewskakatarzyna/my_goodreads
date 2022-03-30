import styled from 'styled-components';

export const StyledAddBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  margin-top: 2rem;

  button {
    margin-top: 3rem;
  }

  fieldset {
    width: 100%;
    border: none;

    div {
      margin-top: 5rem;
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

  p {
    color: ${({ theme }) => theme.color.grey};
    cursor: pointer;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    &:hover {
      color: ${({ theme }) => theme.color.darkBrown};
    }
  }

  summary {
    color: ${({ theme }) => theme.color.grey};

    &:hover {
      color: ${({ theme }) => theme.color.darkBrown};
    }
  }

  summary > * {
    display: inline;
  }

  details {
    margin-bottom: 1rem;
  }

  details[open] > summary,
  details[open] > summary > p {
    color: ${({ theme }) => theme.color.darkBrown};
  }
`;
