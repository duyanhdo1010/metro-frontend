import styled from 'styled-components';
import Table from '../../ui/Table';
import { useTours } from '../tour/useTours';

/*
  {
    "_id": "66715729e6591979af099379",
    "name": "Ha Noi Viet Nam",
    "description": "A tour to Ha Noi",
    "averageRating": 4.5,
    "ratingQuantity": 2,
    "imageCover": "image-1",
    "duration": 5,
    "images": [],
    "maxGroupSize": 12,
    "price": 3700,
    "discount": 0,
    "locations": [
        "Trang Tien",
        "Dai La",
        "Bach Mai"
    ],
    "startDates": [
        "2021-06-19T09:00:00.000Z",
    ],
    "createdAt": "2024-06-18T09:45:13.574Z",
    "updatedAt": "2024-06-21T11:45:15.233Z",
    "slug": "ha-noi-viet-nam",
    "id": "66715729e6591979af099379"
}
  */

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2.4rem;
`;

function AdminTours() {
  const { tours, isLoading } = useTours();
  console.log(tours);

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <h1>Tours</h1>
      <Table />
    </StyledContainer>
  );
}

export default AdminTours;
