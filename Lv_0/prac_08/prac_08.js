function solution(n) {
   // 1) n x n 빈 배열 만들기
   const result = Array.from({ length: n }, () => Array(n).fill(0));

   // 2) 경계 초기값 설정
   let top = 0;
   let bottom = n - 1;
   let left = 0;
   let right = n - 1;

   let num = 1;         // 채워 넣을 숫자 1부터 시작
   const max = n * n;   // 마지막 숫자

   // 3) 경계가 교차할 때까지 반복
   while (num <= max) {
      // (1) 왼→오: row = top, col = left..right
      for (let j = left; j <= right && num <= max; j++) {
         result[top][j] = num++;
      }
      top++;

      // (2) 위→아래: col = right, row = top..bottom
      for (let i = top; i <= bottom && num <= max; i++) {
         result[i][right] = num++;
      }
      right--;

      // (3) 오→왼: row = bottom, col = right..left
      for (let j = right; j >= left && num <= max; j--) {
         result[bottom][j] = num++;
      }
      bottom--;

      // (4) 아래→위: col = left, row = bottom..top
      for (let i = bottom; i >= top && num <= max; i--) {
         result[i][left] = num++;
      }
      left++;
   }

   return result;
}

console.log(solution(3))
console.log(solution(4))
console.log(solution(5))
console.log(solution(6))
