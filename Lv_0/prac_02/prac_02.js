function solution(num_str) {
   let answer = 0;
   for (let i = 0; i < num_str.length; i++) {
      answer += parseInt(num_str[i], 10)
   }
   return answer;
}
console.log("sol1", solution("123456789")) // 45

const sol2 = (num_str) => {
   // return num_str.split("").reduce((acc, cur) => acc + parseInt(cur)); 2번째 인수를 설정하지 않은 경우 배열 그대로 반영됨.
   return num_str.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}
console.log("sol2", sol2("123456789")) // 45



