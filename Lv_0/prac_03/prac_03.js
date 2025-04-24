function solution(num_list) {
   var answer = [];
   num_list.sort((a, b) => a - b)
   for (let i = 5; i < num_list.length; i++) {
      answer.push(num_list[i]);
   }
   return answer;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]))

function solution(num_list) {
   num_list.sort((a, b) => a - b)

   return num_list.slice(5);;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]))