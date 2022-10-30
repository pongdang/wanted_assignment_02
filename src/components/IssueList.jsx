import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useIssueListContext } from '../contexts/IssueListContext';
import { WantedAd } from '../components/WantedAd';
import { useState, useEffect, useRef } from 'react';

export function IssueList({ owner, repo }) {
  const [page, setPage] = useState(1);
  const { issueList, isLoading, useIssueList } = useIssueListContext();
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useIssueList({ owner, repo, page });

  // @see https://kyounghwan01.github.io/blog/React/infinite-scroll/#intersection-observer-api를-사용한-무한-스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(x => x + 1);
        }
      },
      { threshold: 0.25, rootMargin: '80px' }
    );
    bottomObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <ul>
      {issueList.map(({ id, number, user, title, login, comments, ...etc }, index) => (
        <React.Fragment key={id}>
          {index === 4 ? <WantedAd key={'WantedAd'} /> : null}

          <Container>
            <Link to={`/${number}`}>
              {/* 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수 */}
              <h1>{`${number} | ${comments}`}</h1>
              {/* <h1>{title}</h1>
            <p>{id}</p>
            <p>{user.login}</p> */}
              {/* <p>{comments}</p> */}
            </Link>
          </Container>
        </React.Fragment>
      ))}
      <div ref={setBottom} />
    </ul>
  );
}

const Container = styled.li`
  border: 1px solid;
`;
