import styled from 'styled-components';
import { useMyBookings } from '../features/booking/useMyBookings';
import BookedTour from '../features/booking/BookedTour';

const BookingsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 4.8rem;
  gap: 2.4rem;
  overflow-y: auto;
`;

function MyBooking() {
  const { isLoading, myBookings } = useMyBookings();
  if (isLoading) return <div>Loading...</div>;
  if (!myBookings) return <div>No bookings available</div>;
  return (
    <BookingsContainer>
      {myBookings.map((booking) => (
        <BookedTour booking={booking} key={booking.id} />
      ))}
    </BookingsContainer>
  );
}

export default MyBooking;
