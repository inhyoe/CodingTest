function solution(arr1, arr2) {
   return arr1.length > arr2.length ? 1
      : arr1.length == arr2.length ? 0
         : -1;
}


console.log(solution([1, 2, 3], [1, 2, 3, 4]))
console.log(solution([1, 2, 3], [1, 2, 3]))
console.log(solution([1, 2, 3, 4, 5], [1, 2, 3]))

