import styled, { css } from 'styled-components';
import { fullDateConverter } from './../../utils/helper';

const BookedTourContainer = styled.div`
  padding: 1.6rem 2.4rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: var(--color-teal-1);
`;
const TourInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  color: var(--color-teal-9);
`;

const TourStatus = styled.span`
  position: absolute;
  border: none;
  border-radius: 1.2rem;
  padding: 0.4rem 0.8rem;
  top: -0.5rem;
  right: -1rem;
  ${(props) =>
    props.type === 'paid' &&
    css`
      background-color: var(--color-teal-9);
      color: var(--color-teal-1);
    `}

  ${(props) =>
    props.type === 'notPaid' &&
    css`
      background-color: #c40000;
      color: var(--color-teal-1);
    `}
`;

const TourReview = styled.div`
  color: var(--color-teal-1);
  background-color: var(--color-teal-9);
  max-width: fit-content;
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem;
`;

function BookedTour({ booking }) {
  return (
    <BookedTourContainer>
      <TourInformation>
        <p>
          <strong>Tên Tour: </strong>
          {booking?.tour?.name}
        </p>
        <p>
          <strong>Ngày đặt: </strong>
          {fullDateConverter(booking?.createdAt)}
        </p>
        <p>
          <strong>Tổng tiền: </strong>${booking?.price}
        </p>
        <TourStatus type={booking?.paid ? 'paid' : 'notPaid'}>
          Trạng thái: <strong>{booking?.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</strong>
        </TourStatus>
      </TourInformation>
      <TourReview>+ Review cho Tour</TourReview>
    </BookedTourContainer>
  );
}

export default BookedTour;
