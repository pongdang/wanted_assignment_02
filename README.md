## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

---

# [💁‍♀️ 배포링크](https://wanted-assignment-02.vercel.app/)

## 1. 이슈 목록 화면

### 이슈 목록 가져오기 API 활용

```js
// src/api/issue.js

import { get } from './http';

// @see https://docs.github.com/en/rest/issues/issues#list-repository-issues
export const fetchIssueList = async ({
  owner,
  repo,
  sort = 'comments',
  state = 'open',
  perPage = 30,
  page = 1,
}) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues`,
    data: { state, sort, perPage, page },
  });

  return data;
};

// @see https://docs.github.com/en/rest/issues/issues#get-an-issue
export const fetchIssue = async ({ owner, repo, number }) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues/${number}`,
  });

  return data;
};
```

api를 요청하는 함수를 `api` 폴더 안에 만들어 분리했습니다.
함수 바깥에서 `owner`, `repo` 를 입력받아 api 요청을 보내도록 하여 변경에 용이하도록 했습니다.

```js
// src/contexts/IssueListContext.js

import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { fetchIssueList } from '../api/issue';

const IssueListContext = createContext({
  useIssueList: () => {},
});

export const IssueListContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [issueList, setIssueList] = useState(null);

  const value = {
    isLoading,
    issueList,
    useIssueList: ({ owner, repo, perPage, page }) => {
      useEffect(() => {
        if (owner == null || repo == null) {
          return;
        }

        fetchIssueList({ owner, repo, perPage, page }).then(x => {
          setIssueList([...(issueList ?? []), ...x]);
          setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [owner, page, perPage, repo]);
    },
  };

  return <IssueListContext.Provider value={value}>{children}</IssueListContext.Provider>;
};

export const useIssueListContext = () => {
  return useContext(IssueListContext);
};
```

'이슈 목록' 을 불러오는 코드입니다. ('이슈' 를 불러오는 코드도 거의 동일합니다.)

Context API 를 이용하여 `fetchIssueList` 함수로 api 요청을 보내고, 그에 따라 로딩 상태와 api 응답 데이터를 다루었습니다.

### open 상태의 이슈 중 코멘트가 많은 순으로 정렬

### 각 행에는 '이슈 번호, 이슈제목, 작성자, 작성일, 코멘트 수' 표시

### 다섯번째 셀에는 광고 이미지 출력

<img width="1072" src="https://user-images.githubusercontent.com/76990149/198886084-192b06dd-866e-48c8-bb74-f1de30d538fd.png">

### 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩 (인피니티 스크롤)

https://user-images.githubusercontent.com/76990149/198887263-e735950e-bf96-46a9-9d6e-1973f1ec5254.mov

Observer API 를 이용하여 구현하였습니다.

## 2. 이슈 상세 화면

### 이슈의 상세 내용 표시

- '이슈 번호, 이슈 제목, 작성자, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

<img width="827" src="https://user-images.githubusercontent.com/76990149/198886952-829cfa71-9801-4ecc-959c-fc90c392b113.png">

## 3. 공통 헤더

### 두 페이지는 공통 헤더를 공유

### 헤더에는 Organization Name / Repository Name가 표시

<img width="716" alt="스크린샷 2022-10-31 오전 12 29 57" src="https://user-images.githubusercontent.com/76990149/198887156-be248efe-7084-4889-9b1a-ff8dda580711.png">

```js
function App() {
  return (
    <CurrentRepoContextProvider>
      <Header />
      <Main>
        <Router />
      </Main>
    </CurrentRepoContextProvider>
  );
}
```

이러한 구조로, 헤더를 공통적으로 여러 페이지에서 보여줄 수 있도록 했습니다.

## 필수 요구사항

- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] Context API를 활용한 API 연동
- [x] 데이터 요청 중 로딩 표시

https://user-images.githubusercontent.com/76990149/198887558-98b8b72b-2e8e-495f-b5b5-f61d7c8972ba.mov

```js
export function Issue({ owner, repo, number }) {
  const { issue, isLoading, useIssue } = useIssueContext();

  useIssue({ owner, repo, number });

  if (isLoading) {
    return <Loading />;
  }

  const { title, body, user, comments, created_at } = issue;

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
```

context API로 관리하던 로딩상태를 사용하여 `isLoading === true` 일 때 `<Loading />` 컴포넌트를 return 하도록 했습니다.

- [x] 에러 화면 구현

<img width="827" alt="스크린샷 2022-10-31 오전 12 38 46" src="https://user-images.githubusercontent.com/76990149/198887596-360714bc-5460-4e45-94d2-68f0711d0e35.png">

ErrorBoundary로 catch한 error를 모달창으로 보여주었습니다.

- [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
- 반응형 웹 구현
  - **이슈 목록 페이지 : pc**
    <img width="828" alt="스크린샷 2022-10-31 오전 12 41 21" src="https://user-images.githubusercontent.com/76990149/198887727-ffc1363d-aff9-428f-bdb3-17457ecde630.png">
  - **이슈 목록 페이지 : 모바일**
    <img width="457" alt="스크린샷 2022-10-31 오전 12 41 00" src="https://user-images.githubusercontent.com/76990149/198887734-b6a48684-f01c-49e4-9c60-5d93fbc3fde7.png">
  - **이슈 페이지 : pc**
    <img width="828" alt="스크린샷 2022-10-31 오전 12 41 51" src="https://user-images.githubusercontent.com/76990149/198887742-3c43d08d-7426-4064-aab6-f6432fc3c1ac.png">
  - **이슈 페이지: 모바일**
    <img width="430" alt="스크린샷 2022-10-31 오전 12 42 01" src="https://user-images.githubusercontent.com/76990149/198887750-5f0002c8-4741-44a0-95b8-3f2f18f707e4.png">
