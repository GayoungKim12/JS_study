# 이벤트(Event)

활동이 발생했다는 신호와 함수(**핸들러**)를 연결시켜 활동 발생 시 해당 함수가 동작하도록(**트리거**되도록) 함

- 사용자에 의해 발생된 이벤트
  ex) 마우스 클릭, 마우스 이동, 키보드 입력 등
- 사용자에 의해 발생된 이벤트가 아닌 이벤트
  ex) 네트워크 연결 실패, 다운로드 완료 등

## 대표적인 DOM 이벤트

- click: 요소를 좌클릭 했을 때 발생
- mouseover: 요소 위에 마우스를 올렸을 때
- mouseout: 요소 위에서 마우스를 내렸을 때
- focus:
- Blur:
- keydown:
- keyup:

## 이벤트와 핸들러 연결

- on(event) 사용
  - 해당하는 DOM 요소에 event 발생 시 on(event) 함수 실행
  - <code> <div onclick="함수이름"></div> </code>
  - Node.onclick = (event) => { 실행할 코드 }
- addEventListener("event", handler) 사용
  - 해당 요소에 event 발생 시 handler 실행
  - Node.addEventListener("click", handler)

## 이벤트 객체

발생한 이벤트에 대한 정보가 담겨 있음

- event.target: 이벤트가 발생한 DOM

## 이벤트 버블링

자식요소에 이벤트가 발생하면 부모요소에 이벤트가 전달되는 현상
