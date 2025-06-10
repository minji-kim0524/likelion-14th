// #실습

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
const HOURS_IN_DAY = 24
console.log('HOURS_IN_DAY =', HOURS_IN_DAY)
//     2. "물의 어는 점은 섭씨 0도"
const frozenTemperature = 0
//     3. "삼각형 내각의 합은 180도"
const sumTriangleDegree = 180
//     4. "지구의 중력 가속도는 9.8 m/s²"
const earthGravity = 9.8
// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0
console.log(sum)
//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.

// [case1]
let num1 = 300
let num2 = 50
console.log(num1)
console.log(num2)

// [case2]
// let num1, num2
// num1 = 300
// num2 = 50

// [case3]
// let num1 = 300, num2 = 50

// [case4]
// let num1 = 300
//     num2 = 50

//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2
console.log(sum)
// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.

// 사람 이름
let personName = '김민지'

// 나이
let age = 36

// 오늘의 기온
let todayTemperature = '30도'
console.log('todayTemperature =', todayTemperature)

// 장바구니 상품 갯수
let cartItemCount = 12

// 집 주소
let homeAddress = '서울특별시 성북구 미아동 ...'

// 현재 시간
let currentTime = '오후 2:37'

// 로그인 상태
let isLoggedIn = false
console.log('isLoggedIn =', isLoggedIn)

isLoggedIn = true
console.log('isLoggedIn =', isLoggedIn)

// 피자 가격
let pizzaPrice = 22_000

// 학생 수
let studentCount = 43