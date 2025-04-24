function solution(rank, attendance) {
   let arr = []
   attendance.map((cur, ind) => cur ? arr.push(rank[ind]) : null)
   arr.sort((a, b) => a - b)
   // console.log("rank is ", rank)
   console.log(arr)
   // console.log(rank.indexOf(arr[0]))
   // console.log(rank.indexOf(arr[2]))
   return 10000 * rank.indexOf(arr[0]) + 100 * rank.indexOf(arr[1]) + rank.indexOf(arr[2])
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]))
console.log(solution([10, 2, 3, 4, 5, 6, 7], [false, true, true, true, true, true, true]))
console.log(solution([1, 2, 3, 4, 10, 6, 7], [false, true, true, true, true, true, true]))
console.log(solution([1, 2, 3, 4, 5, 10, 7], [false, false, false, true, false, true, true]))
