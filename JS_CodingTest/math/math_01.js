const solution1 = (a, d, n) => {
  if((n - a) % d === 0) {
    return (n - a) / d + 1
  } else {
    return -1
  }
}

console.log(solution1(3, 5, 23))

const solution2 = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const equal = (max - min) / 3

  if(arr.includes(min + equal)) {
    return min + equal * 2
  } else {
    return min + equal
  }
}

console.log(solution2([11, 2, 5]))