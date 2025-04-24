answer = score.map((value) => {
   if (min > value) {
       min = value;
   }
   return min;
});