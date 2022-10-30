/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';

export function Header() {
  const { repo } = useCurrentRepoContext();

  return (
    <a href="/">
      <header css={headerBar}>
        <h1>
          {repo.owner} / {repo.repoName}
        </h1>
      </header>
    </a>
  );
}

const headerBar = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  text-align: center;
  padding: 12px 0;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 14%), 0px 1px 2px rgb(0 0 0 / 24%);

  h1 {
    text-transform: capitalize;
    font-size: 1.6rem;
  }
`;
