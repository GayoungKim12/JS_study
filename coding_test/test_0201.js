// 5번 문자열 거꾸로 바꾸기
function solution5(s) {

  var answer = "";
  var str = s.split("");
  answer = str.reverse().join("");

  return answer;
}

// 1번 가장 많은 등장한 숫자 출력 

function solution(param0) {
  var answer = 0;
  var str = param0.toString();
  var num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < 10; j++) {
      if(str[i] === String(j)) {
        num[j] = num[j] + 1;
      }
    }
  }
  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      if (num[answer] < num[i]) {   
        if (num[i] >= num[j]) {
          answer = i;
        } else {
          answer = j;
        }
      }
    }
  }
  return answer;
}

// 소수면 참 아니면 거짓
function solution3(n) {
  var answer = true;

  for (let i = 2; i < n; i = i + 1) {
      if((n % i) !== 0) {
          answer = true;
      } else {
          answer = false;
          break;
      }
  }

  return answer;
}