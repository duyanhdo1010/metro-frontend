import { FaRegCalendar, FaRegFlag, FaUser } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import styled from 'styled-components';
import { dateConverter } from '../../utils/helper';
import { NavLink } from 'react-router-dom';

const StyledTourCard = styled.div`
  border: 2px solid var(--color-teal-9);
  height: 48rem;
  border-radius: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: var(--color-teal-9);
`;

const StyledTourImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 3.2rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledTourDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
`;

const StyledTourSelling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-teal-0);
  flex: 1;
  border-bottom-left-radius: 3.2rem;
  border-bottom-right-radius: 3.2rem;
  gap: 1.6rem;
`;

const TourPriceAndRating = styled.div`
  display: flex;
  flex-direction: column;
`;

const TourDetailsHeader = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const TourDetailsDescription = styled.span`
  font-size: 1.4rem;
`;

const TourDateDetails = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  font-size: 1.4rem;
`;

const DetailButton = styled(NavLink)`
  padding: 1.4rem 2.4rem;
  background-color: var(--color-teal-9);
  color: var(--color-teal-0);
  border-radius: 100rem;
  font-weight: bold;
`;

const DateDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

function TourCard({ tour }) {
  return (
    <StyledTourCard>
      <StyledTourImage src="/card-example.jpg" />
      <StyledTourDetails>
        <TourDetailsHeader>{tour?.name}</TourDetailsHeader>
        <TourDetailsDescription>{tour?.description}</TourDetailsDescription>
        <TourDateDetails>
          <DateDetailsContainer>
            <LuMapPin /> <span>{tour?.locations[0]}</span>
          </DateDetailsContainer>
          <DateDetailsContainer>
            <FaRegCalendar /> <span>{dateConverter(tour.startDates[0])}</span>
          </DateDetailsContainer>
          <DateDetailsContainer>
            <FaRegFlag /> <span>{tour?.locations?.length} Điểm dừng</span>
          </DateDetailsContainer>
          <DateDetailsContainer>
            <FaUser /> <span>{tour?.maxGroupSize} Người</span>
          </DateDetailsContainer>
        </TourDateDetails>
      </StyledTourDetails>
      <StyledTourSelling>
        <TourPriceAndRating>
          <span>
            <strong>${tour?.price}</strong> mỗi người
          </span>
          <span>
            {' '}
            <strong>4.1</strong> rating (7)
          </span>
        </TourPriceAndRating>
        <DetailButton to={tour._id}>Chi tiết</DetailButton>
      </StyledTourSelling>
    </StyledTourCard>
  );
}

export default TourCard;
