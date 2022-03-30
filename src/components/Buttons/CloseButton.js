import styled from 'styled-components';

const CloseButton = styled.button`
  --b: 0.3rem;
  --c: ${({ theme }) => theme.color.black} 90deg, ${({ theme }) => theme.color.beige} 0;
  width: 2rem;
  aspect-ratio: 1/1;
  background: conic-gradient(from 90deg at var(--b) var(--b), var(--c)) calc(100% + var(--b) / 2)
    calc(100% + var(--b) / 2) / calc(50% + var(--b)) calc(50% + var(--b));
  border: 0.4rem solid ${({ theme }) => theme.color.darkBrown};
  border-radius: 50%;
  transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

export default CloseButton;
