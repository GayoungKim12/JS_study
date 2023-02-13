const navigationMenu = document.getElementById('navigation-menu'); 

navigationMenu.children;// navigationMenu(=Node)의 자식요소

for (menu of navigationMenu.children) {
    console.log(menu.innerHTML)
};
// 상점
// 커뮤니티
// 마이페이지

console.log(navigationMenu.firstElementChild); // <li>상점<li>
console.log(navigationMenu.lastElementChild); // <li>마이페이지<li>

navigationMenu.previousElementSibling; // navigationMenu 바로 앞의 요소
navigationMenu.nextElementSibling; // navigationMenu 바로 뒤의 요소

console.log(navigationMenu.previousElementSibling); // <a href="/">로고</a>
console.log(navigationMenu.nextElementSibling); // <button>로그인</button>

navigationMenu.parentElement // navigationMenu의 부모요소

console.log(navigationMenu.parentElement); // <header>...</header>

const dom1 = document.createElement('div'); // <div></div>라는 dom이 생성
const dom2 = document.createElement('div'); // <div></div>라는 dom이 생성

dom1.innerHTML = '첫 번째';
dom2.innerHTML = '두 번째';

document.body.appendChild(dom1); // 부모노드의 마지막에 <div>첫 번째​</div>​가 자식요소로 생성
console.log(document.body);// > <body>...<div>첫 번째​</div></body>

document.body.insertBefore(dom2, dom1); // 부모노드의 특정위치에 <div>두 번째​</div>​가 자식요소로 생성
console.log(document.body);// > <body>...<div>두 번째​</div><div>첫 번째​</div></body>

// 노드의 프로퍼티: id, tagName, innerHTML, style, classList, ...
const testDiv = document.getElementById('test-div'); // testDiv = { id: 'test-div', tagName: 'div', innerHTML: '테스트', ...}
const testInput = document.querySelector('.test-input'); // testInput = { id: '', tagName: 'input', innerHTML: '', ...}

testDiv.innerHTML = '수정'; // testDiv의 텍스트을 변경
testDiv.style.color = 'red'; // testDiv의 스타일을 변경
testInput.hidden = true; // testInput을 웹페이지에서 숨김