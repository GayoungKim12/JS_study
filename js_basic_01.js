let a = 0;
let b = a;

b = 5;

console.log(a); // 0
console.log(b); // 5

const obj = {
  q: 1,
  w: 2,
  e: {
    r: 6,
    t: 7,
  }
};

const copy = obj;
copy.q = 3;

console.log(obj.q); // 3

// 값 복사를 이용
const valueCopy = Object.assign({}, obj);
valueCopy.w = 4;

console.log(obj.w); // 2
console.log(valueCopy.w); // 4
// > valueCopy는 obj와 독립적인 객체를 가짐

valueCopy.e.r = 8;

console.log(obj.e.r); // 8
console.log(valueCopy.e.r); // 8
// > obj.e는 { r: 6, t: 7 }이 저장된 동일한 메모리 주소를 가르키기 때문에 obj.e.r의 값이 변경됨



