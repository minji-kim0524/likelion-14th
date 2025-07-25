// -------------------------------------------------------------------------------
// 스코프(Scope) 범위
// - 코드 영역(범위)
// - 전역(전체 영역: global scope)
// - 지역(일부 영역: local scope)

// 호이스트(Hoist) 끌어올리다
// - 무엇을 끌어올리나? -> [함수 선언] 을 [코드 작성영역의 가장 상단] 으로 끌어올린다.
// - 
// - JavaScript 표준

// -------------------------------------------------------------------------------

// 호이스트(Function Hoist)
// - 사람들이 현상(벌어진 일)만 보고 그 느낌을 표현한 말에 불과함

// - 컴퓨터 (JavaScript 엔진 관점) : 코드 스캔 후, 함수 선언을 먼저 메모리에 등록한다. 그리고 코드를 처리한다.
// - 인간 (개발자 관점) : "작성된 순서대로 코드가 실행될 것이다."


// 선언된 함수는 코드를 작성하는 영역의 가장 상위로 끌어올려진 것처럼 작동된다.
함수()

// 함수 선언(Function Declaration)
// 컴퓨터 메모리에 함수가 기억된다.
function 함수() {
  console.log('함수가 실행되었어요')
}


// 함수 실행
// 컴퓨터 메모리에 기억된 함수 이름을 통해 코드를 실행한다.

// -------------------------------------------------------------------------------
// var 변수 선언 호이스트 현상
// -------------------------------------------------------------------------------
// var 변수 선언
// console.log(1, 마이네임) // undefined

// var 마이네임 = '민쥐'

// 변수 선언 호이스트
// 마치 호이스트처럼 보여요.
// 예측된 결과

// var 변수 선언은 마치 끌어올린 것처럼 보이는데
// 선언부만 끌어올려진 것처럼 작동한다.
// 값을 할당하는 부분은 원래의 위치에서 실행된다.
// var 마이네임

// console.log(2, 마이네임) 

// 마이네임 = '민쥐'

// -------------------------------------------------------------------------------
// let 변수, const 상수 선언 호이스트 현상 -> 일어나지 않음!!
// -------------------------------------------------------------------------------

// console.log(1, 마이네임)

// let 변수 선언
// let 마이네임 = '민쥐'

// console.log(2, 마이네임)

// const 상수 선언
// const 마이네임 = '민쥐'

// console.log(2, 마이네임)

// -------------------------------------------------------------------------------
//  함수를 만드는 2가지 방법
// 1. 함수 선언 (Function Declaration)
// 2. 함수 표현식 (Function Expression)
// -------------------------------------------------------------------------------

// 함수선언
function look(who) {
  console.log(who + '를(을) 보다')
}

// 함수 (표현)식
// 자바스크립트는 함수를 값(value)으로 취급함
// 변수 = 값 할당
// 즉, 변수 = 함수 할당가능!
// let 보다 = 'see' // string 
// let 보다 = 1001 // number
// let 보다 = true // boolean
// let 변수 = 함수
let 보다 = function (누구) {
  console.log(누구 + '를(을) 보다')
}

보다('공무원님')
look('선생님')
보다('형사님')

// 함수 선언, 함수 표현식 그리고 호이스트 현상 비교

// var 보다 // [undefined] -> 함수처럼 실행시킬 수 없음 -> 타입오류
// console.log(보다) // undefined

// let 보다 -> 참조오류

// 함수 작성법은 2개 비교
// 1. 함수 선언 (function 키워드로 시작, 호이스트 현상O)
// 2. 함수 표현식 (변수에 함수 값을 할당, JS는 함수를 값으로 취급 / 호이스트 현상 X)

let myFunction = function mine() {
  console.log('this is a mine function name')
  console.log(mine)
}

myFunction()