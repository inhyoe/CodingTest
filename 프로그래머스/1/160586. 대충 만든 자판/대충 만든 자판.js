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