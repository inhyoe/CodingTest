//https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
   var answer = [];
   var uniq = new Map()
   keymap.map((value) => {
      for (let i = 0; i < value.length; i++) {
         if (!uniq.has(value[i])) {
            uniq.set(value[i], i + 1)
         } else {
            uniq.set(value[i], Math.min(uniq.get(value[i]), i + 1))
         }
      }
   })
   targets.map((value, ind) => {
      let total = 0
      for (let i = 0; i < value.length; i++) {
         if (uniq.has(value[i])) {
            total += uniq.get(value[i])
         }
         else {
            total = -1
            break
         }
      }

      answer.push(total)
   })
   return answer;
}


console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]))
console.log("=======================")
console.log(solution(["AA"], ["B"]))
console.log("=======================")
console.log(solution(["ABVVAABACD", "CCWBCEFD"], ["VAABC8", "AABB"])) // 3,1,1,2,1,10 = 16

// 탐색하기
// keymap의 경우 n개의 배열이 주어질 수 있음
// 1번 방법 Map을 이용하여 해당 값에 도달하기까지 최소값을 저장 하기
// 2번 방법 target 배열에 값이 있는지 탐색 후 있으면 해당 값을 출력 없으면 -1 출력
// n개의 배열이 몇개있는지 탐색 후 uniq에 키 값 형식으로 저장
// uniq에 저장하는 방식은 키, 인덱스 형식으로 할당 후 중복되는 키 값이 있으면 최소 인덱스를 할당
//




