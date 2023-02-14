# 동기/비동기

코드가 실행되는 방식

## 동기(Synchronous)

요청과 응답이 동시에 일어나는 방식<br/>
ex) alert(), console.log(), ...

- 코드가 순차적으로 실행
- 먼저 실행된 코드가 응답되기 전까지 다른 코드 실행 불가

## 비동기(Asynchronous)

요청과 응답이 동시에 일어나지 않는 방식<br/>
ex) setTimeout(), ...

- 코드가 순차적으로 실행되지 않음 ⇒ 원하는 결과가 나오지 않을 수 있음
- 먼저 실행된 코드가 응답되지 않은 상태에서 다음 코드 실행
- 해결 방법

  - Callback 함수
  - Promise
  - async, await

  ### Callback 함수

  다른 함수의 인자로 넘겨져 함수 내부에 호출되는 함수

  - A함수가 수행해야 할 코드가 모두 수행된 후 Callback 함수 실행

  ```
  function A (callback) {
    // 수행해야 할 코드
    callback();
  }
  ```

  ### Promise

  ### async, await
