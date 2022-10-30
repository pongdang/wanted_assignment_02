import { ErrorBoundary } from '../components/ErrorBoundary';
import { IssueList } from '../components/IssueList';
import { IssueListContextProvider } from '../contexts/IssueListContext';
import { RenderFallback } from '../components/RenderFallback';
import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';

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
