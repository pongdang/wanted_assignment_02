import styled from '@emotion/styled';
import React from 'react';
import { useIssueContext } from '../contexts/IssueContext';

export function Issue({ owner, repo, id }) {
  const { useIssue } = useIssueContext();
  const { issue, isLoading } = useIssue({ owner, repo, id });

  if (isLoading) {
    return <>Loading</>;
  }

  const { title, user, comments } = issue;

  return (
    <>
      <Container key={id}>
        <h1>{title}</h1>
        <p>{id}</p>
        <p>{user.login}</p>
        <p>{user.login}</p>
        <p>{comments}</p>
      </Container>
    </>
  );
}

const Container = styled.div``;
