import { ErrorBoundary } from '../components/ErrorBoundary';
import { Issue } from '../components/Issue';
import { IssueContextProvider } from '../contexts/IssueContext';
import { useParams } from 'react-router';
import { RenderFallback } from '../components/RenderFallback';

export function IssuePage() {
  const params = useParams();

  return (
    <ErrorBoundary renderFallback={RenderFallback}>
      <IssueContextProvider>
        <Issue owner="angular" repo="angular-cli" number={params.number} />
      </IssueContextProvider>
    </ErrorBoundary>
  );
}
