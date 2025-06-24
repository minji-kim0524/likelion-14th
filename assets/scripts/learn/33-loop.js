// --------------------------------------------------------------------------
// 📌 루프(Loop)
// --------------------------------------------------------------------------

// let count = 0

// const draw = () => {
//   // count = count + 1
//   console.count('도화지에 그림을 그린 횟수')
// }

// draw()
// draw()
// draw()
// draw()
// draw()

// const numbers = [100, 99, 98, 97]
// console.log(numbers)

// let wantToDraw = true

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   draw()
// }

// 루프(반복)문 
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// let n = 0

// while (wantToDraw) {
//   draw()

//   // 조건을 거짓으로 만들께요! (멈춤)
//   // wantToDraw = !wantToDraw
//   if (n > 2) {
//     wantToDraw = false
//   }
  
//   n += 1
// }

// if 문 vs. while 문
// const draw = () => {
//   // count = count + 1
//   console.count('도화지에 그림을 그린 횟수')
// }

// let wantToDraw = true

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   console.log('if문')
//   draw()
// }

// 루프(반복)문 
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// 특정 상황(조건) 설정
// let i = 10

// while(wantToDraw) {
//   console.log('while문')
//   draw()

//   // 특정 상황이 일치되는 경우
//   if(i <= 0) {
//     // 조건을 참에서 거짓으로 변경
//     wantToDraw = false
//     console.log('i =', i, 'wantToDraw =', wantToDraw)
//   } else {
//     i = i - 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
//     console.log('i =', i)
//     // 후감소 i--
//     // 선감소 --i




//   }
// }

// let k = 100

// while(--k >= 0) draw()

// // 특정 상황이 일치되는 경우
// if(i-- <= 0) { // 선감소(--i): i = 9  / 후감소(i--) i = 10
//   // 조건을 참에서 거짓으로 변경
//   wantToDraw = false
//   console.log('i =', i, 'wantToDraw =', wantToDraw)
// } else {
//   // i = i - 1
//   // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  
//   // 후감소
//   // i--
  
//   // 선감소
//   // --i
  
//   console.log('i =', i)
// }


// 사용자 입력 검증(while)
// "1부터 10까지 숫자를 입력하세요"

// window.prompt('message')
// window.parseInt(value, ?radix)
// window.prompt('message')


// let userInput = prompt('1부터 10까지 숫자를 입력하세요')
// console.log(userInput)

// let drawCount = 0


// 반복문(do ...whlie)
// whlie vs. do ... while

{
  let condition = false

  // do ... while문
  // 코드가 조건과 상관없이(거짓이어도) 1번은 반드시 실행되면 좋겠다. 

  do {
  console.log('do ... whlie')
} while(condition) 


  // while문
  // 조건이 거짓이라면 1번도 실행 안함
  while(condition) {
    console.log('while')
  }
}

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"


// do...while 문 사용 예시
// ;(let userInput 
// do {
//   userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
//   if(Number.isNaN(userInput) || userInput < 1 || userInput > 10)
//   console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
// } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10)

// console.log('사용자가 입력한 값은 ' + userInput + '입니다.'))

// while 문 사용 예시

// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
//   userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
// }

// console.log('사용자가 입력한 값은 ' + userInput + '입니다.')


// 하나의 파일 안에서 다른 코드와 충돌없이 일종의 캡슐화(모듈) 처리
// 즉시 실행되는 함수 표현식(IIFE)

const lookMe = function() {
  console.log('나를 보세요')
}

lookMe()
;(function() {
  console.log('나를 보세요')
})()


const happy = function() {
  console.log('해피해피')
}

happy()


// for문


// while 문 예시
;(() => {

  let i = 0
}

)

;( () => {
  
const numbers = [11, 22, 33, 44, 55, 66]

// numbers를 순환하되, 33인 값(인덱스) 순서에서 반복문을 멈춰라
for(let i = 0; i < numbers.length; i = i + 1) {
  const number = numbers.at(i)

  if (number === 33) {
    break;
  }
  console.log(number)
}})()

;(() => {
  const fruitBasket = ['체리망고', '토마토', '스트로베리']


})

;(() => {
const students = [
    {이름: '홍민영'},
    {이름: '윤정화'},
    {이름: '허시온'},
    {이름: '조선현'},
    {이름: '성정현'},
    {이름: '조장원'},
  ]

  for (let i =0; i < students.length ; i = i+1) {
    const student = students[i]
    console.log(student.이름)
  }
})


;(() => {
const students = [
    {이름: '홍민영'},
    {이름: '윤정화'},
    {이름: '허시온'},
    {이름: '조선현'},
    {이름: '성정현'},
    {이름: '조장원'},
  ]

  for (const student of students) {
    console.log(student.이름)
  }
})()

// 객체 전용 순환
;(() => {
const webTech = {
  html: 'hyper text markup language',
  css: 'cascading style sheet',
  javascript: 'programming language'
}

for (const key in webTech) {
  const value = webTech[key]
  console.log({
    key: key,
    value: value
  } 
  )
}


})()

// 실습

// 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
// 나머지로 진행
let k

for(k = 1; k <= 100; k++) {
  if(k % 2 === 0) {
    console.log(k)
  }
}

// 2씩 증가로 진행

// 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
let num = 10

while (num > 0) {
  console.log(num)
  num--
}

// 3. for … of 문을 사용해 다음 배열의 과일 출력    

const fruits = ['사과', '바나나', '귤', '복숭아']

    
// 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력
    

let i = 0, input
const attempts = ['0124', '8291', '3001', '9073']

    
// 5. for … in 문을 사용해 객체의 key, value 출력
    

    const student = {
      name: '선호',
      grade: 'A',
      age: 22,
    }

    
// 6. `1`부터 `20`까지 반복
//     1. `5`부터 `10`까지는 건너띄고 나머지 출력
//     2. `17`이 되면 반복 종료

;(() => {

})()