// 16진수로 만들기
function solution(n) {
  var answer = '';
  answer = n.toString(16);
  return answer;
}

// 8진수로 만들기
function solution(n) {
  var answer = '';
  answer = n.toString(8);
  return answer;
}

// 1 ~ n까지 곱하기
function solution(n) {
  var answer = 0;
  if (n > 0) {
      answer = 1;
      for (let i = n; i > 0; i--) {
          answer = answer * i;
      }
  }
  return answer;
}

// 피보나치 배열을 만들고 그 배열의 n번째 값 구하기
function solution(n) {
  var answer = 0;
  const arr = [1, 1];
  for (i = 2; i < 39; i++) {
      arr[i] = arr[i-2] + arr[i-1];
  };
  answer = arr[n-1];
  return answer;
}

// s의 문자열이 target의 문자열에 포함되는지 확인하기
function solution(s, target) {
  var answer = true;
  answer = target.includes(s);
  return answer;
}