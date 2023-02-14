# Cookie

브라우저에 저장되는 작은 크기의 문자열

- 접근 방법: 개발자도구(F12) > Application 탭 > Storage > Cookie
- 인증정보를 저장하기 위해 사용
  - 서버에서 내려주고 브라우저에 할당

## 구성 요소

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

## 사용 방법

- 쿠키 쓰기
  - 클라이언트
    ```
    document.cookie = "name=gayoung; path=/; max-age=3600"
    ```
  - 서버
    ```
    response.header {
      Set-Cookie: "name=gayoung; path=/; max-age=3600; httpOnly"
    }
    ```
- 쿠키에 접근
  ```
  document.cookie
  ```
- 쿠키 삭제: max-age=0으로 변경한 cookie로 덮어씌우기
  ```
  document.cookie = "name=gayoung; path=/; max-age=0"
  ```
- 쿠키 보내기: 인증에 필요한 API 호출할 때 서버에 요청하는 방법
  ```
    fetch('URL', {
      credentials: 'includes'
    })
  ```
