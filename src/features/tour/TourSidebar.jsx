import styled from 'styled-components';

const StyledSidebar = styled.aside`
  display: flex;
  border-right: 1px solid var(--color-teal-9);
  padding: 1.6rem 2.4rem;
  width: 20rem;
`;

function TourSidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default TourSidebar;
