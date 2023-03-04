let nums = [1, 2, 3, 4, 5]
let use_for_loop = []

const use_map = nums.map((num) => num*2)
nums.map((num) => nums*2)
console.log(use_map)
console.log(nums)

const Milk = function (flavor, price, size = '200ml') {
  console.log(new.target)
  if(!new.target) return new Milk(flavor, price, size)
  this.flavor = flavor
  this.price = price
  this.size = size
}

const strawberryMilk = Milk('strawberry', 1000, '500ml')
const bananaMilk = new Milk('banana', 1000)

console.log(strawberryMilk)
console.log(bananaMilk)