function solution(a, b) {
   return Number(`${a}${b}`) > Number(`${b}${a}`) ? Number(`${a}${b}`) : Number(`${b}${a}`)

   return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
console.log(solution(12, 21))
console.log(solution(78, 87))
console.log(solution(123, 321))
console.log(solution(9, 91))
console.log(solution(89, 8))

