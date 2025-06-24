console.log("JavaScript 모듈"); // this is a javascript module file

let moduleVariable = '모듈 변수'

// 전역을 오염시키는 것은 나쁘다.
// type=module 로 설정하게되면, 외부에 공개되지않고 보호가 됨 -> 변수 선언을 let이 아니라 var로 하더라도 전역에서 접근 불가능