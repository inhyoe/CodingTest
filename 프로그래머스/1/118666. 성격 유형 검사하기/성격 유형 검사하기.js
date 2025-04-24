function solution(survey, choices) {
   const surveyOrder = [
      ["R", "T"],
      ["C", "F"],
      ["J", "M"],
      ["A", "N"],
   ];
   const surveyScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

   survey.forEach((val, idx) => {
      const type = val.split("");

      if (choices[idx] < 4) {
         surveyScore[type[0]] += 4 - choices[idx];
      }
      if (choices[idx] > 4) {
         surveyScore[type[1]] += choices[idx] - 4;
      }
   });
   console.log(surveyScore)
   return surveyOrder.map((val, idx) => {
      if (surveyScore[val[0]] < surveyScore[val[1]]) {
         return val[1]
      }
      return val[0]
   }).join("")
}