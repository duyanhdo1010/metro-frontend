import styled from 'styled-components';
import AdminSidebar from './AdminSidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  height: 100%;
`;

function AdminAppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <AdminSidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AdminAppLayout;
