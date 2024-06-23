import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp />
    </>
  );
}

export default App;
