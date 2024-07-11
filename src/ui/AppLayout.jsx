import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  max-width: 100vw;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  /* padding: 4rem 4.8rem 6.4rem; */
  /* justify-content: center;
  align-items: center; */
  max-width: 100vw;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        {/* Show Page Content */}
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
