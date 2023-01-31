// 논리 연산자 이용 X
function getName1(firstName, lastName) {
  const fName = firstName ? firstName : '성 없음' ;
  const lName = lastName ? lastName : '이름 없음';

  return '저는 ' + fName + ' ' + lName + '입니다.'
}

console.log(getName1('김',))

// 논리 연산자 이용
function getName2(firstName, lastName) {
  const fName = firstName || '성 없음';
  const lName = lastName || '이름 없음';

  return '저는 ' + fName + ' ' + lName + '입니다.'
}

console.log(getName2())

// 동등 연산자
if ('0' == 0) {
  console.log('"0"은 0과 같다') // 출력
} else {
  console.log('"0"은 0과 다르다')
}

// 일치 연산자
if ('0' === 0) {
  console.log('"0"은 0과 같다')
} else {
  console.log('"0"은 0과 다르다') // 출력
}

