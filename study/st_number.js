
console.log(isFinite('0'))

const str = '58';

// 16진수로 작성된 58이라는 의미 > 10진수로 변환 시 88
const int1 = parseInt(str, 16);

console.log(int1)

const str2 = int1.toString(16);

console.log(str2)

console.log(Number({}))