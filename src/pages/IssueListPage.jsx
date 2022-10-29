import { ErrorBoundary } from '../components/ErrorBoundary';
import { IssueList } from '../components/IssueList';
import { IssueListContextProvider } from '../contexts/IssueListContext';
import { RenderFallback } from '../components/RenderFallback';

export function IssueListPage() {
  return (
    <ErrorBoundary renderFallback={RenderFallback}>
      <IssueListContextProvider>
        <IssueList owner="angular" repo="angular-cli" />
      </IssueListContextProvider>
    </ErrorBoundary>
  );
}
