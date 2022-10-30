/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const codeStyle = css`
  background: rgb(30, 30, 30);
  color: rgb(212, 212, 212);
  font-size: 13px;
  font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New', monospace;
  line-height: 1.5;
  overflow-x: scroll;
`;

export const markdownStyle = css`
  p {
    white-space: pre-wrap;
  }

  a {
    text-decoration: none;
    color: #58a6ff;
  }

  ul,
  ol {
    padding: 0;
    line-height: 1.5;
  }

  li {
    list-style-position: inside;
    word-wrap: break-word;
    font-size: 1.6rem;
  }

  li,
  p {
    code {
      ${codeStyle}
      padding: 0 2px;
    }
  }

  pre > code {
    ${codeStyle}
    padding: 1em;
    margin: 0.5em 0px;
    display: block;
  }

  img {
    max-width: 100%;
  }
`;
