// ❤️ on(이벤트)에 함수 할당

const countUpButton = document.getElementById('count-up-button');
const count = document.querySelector('span');

// 마우스로 노드를 클릭했을 때 함수 실행
countUpButton.onclick = (event) => { // 핸들러에 이벤트 객체 전달
    console.log(event); // 이벤트에 대한 정보 출력
    if (isNaN(Number(count.innerHTML))) return;
    count.innerHTML = Number(count.innerHTML) + 1;
}

// 마우스가 노드 위에 올려졌을 때 요소의 배경색과 글자색이 변경되는 함수 실행
count.onmouseover = () => {
    count.style.backgroundColor = "gray";
    count.style.color = "white";
}

// 마우스가 노드 위에서 없어졌을 때 요소의 배경색과 글자색이 되돌아오는 함수 실행
count.onmouseout = () => {
    count.style.backgroundColor = "transparent";
    count.style.color = "black";
}

const input1 = document.querySelectorAll('input')[0];

// 해당 노드에 focus 되었을 때 요소에 자동입력이 값으로 입력되어 있는 함수 실행 
input1.onfocus = () => {
    input1.value = '자동입력';
}

const input2 = document.querySelectorAll('input')[1];
const result = document.getElementById('result');

// input2의 텍스트가 바뀔 때마다 result의 innerHTML이 동일한 텍스트로 변경되는 함수 실행
input2.onchange = (event) => {
    result.innerHTML = event.target.value;
}

// 💛 addEventListener 이용

const test = document.getElementById('test');

new Array(10).fill(0).forEach((_, index) => {
    test.addEventListener("click", () => {
        console.log(`test clicked ${index+1}`);
    })
}) // 길이가 10이고, 각각의 요소가 0인 배열 => 각각의 요소가 이벤트인 배열

// 이벤트 버블링

const depth1 = document.querySelector('#depth1');
const depth2 = document.querySelector('#depth2');
const depth3 = document.querySelector('#depth3');

depth1.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
})
depth2.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);

    event.stopPropagation();
})
depth3.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
}) // depth3 클릭 => depth3에 적용된 클릭 이벤트 핸들러 실행 => 이벤트 버블링 => depth2에 적용된 클릭 이벤트 핸들러 실행 => 이벤트 버블링 중지

