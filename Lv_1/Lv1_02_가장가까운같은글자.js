function solution(s) {
   // 해결하기 위해서
   // 자신의 글자를 기준으로 글자가 어디있는지 탐색
   let arr = []
   let newArr = [...s]
   let selectedObj = {}
   newArr.forEach((value, index) => {

      console.log(selectedObj)
      if (selectedObj.item != value) {
         console.log("onrunning")
         selectedObj[value] = index
         // break
      }
      console.log(selectedObj)
   }

   )
}

console.log(solution("banana"))

function solution(s) {
   // 해결하기 위해서
   // 자신의 글자를 기준으로 글자가 어디있는지 탐색
   let arr = []
   let newArr = [...s]
   let selectedObj = {}
   newArr.forEach((value, index) => {
      if (selectedObj[value] !== undefined) {
         arr.push(index - selectedObj[value]);
      } else {
         arr.push(-1);
      }
      selectedObj[value] = index;
   });
   return arr
}

console.log(solution("banana"))