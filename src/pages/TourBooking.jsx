/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useTour } from '../features/tour/useTour';
import PaymentForm from '../features/booking/PaymentForm';
import { useSelector } from 'react-redux';

const BookingInfo = styled.div`
  display: flex;
  flex: 1;
  color: var(--color-teal-7);
`;

const TourInfo = styled.div`
  flex: 1;
  padding: 6.4rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PaymentInfo = styled.div`
  flex: 1;
  padding: 6.4rem 8rem;
`;

const TourImage = styled.img`
  max-width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;

const TourName = styled.p`
  font-size: 1.8rem;
`;
const TourPrice = styled.p`
  font-size: 2rem;
`;

const TourHeader = styled.h1`
  font-size: 2.4rem;
`;

function TourBooking() {
  const { isLoading, tour } = useTour();
  const { user } = useSelector((state) => state.auth);
  return (
    <BookingInfo>
      <TourInfo>
        <TourHeader>Thông tin Tour đã đặt: </TourHeader>
        <TourName>Tên Tour: {tour?.name}</TourName>
        <TourPrice>
          Giá tiền: <strong>${tour?.price}</strong>
        </TourPrice>
        <p>Mô tả: {tour?.description}</p>
        <TourImage src={`http://localhost:3000/img/tours/${tour?.imageCover}`} alt="" />
      </TourInfo>
      <PaymentInfo>
        <PaymentForm tourPrice={tour?.price} user={user} />
      </PaymentInfo>
    </BookingInfo>
  );
}

export default TourBooking;
