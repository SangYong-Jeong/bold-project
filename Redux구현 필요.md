0. 리덕스 구현 전 -> 로그인 페이지 + 회원가입 페이지 + (로그인 버튼 and 로그아웃
   버튼) 추가 + 포트폴리오 등록하는 폼 만들기 -> App.js 에서 리덕스 useState로
   user의 state에 있는 id값이 존재 할 때, 위의 페이지들 접근할 수 있게 구현 (삼
   항방정식 이용)

1. modules 폴더안에 (user / design) redux - action, state, reducer 구성 - Ducks
   -> 액션명, 액션생성 함수 리듀서 템플릿만 잡아 놓음 Pattern

2. design -> character, graphic, illustration, packages로 나눠서 리덕스 모듈 세
   팅하기

3. 리덕스 모듈 세팅 후 api 통신으로 dispatch 통해 각 state에 값 넣기

- 로그인한 user만 포트폴리오 등록이 가능하게 구현 + 로그인 버튼 사라지고 로그아
  웃 버튼 생기게 구현
- 구현하기 위해 user의 state에 로그인 한 경우 해당 user의 id 받아오기
