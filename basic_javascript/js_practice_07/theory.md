# 네트워크 통신

클라이언트가 서버에 데이터를 요청하고 전달받는 통신 과정

## fetch

자바스크립트에서 제공하는 함수로 네트워크 통신을 할 때 사용

- Promise를 반환
- 두 개의 인자를 가짐
- 결과는 Response 객체로 네트워크 연결이 성공했는지를 나타냄

  ```
  Response {
    status: 200,
    ok: 200,
    ...
  }
  ```

- Axios 라이브러리

  ### fetch 함수의 인자

  - 'URL'
    - fetch의 첫 번째 인자
    - 요청할 페이지의 서버 주소
    - API End Point(API 요청의 목적지)라 일컬음
      - API(Application Programming Interface): 서버에서 데이터 전달을 위해 구축해둔 구현체
  - Option 객체
    - fetch의 두 번째 인자
    - method: 네트워크 요청을 보낼 때 그 요청의 종류
      - GET: 서버에서 데이터를 가져오기만 할 때 사용
        ex) 사이트 불러오기
      - POST: Option의 body라는 필드에 데이터를 실어 서버로 보내고 서버는 해당 데이터를 이용해 새로운 객체를 생성
        ex) 게시물 생성
      - PUT: POST와 같은 방식으로 데이터를 전송하면 서버는 해당 데이터를 이용해 객체를 수정
        ex) 게시물 수정
      - DELETE: 서버에 있는 데이터를 삭제할 때 사용
        ex) 게시물 삭제
    - headers: 서버에 부가적으로 전달할 정보
      - [Cookie](https://github.com/GayoungKim12/JS_study/blob/master/basic_javascript/js_practice_08/theory.md#cookie): 브라우저에 있는 Cookie를 서버에 전송하면 Cookie는 인증정보를 담고 있기 때문에 인증정보가 필요한 API에 인증을 할 수 있도록 함
      - UserAgent: 에러 등을 서버에서 기록할 때 어떤 환경에서 발생했는지 파악하기 위해 서버 로깅 시 사용
    - body: 클라이언트에서 서버로 전달할 데이터가 있을 때 데이터를 실어보내는 필드

## CORS

같은 도메인에서 보낸 요청이 아닐 때 허용된 호스트가 아니면 요청을 거부하는 정책

- 허용된 호스트면 응답 헤더 Access-Control-Allow-Origin와 함께 정상 응답
- 허용된 호스트가 아니면 CORS Error 발생
