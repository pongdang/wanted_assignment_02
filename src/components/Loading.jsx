/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Loading() {
  return (
    <article css={loadingContainer}>
      <div className="loadingio-spinner-dual-ring-oltfw0s0vj9">
        <div className="ldio-kqbb81f2cuq">
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </article>
  );
}

const loadingContainer = css`
  @keyframes ldio-kqbb81f2cuq {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .ldio-kqbb81f2cuq div {
    box-sizing: border-box !important;
  }

  .ldio-kqbb81f2cuq > div {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 28px;
    left: 28px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #626262 transparent #626262 transparent;
    animation: ldio-kqbb81f2cuq 1s linear infinite;
  }

  .ldio-kqbb81f2cuq > div:nth-of-type(2) {
    border-color: transparent;
  }

  .ldio-kqbb81f2cuq > div:nth-of-type(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .ldio-kqbb81f2cuq > div:nth-of-type(2) div:before,
  .ldio-kqbb81f2cuq > div:nth-of-type(2) div:after {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 48px;
    background: #626262;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #626262;
  }

  .ldio-kqbb81f2cuq > div:nth-of-type(2) div:after {
    left: -16px;
    top: 48px;
    box-shadow: 128px 0 0 0 #626262;
  }

  .loadingio-spinner-dual-ring-oltfw0s0vj9 {
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .ldio-kqbb81f2cuq {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .ldio-kqbb81f2cuq div {
    box-sizing: content-box;
  }
`;
