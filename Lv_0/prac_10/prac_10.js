function solution(arr, query) {
   query.forEach((num, ind) => {
      if (ind % 2 == 0) {
         arr.splice(num + 1)
      } else {
         arr.splice(0, num)
      }
   })
   return arr
}

// function solution(arr, query) {
//    query.forEach((q, i) => {
//       if (i % 2 === 0) {
//          // 짝수: q부터 끝까지 제거
//          arr.splice(q);
//       } else {
//          // 홀수: 0부터 q까지(q+1개) 제거
//          arr.splice(0, q + 1);
//       }
//    });
//    return arr;
// }
let a = [0, 1, 2, 3, 4, 5]
// console.log(a.indexOf(1))
// console.log("배열 : ", a)
// console.log(a.splice(0, a.indexOf(1)))
// console.log("배열 : ", a)
console.log("솔루션", solution([0, 1, 2, 3, 4, 5], [4, 1, 2]))
// console.log(a)
// [0,1,2,3,4]
// [1,2,3,4]
// 

function solution(arr, query) {
   query.forEach((v, i) => {
      if (i % 2) {
         arr = arr.slice(v);
      } else {
         arr = arr.slice(0, v + 1);
      }
   })
   return arr;
}