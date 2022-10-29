import React from 'react';
import { fetchIssueList } from '../api/issue';
import { useResource } from '../hooks/useResource';

export default function IssueList() {
  const { data: issueList } = useResource(['getIssueList'], () =>
    fetchIssueList({ owner: 'angular', repo: 'angular-cli' })
  );

  return (
    <>
      {issueList.map(issue => (
        <React.Fragment key={issue.id}>
          <h1>{issue.title}</h1>
          <p>{issue.id}</p>
          <p>{issue.user.login}</p>
          <p>{issue.user.login}</p>
          <p>{issue.comments}</p>
        </React.Fragment>
      ))}
      )
    </>
  );
}
