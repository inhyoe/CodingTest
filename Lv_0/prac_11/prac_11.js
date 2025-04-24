function solution(players, callings) {
   // 선수별 현재 순위를 저장하는 객체
   let playerRankings = {};

   // 초기 순위 설정
   players.forEach((playerName, rank) => {
      playerRankings[playerName] = rank;
   });

   // 호출된 선수들의 순위 변경 처리
   callings.forEach((calledPlayer) => {
      const currentRank = playerRankings[calledPlayer];      // 호출된 선수의 현재 순위
      const targetRank = currentRank - 1;                    // 목표 순위 (한 단계 앞)
      const overtakenPlayer = players[targetRank];           // 추월당한 선수

      // 선수 순위 교체
      players[targetRank] = calledPlayer;
      players[currentRank] = overtakenPlayer;

      // 순위 정보 업데이트
      playerRankings[calledPlayer] = targetRank;
      playerRankings[overtakenPlayer] = currentRank;
   });

   return players;
}

console.log(solution(
   ["mumu", "soe", "poe", "kai", "mine"],
   ["kai", "kai", "mine", "mine"]
));