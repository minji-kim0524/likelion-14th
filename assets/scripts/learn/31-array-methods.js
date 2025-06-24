// 배열의 메서드

const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자']


// 배열 원소 내부에 기본 타입만 포함된 경우
// .indexOf()

// .findIndex()
// 배열 원소 내부에 객체 타입이 포함된 경우



// 배열 항목 위치(index) 찾기(find)
let 함수_인덱스, 비교_연산자_인덱스

함수_인덱스 = JS_학습_주제.indexOf('함수')
console.log('함수_인덱스 =', 함수_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교')
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교연산자')
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교 연산자')
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)

// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?

const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지']

// indexOf() 메서드가 반환한 값이 -1 이거나 또는 -1보다 크다면? 그 값을 true이다.
console.log(fruitBasket.indexOf('패션') > -1)
console.log(fruitBasket.indexOf('패션후르츠') > -1)
console.log(fruitBasket.indexOf('애플망고') > -1)
console.log(fruitBasket.indexOf('워터멜론') > -1)
console.log(fruitBasket.indexOf('오렌지') > -1)

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?
function hasItem(fruitBasket, name) {
  if (fruitBasket.indexOf(name) > -1) {
    return true
  }else {
    return false
  }
}

// 선생님 코드
// function hasItem(배열, 값) {
//   return 배열.indexOf(값) > -1
// }

console.log(hasItem(fruitBasket, '패션')) // 반환값: false
console.log(hasItem(fruitBasket, '오렌지')) // 반환값: true

// indexOf() 메서드 대신 includes() 메서드 활용
console.log(1, fruitBasket.includes('워터멜론'))
console.log(2, fruitBasket.includes('수박'))

const 멋사14기_수강생 = [
  {이름: '홍민영'},
  {이름: '윤정화'},
  {이름: '허시온'},
]

// 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 가능하지 않음
// console.log(멋사14기_수강생.indexOf({이름: '윤정화'}))
console.log(멋사14기_수강생.findIndex((x) => {
  console.log(x.이름)
})) 

// ----------------------------------------------------------
// 배열에 항목 추가방법(3가지)

console.log(멋사14기_수강생)

// 1. 시작 위치에 새 항목 추가 unshift()
{
  const result = 멋사14기_수강생.unshift({이름: '차지현'}) // 반환값: 배열의 length
console.log(result, 멋사14기_수강생)
}

{
  console.log(JS_학습_주제.unshift('디버깅', '린터', '배열 메서드'))
  console.log(JS_학습_주제)
}

// 2. 끝 위치에 새 항목 추가 push()
{
  const endAdd = 멋사14기_수강생.push('장효정')
  console.log(endAdd)
  console.log(멋사14기_수강생)
}

{
  JS_학습_주제.push('.indexOf()', '.findIndex()', '.at()', '.unshift()', '.push()')
  console.log(JS_학습_주제)
}

// 3. 중간 어딘가 새 항목 추가 (나중에 진행)

// ----------------------------------------------------------
// 배열에 항목 제거방법(3가지)
const counts = [101, 201, 301, 501]
console.log({counts})

// ECMAScript 2015
// 객체 표기 방법 단축

// 1. 처음 위치 항목 제거 shift()
const removedFirstItem = counts.shift()
console.log({removedFirstItem})
console.log({counts})

// 여러 항목을 맨 앞에서 순차적으로 제거
console.log(멋사14기_수강생)

const cha = 멋사14기_수강생.shift()
const hong = 멋사14기_수강생.shift()

console.log(cha)
console.log(hong)
console.log(멋사14기_수강생)

// 2. 끝 위치 항목 제거 pop()
console.log(멋사14기_수강생)

const jang = 멋사14기_수강생.pop()
const heo = 멋사14기_수강생.pop()


console.log(jang)
console.log(heo)
console.log(멋사14기_수강생)


const numbers = [9, 10, 3, 4, 7, 8]
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]

// numbers.shift()
// numbers.shift()
numbers.splice(0, 2)
numbers.splice(0, 0, 1, 2)

console.log(numbers)

// numbers.pop()
// numbers.pop()
numbers.splice(numbers.length - 2, 2) // [1, 2, 3, 4]
numbers.splice(numbers.length, 0, 5, 6)

// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers) // [1, 2, 3, 4, 5, 6]

console.log(numbers)

numbers.unshift(1, 2)
console.log(numbers)

numbers.push(5, 6)
console.log(numbers)

// ---------------------------------------------------------------
// 배열 중간 위치 어딘가에 새 항목 추가 또는 삭제 splice() : 추가/삭제/교체가능

// 중간에 포함된 항목을 삭제
// 배열.splice(시작 인덱스, 삭제할 갯수)
// const removedItems = numbers.splice(0, 2)
// console.log(removedItems)
// console.log(numbers)
console.log(numbers)
const removedItems = numbers.splice(2, 2)
console.log(removedItems)
console.log(numbers)

// 중간에 포함된 항목을 삭제하고, 새 항목을 추가