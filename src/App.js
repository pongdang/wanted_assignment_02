import { Header } from './components/Header';
import { CurrentRepoContextProvider } from './contexts/CurrentRepoContext';
import Router from './Router';

function App() {
  return (
    <CurrentRepoContextProvider>
      <Header />
      <Router />
    </CurrentRepoContextProvider>
  );
}

export default App;
