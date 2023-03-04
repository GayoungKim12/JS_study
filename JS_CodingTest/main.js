const 안녕 = '하세요';
const hi = 'hello';
const HI = 'HELLO';

console.log(안녕);
console.log(hi);
console.log(HI);

const a = 0;
console.log(a);
console.log(1 === '1');
console.log(+0 > 0);

const b = 123;
const c = 123.456;
console.log(b - c);
console.log((b - c).toFixed(3));

const meet = (name) => {
  return `Hello, ${name}`;
}

console.log(meet('Cynderella'));

// deepCopy 구현 함수
const deepCopy = function (obj) {
  const copy = {};
  for(const key in obj) {
    if(typeof obj[key] === 'object') deepCopy(obj[key]);
    copy[key] = obj[key];
  }
  return copy;
}

console.log(deepCopy({ a: 0, b: 4, c: { d: 5, e: 6 }}))

console.log(Number(123n));
console.log(typeof Number(123n));
console.log(0 === false)
console.log(0 == false)
console.log('Hello' > 'Greet')
console.log(0 || false)
console.log(false || 0)

let val = 0;
{
  val = 4;
}
console.log(val);