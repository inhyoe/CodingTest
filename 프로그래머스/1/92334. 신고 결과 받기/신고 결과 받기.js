function solution(id_list, report, k) {
   // 각 사용자의 신고당한 횟수를 저장하는 Map
   const reportedCount = new Map(id_list.map(id => [id, 0]));
   // 중복 신고를 방지하기 위한 Set
   const uniqueReports = new Set();
   // 각 사용자가 받을 메일 수를 저장하는 Map
   const mailCount = new Map(id_list.map(id => [id, 0]));

   // 신고 처리
   report.forEach(reportStr => {
      if (!uniqueReports.has(reportStr)) {
         const [reporter, reported] = reportStr.split(' ');
         reportedCount.set(reported, reportedCount.get(reported) + 1);
         uniqueReports.add(reportStr);
      }
   });

   // 메일 발송 대상 처리
   uniqueReports.forEach(reportStr => {
      const [reporter, reported] = reportStr.split(' ');
      if (reportedCount.get(reported) >= k) {
         mailCount.set(reporter, mailCount.get(reporter) + 1);
      }
   });

   // 결과 배열 생성
   return id_list.map(id => mailCount.get(id));
}
