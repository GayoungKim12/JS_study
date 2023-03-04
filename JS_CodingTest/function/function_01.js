const MAX = (x, y) => {
  return Math.max(x, y);
}

console.log(MAX(1, 10));

const MIN = (numbers) => {
  const realNumbers = numbers.filter((number) => {
    return Number.isFinite(number);
  });
  return Math.min(...realNumbers);
}

console.log(MIN(['0', 1, 10, 1000, 1113, 34555, 'gkdfd', -Infinity]));

const product = {
  id: '1',
  name: '촉촉한 초코칩',
  price: '2000원',
  description: '촉촉하고 달달한 맛',
  ad: function (isSale) {
    return isSale ? `${this.description}이 나는 ${this.name} 한 번 드셔보세요 세일도 하고있어요!` : `${this.description}이 나는 ${this.name} 한 번 드셔보세요`;
  }  
}

console.log(product.ad(false));

console.log(parseInt(1001, 2));

console.log(Number.isFinite('0'));