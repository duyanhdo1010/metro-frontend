import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); //giup modal o giua man hinh
  z-index: 1000;
  padding: 3.2rem 4.8rem;
  background-color: #fff;
`;

const Overlay = styled.div`
  position: fixed;
  /* cover toan bo page */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const CloseButton = styled.button`
  color: var(--color-teal-4);
  width: 2rem;
  height: 2rem;
  font-size: 3rem;
  position: fixed;
  top: 0.8rem;
  right: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover,
  &:active {
    color: var(--color-teal-9);
  }
`;

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return createPortal(
    <>
      <Overlay />
      <StyledModal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </StyledModal>
    </>,
    document.body
  );
}

export default Modal;
