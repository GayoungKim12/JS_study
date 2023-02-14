# 브라우저 기능

- Cookie: 특정시간동안 데이터가 사용되지 않고 이후 삭제되도록 설정할 때 사용
- Web Storage
  - Local Storage: 브라우저를 재시작했을 때 데이터가 삭제되지 않기를 바랄 때 사용
  - Session Storage: 같은 탭에서 새로고침을 했을 때 값이 변하지 않기를 바랄 때 사용

## Cookie

브라우저에 저장되는 작은 크기의 문자열

- 인증정보를 저장하기 위해 사용
- 대부분 서버에서 브라우저에 할당
- 보는 방법: 개발자도구(F12) > Application 탭 > Storage > Cookie

  ### 구성 요소

  자바스크립트에서 제공하는 함수로 네트워크 통신을 할 때 사용

  - Name: key
  - Value: 값
  - Domain: Cookie에 접근 가능한 도메인을 지정
  - Path: Cookie에 접근 가능한 경로를 지정
  - Path: Cookie에 접근 가능한 경로를 지정
  - Expires/max-age: 유효일자/만료기간
    - 둘 중 하나라도 설정되어 있지 않으면 브라우저를 닫을 때 Cookie 삭제
  - HTTPOnly: 브라우저나 클라이언트에서 Cookie에 접근할 수 없도록 제한
  - Secure: HTTPS로 통신하는 경우에만 Cookie 전송 가능

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

  ### 스토리지 종류

  - 로컬 스토리지(Local Storage): 브라우저에 저장되어 브라우저 종료 후 재시작해도 유지되는 데이터
  - 세션 스토리지(Session Storage): 브라우저를 종료한 경우에는 삭제되지만 새로고침한 경우에는 유지되는 데이터
    - 브라우저 탭마다 별도로 존재 ⇒ 다른 탭이면 데이터 유지 안 됨

  ### Web Storage 사용법

  - 웹 스토리지 쓰기
    - 로컬 스토리지
      ```
      localStorage.setItem('key', value);
      ```
      ```
      localStorage.key = value;
      ```
    - 세션 스토리지
      ```
      sessionStorage.setItem('key', value);
      ```
      ```
      sessionStorage.key = value;
      ```
  - 웹 스토리지에 접근
    - 로컬 스토리지
      ```
      localStorage.getItem('key');
      ```
      ```
      localStorage.key;
      ```
      ```
      localStorage['key'];
      ```
    - 세션 스토리지
      ```
      sessionStorage.getItem('key');
      ```
      ```
      sessionStorage.key;
      ```
      ```
      sessionStorage['key'];
      ```
  - 웹 스토리지 삭제
    - 로컬 스토리지
      ```
      localStorage.removeItem('key');
      ```
      ```
      localStorage.clear();
      ```
    - 세션 스토리지
      ```
      sessionStorage.removeItem('key');
      ```
      ```
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
