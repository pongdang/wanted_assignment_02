import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { WantedAd } from '../WantedAd';
import { useState, useEffect, useRef } from 'react';
import { TitleInfo } from '../TitleInfo';
import { useIssueListContext } from '../../contexts/IssueListContext';
import { Loading } from '../Loading';

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
      { threshold: 0.25, rootMargin: '1000px' }
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
    return <Loading />;
  }

  return (
    <ul>
      {issueList.map(({ id, number, user, title, login, comments, created_at }, index) => (
        <React.Fragment key={id}>
          {index === 4 && <WantedAd key={'WantedAd'} />}

          <Li>
            <Link to={`/${number}`}>
              <TitleInfo
                number={number}
                title={title}
                comments={comments}
                user={user}
                created_at={created_at}
              />
            </Link>
          </Li>
        </React.Fragment>
      ))}
      <div ref={setBottom} />
    </ul>
  );
}

const Li = styled.li`
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 14%), 0px 1px 2px rgb(0 0 0 / 24%);
  margin-top: 20px;

  a {
    padding: 20px;
    display: block;
  }
`;
