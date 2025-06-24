// 배열(Array) 객체

// 배열 리터럴로 배열 만들기 (배열 객체 생성)

const 장바구니 = ['대파', '계란', '두부', '시금치', '양파', '케찹']
//              [  0  ,   1   ,   2   ,   3   ,   4   ,   5  ]
console.log('장바구니 =',장바구니)

const 장바구니_항목_갯수 = 장바구니.length

console.log('장바구니_항목_갯수 =', 장바구니_항목_갯수)

// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
const cart = new Array('one', 'two', 'three', 'four', 'fice')

console.log(cart)

// new Array()를 사용해 배열 객체를 생성할 때 발생할 수 있는 문제점
const messageList = ['hello', 'good moring']
console.log(messageList)

const numbers = [1, 2, 3]
console.log(numbers)

// const onlyOneNumberList = [99]
const onlyOneNumberList = new Array(99)
console.log(onlyOneNumberList)

// 배열은 객체다.
// 객체의 조건은 속성:값을 가진다.
// 객체는 속성(메서드 포함)을 사용할 수 있다.
// 객체.속성
// 객체.메서드()

// 배열의 인덱스(index)는 숫자 타입니다.
// [
//  0: 값1,
//  1: 값2,
//  2: 값3,
//  3: 값4,
// ]

// 객체['속성명'] 으로 값을 꺼낼 수 있음
// 배열객체 [인덱스(숫자)] 로도 값을 꺼낼 수 있음

// 배열객체.속성
// 배열객체.메서드()

// 대괄호에 인덱스를 전달해 배열 항목 가져오기
let lastCartItem = 장바구니 [장바구니.length -1]
console.log(lastCartItem)


// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기
let lastCartItem2 = 장바구니.at(장바구니.length -1)
console.log(lastCartItem2)

// 배열 원소(항목) 값 읽기


// 배열 원소 값 수정
장바구니[2] = '순두부'
console.log('수정된 장바구니 =', 장바구니)

// ---------------------------------------------------------------------------------
// 실습
// 배열에 대해 이해할 수 있는 연습을 진행합니다.
// 빈 배열을 생성합니다.
const menu = []
console.log(menu)

// 3개의 항목을 포함하는 배열을 작성합니다.
const drink = ['콜라', '사이다', '커피']
console.log(drink)

const instructors = ['야무', '슬비']
// instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
let yamoo9 = instructors[0]

console.log(yamoo9)

// instructors 배열에서 "슬비" 항목 값을 "김데레사"로 변경합니다.
instructors[1] = '김데레사'
console.log(instructors)