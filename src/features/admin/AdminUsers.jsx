/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import Table from '../../ui/Table';
import { useUsers } from '../user/useUsers';
import { useMemo, useState } from 'react';
import ActionsRenderer from '../../ui/ActionsRenderer';
import Modal from '../../ui/Modal';
import UserEditModal from './UserEditModal';
import UserDeleteModal from './UserDeleteModal';

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2.4rem;
`;

function AdminUsers() {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const { users, isLoading } = useUsers();

  const renderEditModal = (id) => {
    setIsOpenEditModal(true);
    setEditingUserId(id);
  };

  const renderDeleteModal = (id) => {
    setIsOpenDeleteModal(true);
    setDeletingUserId(id);
  };
  const columns = useMemo(
    () => [
      { field: '_id', headerName: 'ID', filter: 'agTextColumnFilter' },
      { field: 'name', filter: 'agTextColumnFilter' },
      { field: 'email', filter: 'agTextColumnFilter' },
      { field: 'phone', filter: 'agTextColumnFilter' },
      { field: 'role', filter: 'agTextColumnFilter' },
      { field: 'active', headerName: 'Trạng thái tài khoản' },
      {
        headerName: 'Actions',
        sortable: false,
        filter: false,
        cellRenderer: ActionsRenderer, //phần tử mà sữ được thêm vào
        cellRendererParams: {
          //dưới là các props được truyền vào
          onEdit: renderEditModal,
          onDelete: renderDeleteModal
        }
      }
    ],
    []
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <h1>Users</h1>
      <Table data={users} columns={columns} />
      <Modal open={isOpenEditModal} onClose={() => setIsOpenEditModal(false)}>
        <UserEditModal userId={editingUserId} onClose={() => setIsOpenEditModal(false)} />
      </Modal>
      <Modal open={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
        <UserDeleteModal userId={deletingUserId} onClose={() => setIsOpenDeleteModal(false)} />
      </Modal>
    </StyledContainer>
  );
}

export default AdminUsers;
