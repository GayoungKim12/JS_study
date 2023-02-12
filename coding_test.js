const str = "Hello World";
if (~str.indexOf("Hey")) {
  console.log('참');
} else {
  console.log('거짓');
}

const arr = [1, 8, 3];
if (arr.indexOf((it) => it === 5)) {
  console.log('참');
} else {
  console.log('거짓')
}

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];
const array2 = [...array1, 5, 6, 7]

console.log(Math.max(...array2));

function sameStr (strArr) {
  const strSameNum = [];
  const strSet = new Set(strArr);
  for (const string of strSet) {
    const strNum = strArr.filter((el) => el === string);
    strSameNum.push(strNum.length);
  }

  return strSameNum;
}

console.log(sameStr(['g', 'g', 'e', 'e', 'g', 'ga', 'a', 'a', 'ga', 'ga', 'ga', 'ga']));