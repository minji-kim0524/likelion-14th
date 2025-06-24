function logger(logMessage) {
  console.log('로그 메세지:',logMessage)
}

logger('실습을 통한 연습은 언제나 옮습니다.')

// px -> rem 단위변경 함수
// 어떤 기능 작성?
// px -> rem(:root + em) 단위 변경 가능
// root element html 요소의 글자 크기(기준) -> 16
// 16px / 16px = 1rem


function pxToRem(px) {
  // px size / root element size(base) + 'rem'
  let rem = px / 16 + 'rem'
  return rem
}

// let pxValue = pxToRem(189)
console.log(pxToRem(12))
console.log(pxToRem(14))
console.log(pxToRem(16))
console.log(pxToRem(20))
console.log(pxToRem(24))
console.log(pxToRem(48))
console.log(pxToRem(225))


// rem -> px 단위변경 함수
function remToPx(rem) {
  let px = rem * 16 + 'px'
  return px
}

console.log(remToPx(0.75))
console.log(remToPx(0.875))
console.log(remToPx(1))

// 피자 한 판 가격 계산 함수
function pizzaPrice(price, slice) {
  let totalPrice = price * slice
  return totalPrice
}

console.log(pizzaPrice(5000,2) + '원')

// 주차요금 계산 함수
function parkingPrice(hours) {
  return 1000 * hours
}

console.log(parkingPrice(2) + '원')

// -----------------------------------------------------

const 주차요금계산 = function(주차시간) {
  return 주차시간 * 1000 + '원'
}

console.log(주차요금계산(1.5))

// -----------------------------------------------------

const HOUR_PARKING_FEE = 1000

let 주차요금계산법 = function(주차시간) {
  return 주차시간 * HOUR_PARKING_FEE + '원'
}

console.log(주차요금계산법(1.5))

// 짝수인지 확인하는 함수
function checkEven(num) {
  
}

let 짝수인지확인하는함수 = function(수) {
  // 수 % 2 -> (0 또는 1)
  // 수 % 2 == 0 -> (true 또는 false)
  // 비교 연산자 (x, y 비교한다)
  return 수 % 2 == 0
}

console.log(짝수인지확인하는함수(2))

// 비교 연산자 ==

// 생일 축하 메세지 출력 함수
function birthdayMessage(name) {
  return name + '생일 축하합니다🎉'
}

console.log(birthdayMessage('서영'))

// 올해 남은 날짜 계산 함수

const NUMBER_OF_DAYS_OF_YEAR = 365

function 올해남은날짜계산(현재날짜의일수) {
  return NUMBER_OF_DAYS_OF_YEAR - 현재날짜의일수
}

// 세금 포함 가격 계산 함수

const VAT = 1.1

function includeTaxPrice(price) {
  return price * VAT
}

// 나이가 성인인지 판별하는 함수
// 나이가 성인이면 true 반환, 나이가 미성년이면 false 반환
// 비교 연산자
// x == y (같다)
// x > y | x >= y (크다 | 크거나 같다)


function ageForAdult(age) {
  return age >= 19
}

const 성인_나이_기준 = 19

function 성인나이인가요(나이) {
  let 성인나이인지아닌지여부 = 나이 >= 19 // true or false
  return 성인나이인지아닌지여부
}