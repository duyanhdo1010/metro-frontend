import styled from 'styled-components';
import { useTours } from './useTours';
import TourCard from './TourCard';
import Searchbar from '../../ui/Searchbar';
import LoadMore from '../../ui/LoadMore';

const StyledTourList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 2.4rem;
  gap: 1.6rem;
`;

const TourCardContainer = styled.div`
  flex: 1;
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 3.2rem;
  margin-top: 2.4rem;
`;

function TourList() {
  const { isLoading, tours } = useTours();
  if (isLoading) return <div>Loading...</div>;
  return (
    <StyledTourList>
      <Searchbar />
      <TourCardContainer>
        {tours.map((tour) => (
          // eslint-disable-next-line react/jsx-key
          <TourCard tour={tour} key={tour._id} />
        ))}
      </TourCardContainer>
      <LoadMore />
    </StyledTourList>
  );
}

export default TourList;
