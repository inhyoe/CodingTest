function solution(arr, n) {
   if (arr.length % 2 == 0)
      arr.forEach((num, ind) => { if (ind % 2 != 0) arr[ind] += n })
   else
      arr.forEach((num, ind) => { if (ind % 2 == 0) arr[ind] += n })

   return arr;
}


function solution3(arr, n) {
   return arr.map((num, ind) =>
      arr.length % 2 === 0
         ? (ind % 2 !== 0 ? num + n : num)
         : (ind % 2 === 0 ? num + n : num)
   );
}

const solution4 = (arr, n) => arr.map((num, ind) =>
   arr.length % 2 === 0
      ? (ind % 2 ? num + n : num)     // 배열 길이가 짝수일 때: 홀수 인덱스에만 n을 더함
      : (ind % 2 ? num : num + n)     // 배열 길이가 홀수일 때: 짝수 인덱스에만 n을 더함
);


2
const solution5 = (arr, n) => arr.map((v, i) => v + (arr.length - i) % 2 * n);

const solution6 = (arr, n) =>
   arr.map((num, ind) =>
      arr.length % 2 !== ind % 2
         ? num + n
         : num
   );
console.log("solution", solution([2, 3, 5, 7], 10))
console.log("solution3", solution3([2, 3, 5, 7], 10))
console.log("solution4", solution4([2, 3, 5, 7], 10))
console.log("solution5", solution5([2, 3, 5, 7, 9], 10))
console.log("solution6", solution6([2, 3, 5, 7, 9], 10))

// let arr = [2, 3, 5, 7]

// arr.map(function (element, index, array) {
//    console.log(element);
//    console.log(index);
//    console.log(array);
//    return element;
// }, 80);
