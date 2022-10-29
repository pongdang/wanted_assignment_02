import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IssueListPage } from './pages/IssueListPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
