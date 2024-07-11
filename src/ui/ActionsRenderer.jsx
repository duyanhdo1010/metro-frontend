import { MdDelete, MdEdit } from 'react-icons/md';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  font-size: 2.4rem;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  & svg {
    height: 100%;
    cursor: pointer;
  }
`;

function ActionsRenderer({ data, onEdit, onDelete }) {
  return (
    <StyledContainer>
      {/* dùng callback function nếu không nó tự gọi 2 hàm dưới khi khởi dộng luôn */}
      <MdEdit onClick={() => onEdit(data._id)} />
      <MdDelete onClick={() => onDelete(data._id)} />
    </StyledContainer>
  );
}

export default ActionsRenderer;
