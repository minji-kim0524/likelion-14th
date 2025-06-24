// ---------------------------------------------------------------------------------
// 기본 타입(Primitive Types, 간단)
// ---------------------------------------------------------------------------------

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

// 객체 타입(Object Types, 복잡)
// 1. Object - {} 객체
// 2. Function - function 함수이름() {} | function() {} | () => {} 함수
// 3. Array - [] 배열

// ---------------------------------------------------------------------------------
// JavaScript 객체 (Object)
// ---------------------------------------------------------------------------------

// 객체 생성자(Constructor)를 사용해 객체 생성
// const 커피 = new Object()

// 커피.이름 = '아메리카노'
// 커피.브랜드 = '스타벅스'
// 커피.용량 = '600ml'


// 객체 리터럴을 사용해 객체 정의 (쉬운 방법)
const 커피 = {
  용량: '600ml',
  브랜드: '스타벅스',
  이름: '아메리카노'
}

const 국어사전 = {
  결제: '대금을 주고받아 매매 당사자 사이의 거래 관계를 끝맺는 일',
  결재: '결정할 권한이 있는 상관이 부하가 제출한 안건을 검토하여 허가하거나 승인',
}


console.log(국어사전)

const myDesktop = {
  processor: '2.5 GHz Intel Core i5',
  memory: '16GB',
  SSD: '466GB'
}

console.log(myDesktop)

const 객체 = {
  숫자: 101,
  문자: '안녕!',
  불리언: false,
  널: null,
  언디파인드: undefined,
  심볼: Symbol('객체'),
  빅인트: 910n,
  배열: [],
  객체: {},
  함수: () => {}
}

// const h1 = {
//   fontWeight: 200,
//   fontSize: '2.65rem'
// }



const h1 = {
  'font-weight': 200,
  'font-size': '2.65rem',
  'color': 'white'
}

const h1Camel = {
  fontWeight: 500,
  fontSize: '1rem',
}

// 개발자의 목적
// 1. 객체 생성
// 2. 숫자 생성

let myNum

// 숫자 리터럴
// 개발자가 원하는 일
// myNum = 2025

// 숫자 객체 (생성자는 객체를 생성할 때 사용)
// 자바스크립트가 하는 일
myNum = new Number(2025)

console.log(myNum.valueOf())

// 자바스크립트에서 객체를 생성하는 방법
// 생성자 함수를 사용해 객체를 생성 (어렵네...)
// const heading1 = new Object()
// heading1['font-weight'] = 200
// heading1['font-size'] = '2.65rem'


// 객체 리터럴을 사용 (쉽게 만들고 싶은데...)
// const heading1 = {
//   'font-weigth': 200,
//   'font-size': '6.25rem'
// }

// 결과


// 객체 속성 삭제(Delete)
// delete 함수이름[속성이름]

// 객체의 속성(Object's Properties)

// 객체의 메서드(Object's Methods, 객체의 속성 중 함수(동사)형태의 것을 특별히 매서드라고 부름)


// 메서드 정의 (매개변수 포함)
macbookPro.playMusic = function(songTitle) {
  return '"' + songTitle + '" 재생을 시작합니다. 🎵'
}

// 메서드 사용 (함수처럼 호출, 객체를 통해 메서드에 접근)
console.log(macbookPro.playMusic('첫 눈처럼 너에게 가겠다.'))

// 함수의 타입은?
// JavaScript 함수는 객체이다.
// 객체는 값이다. 함수는 객체다. 그러니까 함수는 값이다.

function likeLion() {
  console.log('우리는 멋자 14기!')
}

likeLion.order = 14

console.log(likeLion.order)

delete likeLion.order

console.log(likeLion.order)


// 객체의 특성
