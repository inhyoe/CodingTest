function solution(cards1, cards2, goal) {
   let result = "Yes"
   goal.map((val, ind) => {
      if (val === cards1[0]) {
         cards1.shift()
      } else if (val === cards2[0]) {
         cards2.shift()
      }
      else {
         result = "No"
      }
   })
   return result;
}