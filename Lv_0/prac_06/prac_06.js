function solution(arr1, arr2) {
   const sum = arr1.reduce((prev, cur) => prev + cur, 0)
   const sum2 = arr2.reduce((prev, cur) => prev + cur, 0)
   return arr1.length > arr2.length ? 1
      : arr1.length < arr2.length ? -1
         : sum > sum2 ? 1
            : sum < sum2 ? -1
               : 0
}

console.log(solution([1, 2, 3], [-10, 1, 2, 3, 4]))
console.log(solution([1, 2, 3], [1, 2, 3]))
console.log(solution([1, 2, 3, 4, 5], [1, 2, 3]))

