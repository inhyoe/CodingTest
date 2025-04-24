//https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

// function solution2(k, score) {
//    let min = score[0];
//    let answer = [];


//    answer = score.map((value, index) => {
//       if (index < k) {

//       }
//       if (min > value) {
//          min = value;
//       }
//       return min;
//    });
//    return answer
// }


// // console.log(solution2(3, [10, 100, 20, 150, 1, 100, 200]))

// function solution(k, score) {
//    let min = score[0];
//    let min2
//    let arr = []
//    let sequence = [];
//    // console.log(answer)
//    for (let i = 0; i < k; i++) {
//       arr.push(score[i])
//       if (min > score[i])
//          min = score[i]
//       sequence.push(min)
//       console.log(min)
//    }
//    for (let i = k; i <= score.length; i++) {
//       if (min < score[i]) {

//          min = score.find(value => value > min)
//          console.log("min is ", score.find(value => value > min))
//          sequence.push(score.find(value => value > min))
//       }
//       sequence.push(min)
//    }
//    return sequence

// }
function solution(k, score) {
   const hallOfFame = [];
   const result = [];

   for (let day = 0; day < score.length; day++) {
      // 새로운 점수를 명예의 전당에 추가
      hallOfFame.push(score[day]);
      // 내림차순 정렬
      hallOfFame.sort((a, b) => a - b);
      console.log(hallOfFame)
      // 명예의 전당의 크기를 k로 유지
      if (hallOfFame.length > k) {
         hallOfFame.shift(); // 가장 낮은 점수 제거
      }
      // 최하위 점수 발표
      result.push(hallOfFame[0]);
   }

   return result;
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))

   function solution(k, score) {
      const hallOfFame = [];
      const result = [];

      for (let day = 0; day < score.length; day++) {
         hallOfFame.push(score[day]);
         hallOfFame.sort((a, b) => a - b);
         if (hallOfFame.length > k) {
            hallOfFame.shift();
         }
         result.push(hallOfFame[0]);
      }

      return result;
   }
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))

// [10, 100, 30, 2, 5, 20, 2, 5]

//노트
// k는 명예의 전당에 들어갈 수 있는 수
// score는 매일 발표되는 점수
// 먼저, 반복은 score의 길이를 기준으로 진행해야함
// 일단 answer에는 k개까지는 score을 넣어줘야함.
// 초기값은 score[0]으로 설정
// 1) k값 까지는 그대로 넣어야함 
// 2) min 값을 비교해서 넣어줌
// 3) k값 이후부터는 score[i]값이 min보다 큰경우 min보다 컸었던 이전의 min2값을 sequence에 기록
// 4) min2값을 구하기 위해선, 지금까지 push한 이력에서 min보다 더 큰 수를 찾아야 하고 min2보다 큰 수가 존재해서는 안됨
// 4) score[i]값이 min보다 큰경우 sequence에 기록

// 1. 예외의 경우
// 2. score의 길이가 k보다 작을 경우
// 그냥 모든 경우를 min으로 넣어주면 됨.