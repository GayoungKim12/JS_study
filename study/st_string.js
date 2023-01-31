const string1 = '123';
const string2 = '456';
const string3 = `123
456`;

console.log(string3)

// 문자열 병합 함수
function genHello(name) {
  const resultName = name || '이름없음';
  // const resultName = name ? name : '이름없음';
  
  return '안녕하세요 ' + resultName + '님 반갑습니다.'
}

console.log(genHello(''))