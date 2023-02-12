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