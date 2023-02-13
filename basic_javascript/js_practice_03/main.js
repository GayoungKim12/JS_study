/**
 * 브라우저 객체
 * 
 * 브라우저 기능을 이용할 수 있도록 돕는 진입점 객체
 * ex) Location, History, Navigator 등
 * 
 * 전역 객체를 포함
 * ex) window
 */

/**
 * Navigator 객체
 * 
 * 브라우저와 운영체제에 대한 정보
 * - language: 선호하는 언어
 * - maxTouchPoints: 동시 터치가 가능한 지점 수
 * - userAgent: 브라우저 정보(접속한 Agent 수)
 * - platform: 운영체제 정보
 */

/**
 * Location 객체
 * 
 * 현재 URL의 정보를 읽고 변경할 수 있는 객체
 * - href: 현재 URL
 *   • 해당 값을 덮어씌워 페이지 이동: location.href = '이동할 URL';
 * - pathname: URL 경로
 * - reload: 새로고침 함수
 */

/**
 * History 객체
 * 
 * 브라우저의 사이트 방문 기록에 대한 정보
 * - back: 뒤로가기 수행
 * - forward: 앞으로가기 수행
 */

/**
 * Window 객체
 * 
 * Window 객체를 이용해 사용자와 상호작용 가능
 * - alert: 사용자에게 경고 메세지를 출력하는 함수
 *   • 사용자가 접근하면 안되는 페이지에 접근했을 때 유용하게 사용
 *   • 확인 버튼이 자동으로 구현
 * - confirm: 사용자에게 확인 메세지를 출력하는 함수
 *   • 확인 버튼과 취소 버튼이 자동으로 구현
 *   • 확인 버튼을 누르면 true를 반환, 취소 버튼을 누르면 false를 반환
 * - prompt: 사용자가 메세지를 입력할 수 있는 창이 생성되며 입력한 값을 반환하는 함수
 * - setTimeout(n초뒤 실행할 함수, n): n초 후 함수를 실행하는 타이머 함수(호출 스케쥴링)
 *   • clearTimeout()타이머는 브라우저의 리소스를 많이 사용하므로 함수가 끝나면 타이머 함수 제거 필요
 * - setInterval(n초마다 실행할 함수, n): n초마다 함수를 실행하는 타이머 함수(호출 스케쥴링)
 *   • clearInterval()타이머는 브라우저의 리소스를 많이 사용하므로 함수가 끝나면 타이머 함수 제거 필요
 */

if (confirm('모두 삭제하시겠습니까?')) {
    console.log('삭제');
} else {
    console.log('취소');
}

const name = prompt('이름이 무엇인가요?'); // 입력한 값이 name에 들어옴
console.log(name);

let timerId1 = setTimeout(() => {
    console.log('3초 끝!');
}, 3000);

clearTimeout(timerId1);

let timerId2 = setTimeout(() => {
    console.log('3초');
}, 3000);

clearInterval(timerId2);

