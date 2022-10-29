import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IssueListPage } from './pages/IssueListPage';
import { IssuePage } from './pages/IssuePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueListPage />} />
        <Route path="/:number" element={<IssuePage />} />
      </Routes>
    </BrowserRouter>
  );
}
