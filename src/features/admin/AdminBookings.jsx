/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import Table from '../../ui/Table';
import { useMemo, useState } from 'react';
import ActionsRenderer from '../../ui/ActionsRenderer';
import Modal from '../../ui/Modal';
import { useBookings } from '../booking/useBookings';
import BookingEditModal from './BookingEditModal';
import BookingDeleteModal from './BookingDeleteModal';

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2.4rem;
`;

function AdminBookings() {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [deletingBookingId, setDeletingBookingId] = useState(null);
  const { bookings, isLoading } = useBookings();

  const renderEditModal = (id) => {
    setIsOpenEditModal(true);
    setEditingBookingId(id);
  };

  const renderDeleteModal = (id) => {
    setIsOpenDeleteModal(true);
    setDeletingBookingId(id);
  };
  const columns = useMemo(
    () => [
      { field: '_id', headerName: 'Booking Id', filter: 'agTextColumnFilter' },
      { field: 'user', filter: 'agTextColumnFilter' },

      { field: 'tour.name', headerName: 'Tour Name', filter: 'agTextColumnFilter' },
      {
        field: 'createdAt',
        headerName: 'Booking Date',
        filter: 'agDateColumnFilter',
        valueFormatter: (params) => {
          if (params.value) {
            const date = new Date(params.value);
            return date.toLocaleDateString('en-GB'); // Định dạng dd/mm/yyyy
          }
          return '';
        }
      },
      { field: 'paid', headerName: 'Thanh toán' },
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
      <h1>Bookings</h1>
      <Table data={bookings} columns={columns} />
      <Modal open={isOpenEditModal} onClose={() => setIsOpenEditModal(false)}>
        <BookingEditModal BookingId={editingBookingId} onClose={() => setIsOpenEditModal(false)} />
      </Modal>
      <Modal open={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
        <BookingDeleteModal
          BookingId={deletingBookingId}
          onClose={() => setIsOpenDeleteModal(false)}
        />
      </Modal>
    </StyledContainer>
  );
}

export default AdminBookings;
