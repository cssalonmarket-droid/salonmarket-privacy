# ⛔ 이 저장소에서 배포하지 마세요 (salonmarket-privacy)

`firebase deploy`는 **차단**되어 있습니다 (`firebase.json`의 `hosting.predeploy` → `deploy-blocked.js` → exit 1).

## 왜?
`salonmarket.kr`(Firebase Hosting 사이트 `salon-market-17e6b`)는 이제
**`C:\dev\beauty_dealer\landing\public` 단일 출처로 통합**되었습니다.
랜딩 + 모든 하위 페이지(`/guide /auction /calculator /faq /closure-guide /closure-cases /mou`)
+ 법적 페이지(`/terms /privacy /deletion`)가 거기서 함께 배포됩니다.

이 저장소(`salonmarket-privacy`)에서 배포하면 같은 사이트를 **덮어써서**
하위 페이지와 약관이 전부 404가 됩니다. (2026-06-21 실제 발생)

## 그럼 어디서 배포하나요?
```
cd C:\dev\beauty_dealer
firebase deploy --only hosting
```

## 이 저장소의 역할
- **백업 / 참고용**으로만 보관합니다. 콘텐츠 개정도 `beauty_dealer\landing\public`에서 직접 하세요.

## 정말 여기서 배포해야 한다면 (비권장)
`firebase.json`의 `hosting.predeploy` 항목을 임시로 제거 → 배포 → **작업 후 반드시 복구**.
