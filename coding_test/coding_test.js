// 문자열 중 가장 많이 반복하는 알파벳 출력
function sameStr (s) {
  let answer = "";
  const strArr = s.split('').sort((a, b) => a.localeCompare(b));
  const strSameNum = [];
  const strSet = new Set(strArr);
  const strSetArr = [...strSet];

  for (const string of strSet) {
    const strNum = strArr.filter((el) => el === string);
    strSameNum.push(strNum.length);
  }

  const maxStr = Math.max(...strSameNum); // 배열에서 가장 큰 수 찾기

  for (let i = 0; i < strSameNum.length; i++) {
    if (strSameNum[i] === maxStr) {
      answer = strSetArr[i];
      break;
    }
  }

  return answer;
}

console.log(sameStr("bbbbbbbbbbbbbbbdhfkahsddddddkjfhkdkkkkkkkkkksdhfjkhskjdhjddddd"));