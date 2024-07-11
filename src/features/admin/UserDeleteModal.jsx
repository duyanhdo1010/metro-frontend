import styled, { css } from 'styled-components';
import useDeleteUser from './useDeleteUser';

const StyledButton = styled.button`
  flex: 1;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-teal-0);
  background-color: var(--color-teal-6);
  padding: 0.8rem 1.2rem;
  border-radius: 1000px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: var(--color-teal-9);
  }
  ${(props) =>
    props.type === 'cancel' &&
    css`
      background-color: red;
      &:hover,
      &:active {
        background-color: #b30000;
      }
    `};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Container = styled.div`
  color: var(--color-teal-9);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function UserDeleteModal({ userId, onClose }) {
  const { deleteUser } = useDeleteUser();
  const handleConfirm = (userId) => {
    deleteUser(userId);
    onClose();
  };
  return (
    <Container>
      Bạn có chắc muốn khoá tài khoản này không?
      <ButtonContainer>
        <StyledButton onClick={() => handleConfirm(userId)}>Xác nhận</StyledButton>
        <StyledButton type="cancel" onClick={onClose}>
          Huỷ
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default UserDeleteModal;
