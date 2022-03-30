import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: ${props => props.width};
  min-height: ${props => props.height};
  border: ${({ theme }) => theme.color.beige} 1px solid;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  ${({ theme }) => theme.mq.phone} {
    padding: 3rem 1rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 3rem 5rem;
  }

  &:focus {
    outline: none;
  }
`;
