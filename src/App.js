import styled from '@emotion/styled';
import { Header } from './components/Header';
import { CurrentRepoContextProvider } from './contexts/CurrentRepoContext';
import Router from './Router';

function App() {
  return (
    <CurrentRepoContextProvider>
      <Header />
      <Main>
        <Router />
      </Main>
    </CurrentRepoContextProvider>
  );
}

const Main = styled.main`
  max-width: 1200px;
  margin: 80px auto 20px;
  padding: 0 20px;
`;

export default App;
