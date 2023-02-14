# JSON(JavaScript Object Notation)

자바스크립트에서 객체를 표현하기 위해 만들어진 데이터 포맷

- 현재는 범용적으로 사용됨
  - 클라이언트 코드에 데이터를 저장
  - 서버와의 통신에서 데이터를 전달하고 받음

## 기본 형태

- .json 확장자 사용
- 객체로 이루어진 코드
  - 키는 ""(쌍따옴표)로 감싸져야 함
  - 문자열도 ""(쌍따옴표)로만 감싸져야 함
  - 마지막 키-값 쌍에 ,(쉼표) 제외
- 주석 사용 불가능

## 자바스크립트와 JSON

- 자바스크립트에는 JSON이라는 전역 객체 존재
- JSON 사용법
  - JSON.parse(JSON string): JSON을 객체로 변환
  - JSON.stringify(객체 변수): 객체를 JSON으로 변환
    - 객체의 속성값이 함수나 undefined면 해당 속성은 무시하고 직렬화

## 기타 데이터 포맷

<<<<<<< HEAD
- Text: 기본 문자열
- CSV(Comma-Separated Values): 콤마로 필드를 구분한 텍스트 파일
- XML(eXtensible Markup Language)
=======
  ### Cookie 사용법

  - Cookie 쓰기
    - 클라이언트
      ```
      document.cookie = "name=gayoung; path=/; max-age=3600"
      ```
    - 서버: 대부분 사용
      ```
      response.header {
        Set-Cookie: "name=gayoung; path=/; max-age=3600; httpOnly"
      }
      ```
  - Cookie에 접근
    ```
    document.cookie
    ```
  - Cookie 삭제: max-age=0으로 변경한 cookie로 덮어씌우기
    ```
    document.cookie = "name=gayoung; path=/; max-age=0"
    ```
  - Cookie 보내기: 인증에 필요한 API 호출할 때 서버에 요청하는 방법
    ```
      fetch('URL', {
        credentials: 'includes'
      })
    ```

## Web Storage

브라우저에 저장되는 키-값

- 전역 객체로 존재
- 보는 방법: 개발자도구(F12) > Application 탭 > Storage > Local Storage/Session Storage

  ### 종류

  - 로컬 스토리지(Local Storage): 브라우저에 저장되어 브라우저 종료 후 재시작해도 유지되는 데이터
  - 세션 스토리지(Session Storage): 브라우저를 종료한 경우에는 삭제되지만 새로고침한 경우에는 유지되는 데이터
    - 브라우저 탭마다 별도로 존재 ⇒ 다른 탭이면 데이터 유지 안 됨

  ### Web Storage 사용법

  - 웹 스토리지 쓰기
    - 로컬 스토리지
      ```
      localStorage.setItem('key', value);
      localStorage.key = value;
      ```
    - 세션 스토리지
      ```
      sessionStorage.setItem('key', value);
      sessionStorage.key = value;
      ```
  - 웹 스토리지에 접근
    - 로컬 스토리지
      ```
      localStorage.getItem('key');
      localStorage.key;
      localStorage['key'];
      ```
    - 세션 스토리지
      ```
      sessionStorage.getItem('key');
      sessionStorage.key;
      sessionStorage['key'];
      ```
  - 웹 스토리지 삭제
    - 로컬 스토리지
      ```
      localStorage.removeItem('key');
      localStorage.clear();
      ```
    - 세션 스토리지
      ```
      sessionStorage.removeItem('key');
      sessionStorage.clear();
      ```

## Cookie VS Web Storage

- Cookie
  - 요청 헤더에 포함될 수 있어 단순한 문자열만 작성
  - 대부분 서버에서 브라우저에 할당하지만 클라이언트로 조정 가능
  - 서브 도메인이 달라도 Option 객체 설정을 통해 유지 가능
- Storage
  - 요청 헤더에 포함되지 않아 Cookie보다 많은 저장 가능
  - 클라이언트에서만 조정 가능
  - 서브 도메인이 같아야 해당 URL에서 접근 가능
>>>>>>> 883bf5d75055972046eafa3ffc0f7375b0f09b1a
