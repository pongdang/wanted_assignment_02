import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueList from './pages/IssueList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
      </Routes>
    </BrowserRouter>
  );
}
