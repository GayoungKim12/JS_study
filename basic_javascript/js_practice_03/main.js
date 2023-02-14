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

