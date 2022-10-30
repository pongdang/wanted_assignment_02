import styled from '@emotion/styled';
import React from 'react';
import { useIssueContext } from '../contexts/IssueContext';
import { MarkdownRender } from './MarkdownRender';

export function Issue({ owner, repo, number }) {
  const { useIssue } = useIssueContext();
  const { issue, isLoading } = useIssue({ owner, repo, number });

  if (isLoading) {
    return <p>Loading</p>;
  }

  const { title, body, user, comments } = issue;

  return (
    <>
      <Container key={number}>
        <h1>{title}</h1>
        <p>{number}</p>
        <p>{user.login}</p>
        <p>{user.login}</p>
        <p>{comments}</p>
        <MarkdownRender body={body} />
      </Container>
    </>
  );
}

const Container = styled.div``;
