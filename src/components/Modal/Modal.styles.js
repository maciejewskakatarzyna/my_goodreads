import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 60vh;
  border: #dcd6cc 1px solid;
  border-radius: 5px;
  background-color: #f4f1ea;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;

  &:focus {
    outline: none;
  }
`;
