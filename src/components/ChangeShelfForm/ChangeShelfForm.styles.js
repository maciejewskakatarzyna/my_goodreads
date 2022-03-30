import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mq.phone} {
    width: 25rem;
  }

  ${({ theme }) => theme.mq.tablet}{
    width: 35rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30rem;

    fieldset {
      width: 100%;
      border-radius: 0.3rem;
      border: 0.1rem solid ${({ theme }) => theme.color.formBar};
      padding-bottom: 2rem;
    }

    legend {
      color: ${({ theme }) => theme.color.darkBrown};
      background: none;
      padding: 0.3rem 1.2rem;
      text-align: center;
      ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.m};
      }

      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.l};
      }
    }

    label {
      color: ${({ theme }) => theme.color.grey};
      font-size: ${({ theme }) => theme.font.size.m};
      position: static;

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
