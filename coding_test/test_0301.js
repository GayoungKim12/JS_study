// 문제 1번
function solution1(n, s, t) {
    const array = new Array(n).fill('.')
    const strArr = array.concat(s.split(''))

    const board = []

    for(let i = t; i < t + n; i++) {
        let index = i % strArr.length
        board.push(strArr[index])
    }

    return board.join('')
}

// 문제 3번

function solution3(s) {
    return s.split(/[.,?! ]/)
    .filter((char) => char !== '')
    .map((string) => string.split('').reverse().join(''))
}

console.log(solution3(' Hello,, world? !'))