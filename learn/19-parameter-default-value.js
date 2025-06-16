// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price /*필수값*/, unit /*옵션값*/) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'
  if (unit === undefined) {
    return price + '원'
  }else if(unit === '달러'){
    return '$' + price
  }
}


function getMoney(price /*필수값*/, unit /*옵션값*/) {
  // 위 조건문 코드를 줄여보기
  // 매개변수 타입이 무엇인지 확인하는 방법의 코드
  // if(typeof unit === 'undefined')
  // 조건문 소괄호 안에서 조건이 평가되는 방법의 코드 -> 부정연산자(NOT, !) 이용
  if (!unit) {
    unit = '원'
  }else if(unit === '달러'){
    return '$' + price
  }
}

// 개발자가 명시적으로 반환값 설정
function getMoney(price, unit) {
  if (!unit) unit = '원'
  if (unit === '달러') return '$' + price
  return price + unit

  // 함수는 암묵적으로 undefined 반환
  // return undefined
}



// 선생님 문제풀이
// 함수는 암묵적으로 undefinced를 반환함
// function getMoney(price, unit) {
//   if (unit === undefined) {
//   unit = '원'
// }else if(unit === '$'){
//   return '$' + price
// }
//}


let moneyKR = getMoney(5000 + 2000 + 1500 + 500) // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') // '$80.75'

console.log(moneyKR)
console.log(moneyUS)

console.log(typeof NaN)