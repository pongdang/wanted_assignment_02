import { ErrorBoundary } from '../components/ErrorBoundary';
import { IssueListContextProvider } from '../contexts/IssueListContext';
import { RenderFallback } from '../components/RenderFallback';
import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';
import { IssueList } from '../components/issues/IssueList';

export function IssueListPage() {
  const { repo } = useCurrentRepoContext();

  return (
    <ErrorBoundary renderFallback={RenderFallback}>
      <IssueListContextProvider>
        <IssueList owner={repo.owner} repo={repo.repoName} />
      </IssueListContextProvider>
    </ErrorBoundary>
  );
}
