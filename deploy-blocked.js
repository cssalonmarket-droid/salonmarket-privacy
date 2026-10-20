// 배포 차단 가드 (firebase.json predeploy 훅에서 실행)
// 이 저장소(salonmarket-privacy)는 더 이상 직접 배포하지 않습니다.
// 같은 Firebase Hosting 사이트(salon-market-17e6b = salonmarket.kr)를 덮어쓰면
// 통합본(랜딩+하위페이지+약관)이 사라져 404가 발생합니다. (2026-06-21 사고)
console.error('\n' +
  '⛔  배포가 차단되었습니다 — salonmarket-privacy 에서는 배포하지 마세요.\n' +
  '\n' +
  '   웹 배포는 반드시 아래에서만 진행하세요:\n' +
  '     cd C:\\dev\\beauty_dealer\n' +
  '     firebase deploy --only hosting\n' +
  '\n' +
  '   사유: salonmarket.kr(사이트 salon-market-17e6b)는 beauty_dealer/landing/public\n' +
  '         단일 출처로 통합되었습니다. 이 저장소에서 배포하면 랜딩·하위페이지·약관이\n' +
  '         전부 덮어써져 404가 됩니다.\n' +
  '\n' +
  '   꼭 이 저장소에서 배포해야 한다면(비권장): firebase.json 의 hosting.predeploy 를\n' +
  '   임시 제거한 뒤 진행하고, 작업 후 반드시 복구하세요.\n');
process.exit(1);
