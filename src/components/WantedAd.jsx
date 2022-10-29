const AD_URL = 'https://www.wanted.co.kr/';
const AD_IMAGE =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

export function WantedAd() {
  return (
    <a href={AD_URL}>
      <img src={AD_IMAGE} alt="원티드 광고" />
    </a>
  );
}
