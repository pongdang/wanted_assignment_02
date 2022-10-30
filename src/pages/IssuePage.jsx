import { ErrorBoundary } from '../components/ErrorBoundary';
import { Issue } from '../components/Issue';
import { IssueContextProvider } from '../contexts/IssueContext';
import { useParams } from 'react-router';
import { RenderFallback } from '../components/RenderFallback';
import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';

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
