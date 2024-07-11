import styled from 'styled-components';
import ImageSlider from '../ui/ImageSlider';

const StyledDiv = styled.div`
  /* height: 200vh; */
  flex: 1;
  min-width: 0;
`;

function HomePage() {
  return (
    <StyledDiv>
      <ImageSlider />
    </StyledDiv>
  );
}

export default HomePage;
