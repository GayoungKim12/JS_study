function solution (s) {
  let arr = [];
  if(Number.isInteger(Number(s))) {
    arr = s.split('').sort((a, b) => a - b)
  }
  if(Number.isNaN(Number(s))){
    s = s.toLocaleLowerCase();
    arr = s.split('').sort((a, b) => a.localeCompare(b))
  }
  const set = [...new Set(arr)];
  const answer = []

  for(const num of set) {
    const filter = arr.filter(str => str === num)
    answer.push(filter.length)
  }

  const max = Math.max(...answer)

  return set[answer.indexOf(max)]
}

console.log(solution('dkfjlksdjfljaaaFFFFFFaskddddd'))
console.log(solution('309489028350024945050'))
console.log(solution('aaa555'))