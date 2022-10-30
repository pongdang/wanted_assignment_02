import { ErrorBoundary } from '../components/ErrorBoundary';
import { IssueContextProvider } from '../contexts/IssueContext';
import { useParams } from 'react-router';
import { RenderFallback } from '../components/RenderFallback';
import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';
import { Issue } from '../components/issues/Issue';

export function IssuePage() {
  const params = useParams();
  const { repo } = useCurrentRepoContext();

  return (
    <ErrorBoundary renderFallback={RenderFallback}>
      <IssueContextProvider>
        <Issue owner={repo.owner} repo={repo.repoName} number={params.number} />
      </IssueContextProvider>
    </ErrorBoundary>
  );
}
