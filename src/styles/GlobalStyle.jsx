import React from 'react';
import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return <Global styles={style} />;
}

const style = css`
  body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    font-size: 10px;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.3rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    word-wrap: break-word;
  }
`;
