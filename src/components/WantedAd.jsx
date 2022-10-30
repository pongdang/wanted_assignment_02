import styled from '@emotion/styled';

const AD_URL = 'https://www.wanted.co.kr/';
const AD_IMAGE =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

export function WantedAd() {
  return (
    <Li>
      <a href={AD_URL} target="_blank" rel="noreferrer">
        <img src={AD_IMAGE} alt="원티드 광고" />
      </a>
    </Li>
  );
}

const Li = styled.li`
  margin: 20px 0;
  display: block;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 14%), 0px 1px 2px rgb(0 0 0 / 24%);
  height: 90px;

  a {
    display: block;
    height: 100%;
  }

  img {
    box-sizing: border-box;
    height: 100%;
    padding: 20px 0;
    margin: 0 auto;
    display: block;
  }
`;
