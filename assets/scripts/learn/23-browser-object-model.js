// BOM (브라우저 객체 모델)

// 브라우저 윈도우 객체
// console.log(window) // Window {}

// 모니터 스크린 객체
// console.log(window.screen) // Screen{}
// console.log(screen) // Screen{}

// 로케이션 객체
// console.log(window.location) //Location {}
console.log(location) //Location {}

// 히스토리 객체
console.log(window.history) // History {}

// 도큐먼트 객체
// console.log(window.document) // Document {}
console.log(document) // Document {}


console.dir(document)
console.log(document.compatMode) // 웹 표준 호환 모드인지 확인
console.log(document.activeElement) // focus(초점)가 된 요소가 무엇인지 확인