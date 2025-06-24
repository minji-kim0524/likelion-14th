console.log('함수(Function)')

// 함수란?
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// 함수 이름 drawWater [
//  1. 빈 양동이 가져오기
//  2. 양동이 들고 우물로 이동하기
//  3. 우물에서 물 길어오기
//  4. 집으로 귀가하기
// ]

// 함수 부르기(call)
// drawWater 함수 부르기(call)

// 1. 냄비를 꺼낸다.
// 2. 냄비에 물을 받는다.
// 3. 물을 받은 냄비에 건더기 스프를 넣는다.
// 4. 가스레인지 불을 켠다.
// 5. 물과 건더기 스프를 넣은 냄비를 불위에 올린다.

// 함수 선언 (Function Declaration) 구문
function 함수이름() {
    console.log('함수 내부에서 처리할 작업 기술')
}

function 물길러가기() {
    // console.groupCollapsed('물 길러가자!!')
    console.group('물 길러가자!!')
      console.log('1. 빈 양동이 가져오기')
      console.log('2. 양동이 들고 우물로 이동하기')
      console.log('3. 우물에서 물 길어오기')
      console.log('4. 집으로 귀가하기')
    console.groupEnd()
}

// 함수 사용 (Call function)
// 목적 : 재사용성(Reusability)
함수이름()
물길러가기()
물길러가기()

// 동사형태
// 함수를 "호출(실행)한다"라는 의미로 규칙을 약속하자 -> 함수기능() 

// 함수이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름입니다.
// playMusic()
// stopMusic()
// pauseMusic()

// 적절하지 않은 함수 이름
// 예약어
// function return() {}
// function break() {}
// function continue() {}
// function class() {}
// function for() {}

// ------------------------------------------------------------------------------

// 함수 배개변수 (Function Parameters)

// 함수 밖에 있는 변수 [전역] 변수 (global scope variables)
// 코드실행 범위 어디서나 접근가능
// let year = 4027

// 함수 선언
function writeDiary(연도, 월, 일, 장소) {
  // 함수이름 옆 () 안에 선언된 변수를 특별히 매개변수라 부른다.
  // year /*기본값 defined */
  // month /*기본값 defined */
  // day /*기본값 defined */
  // location /*기본값 defined */

  console.log(연도, 월, 일)

  // 함수 내부에 선언된 변수 [지역] 변수 (local scope variables)
  // 함수 안에서 사용

  // 연도(year)
  let year = 2025
  // 월(month)
  let month = 6
  // 일(day)
  let day = 10

  // let location = '롯데 타워'
  // year = 2026

  // 변수 + 문자 = 문장
  // 변수('문자') + 변수('문자') = 문자 연결
  console.log('몇' + '년' + '몇' + '월' + '몇' + '일에 일기를 쓴다')
  console.log(연도 + '년' +  월 + '월' + 일 + '일에 일기를 쓴다')
  console.log(연도 + '년' +  월 + '월' + 일 + '일에' + 장소 + '에 다녀온 일기를 쓴다')
}

// 함수 호출(실행)
writeDiary()
writeDiary(2025, 6, 10, 'N타워') // 인수(arguments)
writeDiary(2025, 7, 1, '광안리 해수욕장')
writeDiary(2025, 10, 30, '원주 디자인 뮤지엄')

// 변수 또는 매개변수에 아무런 값이 할당되지 않을 경우 기본값은 `undefined` 이다.
// let day // undefined
// console.log(day) // undefined

// 매개변수(pafameters)에 아무런 값이 할당되지 않을 경우 기본값은 `undefined` 이다.
// writeDiary()

// -------------------------------------------------------------------------------
// 함수의 반환문(return)
// -------------------------------------------------------------------------------

function 더하기(숫자1, 숫자2) {
  // 브라우저 콘솔 패널에 숫자1+ 숫자2 계산된 값이 기록된다.
  console.log('콘솔 패널에 출력된 계산 결과 =', 숫자1 + 숫자2)
  // 함수에서 처리(계산)된 값을 반환하려면 return 키워드가 필요하다.
  return 숫자1 + 숫자2
}

// 함수(기능)가 실행되어 값을 반환한다면 그 값을 변수에 기억하려 한다.
let 결과값 = 더하기(10, 9) 
console.log('결과값 =', 결과값)

let 결과값2 = 더하기(결과값, 결과값)
console.log(결과값2)

// 함수는 실행될 수 있다.
// 함수는 실행되면 결과값을 반환한다.
// 값을 반환할때 `return` 키워드를 사용한다.

function 빼기(숫자1, 숫자2) {
  // 숫자1 = 10
  // 숫자2 = 4
  // 처리(계산)
  // 지역변수를 선언하여 계산된 값을 할당해보자
  let 결과값 = 숫자1 - 숫자2

  // 계산된 결과값을 반환
  return 결과값
}

let 계산된값 = 빼기(10, 4) // 10 - 4 = 6
console.log('계산된값=', 계산된값)
console.log(빼기(10,4))
console.log(빼기(24,6))
console.log(빼기(-9,9))
console.log(빼기(100,-24))
console.log(빼기(66,33))
console.log(빼기(10_000,50))

// -------------------------------------------------------------------------------

// console.log() 로 기록한다는 건 -> 패널에 출력만함

// 함수가 계산된 값을 반환한다는 건

function 곱하기(숫자1, 숫자2) {
  let 결과값 = 숫자1 * 숫자2 // 계산된 값
  console.log(결과값)
  // 명시적 결과 반환
  // return 결과값

  // 암묵적 결과 반환
  // return undefined
}

function 화면에결과그리기() {
  const 화면에그릴숫자값 = 곱하기(10, 20)
  document.write(화면에그릴숫자값)
}

화면에결과그리기()
