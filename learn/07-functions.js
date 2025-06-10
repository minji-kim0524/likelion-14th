console.log('함수(Function)')

// 함수란?
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// 함수 이름 [
//  1. 빈 양동이 가져오기
//  2. 양동이 들고 우물로 이동하기
//  3. 우물에서 물 길어오기
//  4. 집으로 귀가하기
// ]

// 함수 부르기(call)

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

// 함수 밖에 있는 변수 [전역] 변수
// 코드실행 범위 어디서나 접근가능 (global scope variables)
let year = 4027

// 함수 선언
function writeDiary() {
  // 함수 내부에 선언된 변수 [지역] 변수 (local scope variables)
  // 함수 안에서 사용
  // 연도(year)
  let year = 2025
  // 월(month)
  let month = 6
  // 일(day)
  let day = 10

  // year = 2026

  // 변수 + 문자 = 문장
  // 변수('문자') + 변수('문자') = 문자 연결
  console.log('몇' + '년' + '몇' + '월' + '몇' + '일에 일기를 쓴다')
  console.log(year + '년' + month + '월' + day + '일에 일기를 쓴다')
}

// 함수 호출(실행)
writeDiary()