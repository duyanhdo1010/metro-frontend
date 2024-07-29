/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import ActionsRenderer from '../../ui/ActionsRenderer';
import Table from '../../ui/Table';
import { useTours } from '../tour/useTours';
import { useMemo, useState } from 'react';
import Modal from '../../ui/Modal';
import TourDeleteModal from './TourDeleteModal';
import TourEditModal from './TourEditModal';
import TourCreateModal from './TourCreateModal';

const StyledButton = styled.button`
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
`;

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2.4rem;
`;

function AdminTours() {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [editingTourId, setEditingTourId] = useState(null);
  const [deletingTourId, setDeletingTourId] = useState(null);
  const renderEditModal = (id) => {
    setIsOpenEditModal(true);
    setEditingTourId(id);
  };

  const renderDeleteModal = (id) => {
    setIsOpenDeleteModal(true);
    setDeletingTourId(id);
  };
  const { tours, isLoading } = useTours();
  const columns = useMemo(
    () => [
      { field: '_id', headerName: 'ID', filter: 'agTextColumnFilter' },
      { field: 'name', headerName: 'Tour Name', filter: 'agTextColumnFilter' },
      { field: 'duration', filter: 'agTextColumnFilter' },
      { field: 'maxGroupSize', filter: 'agNumberColumnFilter' },
      { field: 'price', filter: 'agNumberColumnFilter' },
      { field: 'discount', filter: 'agTextColumnFilter' },
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
      <h1>Tours</h1>
      <StyledButton onClick={() => setIsOpenCreateModal(true)}>Tạo Tour</StyledButton>
      <Modal open={isOpenCreateModal} onClose={() => setIsOpenCreateModal(false)} l>
        <TourCreateModal onClose={() => setIsOpenCreateModal(false)} />
      </Modal>
      <Table data={tours} columns={columns} />
      <Modal open={isOpenEditModal} onClose={() => setIsOpenEditModal(false)} l>
        <TourEditModal tourId={editingTourId} onClose={() => setIsOpenEditModal(false)} />
      </Modal>
      <Modal open={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
        <TourDeleteModal tourId={deletingTourId} onClose={() => setIsOpenDeleteModal(false)} />
      </Modal>
    </StyledContainer>
  );
}

export default AdminTours;
