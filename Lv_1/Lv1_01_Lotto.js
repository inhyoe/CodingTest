//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
   let max = []
   let min = []
   lottos.sort((a, b) => a - b)
   win_nums.sort((a, b) => a - b)
   let win = []
   lottos.forEach((value, index) => {
      if (win_nums.includes(value) || value === 0) {
         console.log("max", value)
         max.push(true)
      }
      if (win_nums.includes(value)) {
         console.log("min", value)
         min.push(true)
      }
   });
   console.log("min length is ", min.length)
   switch (max.filter(value => value === true).length) {
      case 6:
         win.push(1)
         break;
      case 5:
         win.push(2)
         break;
      case 4:
         win.push(3)
         break;
      case 3:
         win.push(4)
         break;
      case 2:
         win.push(5)
         break;
      case 1:
         win.push(6)
         break;
      default:
         win.push(6)
         break;
   }
   switch (min.filter(value => value === true).length) {
      case 6:
         win.push(1)
         break;
      case 5:
         win.push(2)
         break;
      case 4:
         win.push(3)
         break;
      case 3:
         win.push(4)
         break;
      case 2:
         win.push(5)
         break;
      case 1:
         win.push(6)
         break;
      default:
         win.push(6)
         break;
   }

   console.log("win is", win)
   return win;
}
// 0,0,1,25,31,44
// 1,6,10,19,31,45


function solution(lottos, win_nums) {
   const rank = [6, 6, 5, 4, 3, 2, 1];

   let minCount = lottos.filter(v => win_nums.includes(v)).length;
   let zeroCount = lottos.filter(v => !v).length;

   const maxCount = minCount + zeroCount;

   return [rank[maxCount], rank[minCount]];
}
console.log("return", solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log("return", solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))