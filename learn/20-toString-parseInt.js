// --------------------------------------------------------------------------
// 📌 (데이터타입).toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
//   2 -> 2진수로 변경하면? 8진수로 변경하면? 16진수로 변경하면?
// --------------------------------------------------------------------------

// 타입 변경
// console.log('안녕!'.toString())
// console.log((1004).toString())
// console.log((true).toString())
// console.log((false).toString())
// console.log((undefined).toString())
// console.log((null).toString())

let n = 255 // 10진수

// 10진수 -> 2진수 변경
console.log(n.toString(2)) // 컴퓨터가 알아듣는 이진수

// 10진수 -> 16진수 변경
console.log(n.toString(16)) // 컴퓨터가 알아듣는 16진수

console.log(n.toString(8)) // 컴퓨터가 알아듣는 8진수


// 10진수를 16진수(hex)로 변경하는 함수 작성
// 1. 함수 기능 고민 (10진수.toString(16))
// 2. 적절한 함수 이름 작성 (toHex)
// 3. 함수 기능 구현
// 4. 반환값 설계 (16진수 문자열)
// 5. 테스트 (함수 호출 정상 작동 검사)

function toHexadecimal(n) {
  return n.toString(16)
}

// const toHexadecimal = n => n.toString(16)

console.log(toHexadecimal(255) === 'ff')

// 선생님 문제풀이
// 10진수를 16진수로 변경하는 함수 작성
// 1. 함수 기능 고민 (10진수.toString(16))
// 2. 적절한 함수 이름 작성 (toHex)
// 3. 함수 기능 구현
// 4. 반환값 설계 (16진수 문자열)
// 5. 테스트 (함수 호출 정상 작동 검사)

// const toHex = n => n.toString(16) // 화살표함수 사용방법

// --------------------------------------------------------------------------
// 📌 Number.parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경 -> parseInt 사용
// --------------------------------------------------------------------------

// 단위 제거


// 단위 제거 함수 작성
// const delelteUnit = m => parseInt(('250px'))

function delelteUnit(m) {
  return parseInt(m)
}

console.log(delelteUnit('250px'))

// 2진수 문자열 -> 10진수 변경
console.log(parseInt('10', 2 ))
console.log(parseInt('100', 2 ))

// 16진수 문자열 -> 10진수 변경
console.log(parseInt('00', 16 ))
console.log(parseInt('80', 16 ))
console.log(parseInt('a0', 16 ))
console.log(parseInt('a1', 16 ))
console.log(parseInt('ae', 16 ))
console.log(parseInt('ff', 16 ))

// 16진수 문자열을 10진수로 변경하는 함수 작성
function toDecimal(p) {
  return parseInt(p, 16)
}

console.log(toDecimal('ff'))