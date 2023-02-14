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

- Text: 기본 문자열
- CSV(Comma-Separated Values): 콤마로 필드를 구분한 텍스트 파일
- XML(eXtensible Markup Language)
