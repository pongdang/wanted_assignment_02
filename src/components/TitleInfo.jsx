import styled from '@emotion/styled';
import { formatDate } from '../utils/date';

export function TitleInfo({ number, title, comments, user, created_at, className }) {
  const createAt = new Date(created_at);
  return (
    <TitleLayout className={className}>
      <Title>
        #{number} {title}
      </Title>

      <Comment>코멘트: {comments}</Comment>

      <Author>
        <p>작성자: {user.login}</p>
        <p>작성일: {formatDate(createAt)}</p>
      </Author>
    </TitleLayout>
  );
}

const TitleLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  align-items: center;
  gap: 2px 10px;

  p {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 750px) {
    display: unset;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const Comment = styled.p`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 750px) {
    grid-row: unset;
    grid-column: unset;
    justify-self: end;
  }
`;

const Author = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  word-break: keep-all;

  @media screen and (max-width: 400px) {
    display: block;
  }
`;
