const recursive = (num) =>{
  if(isNaN(num)) return;
  if (Number(num) === 0) return 0;
  const curr = recursive(num - 1);
  return curr + num;
}

console.log(recursive(3));

const factorial = (num) =>{
  if(isNaN(num)) return;
  if (Number(num) === 0) return 1;
  const curr = factorial(num - 1);
  return curr * num;
}

console.log(factorial(5));