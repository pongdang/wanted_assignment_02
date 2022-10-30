import styled from '@emotion/styled';
import React from 'react';
import { useIssueContext } from '../contexts/IssueContext';
import { MarkdownRender } from './MarkdownRender';
import { TitleInfo } from './TitleInfo';

export function Issue({ owner, repo, number }) {
  const { issue, isLoading, useIssue } = useIssueContext();

  useIssue({ owner, repo, number });

  if (isLoading) {
    return <p>Loading</p>;
  }

  const { title, body, user, comments, created_at } = issue;

  // ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
  return (
    <>
      <Container key={number}>
        <TitleLayout>
          <img src={user.avatar_url} alt={user.login} />
          <TitleInfo
            number={number}
            title={title}
            comments={comments}
            user={user}
            created_at={created_at}
          />
        </TitleLayout>
        <MarkdownRender body={withoutComments(body)}></MarkdownRender>
      </Container>
    </>
  );
}

function withoutComments(body) {
  return body.replace(/<!--.+?-->/gs, '');
}
const Container = styled.section`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 14%), 0px 1px 2px rgb(0 0 0 / 24%);
`;

const TitleLayout = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(0 0 0 / 14%);
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 60px;
    height: 60px;
  }
`;
