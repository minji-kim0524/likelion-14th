// 화살표 함수 표현식 (Arrow Function Expression)

// 함수를 만드는 방법 3가지

// 1. 함수 선언
function showMeTheMoney() { console.log('show me the money')}

showMeTheMoney()

// 2. 함수 표현식
let lookAndMe = function() { console.log('look and me')}

lookAndMe()

// 3. 화살표 함수 표현식 (변수 필요)
let readABook = (bookName) => { console.log(bookName + '을 읽다')}

readABook('한 여름 밤의 꿈')
readABook('로미오와 줄리엣')

// ---------------------------------------------------------------------------
// 다양한 화살표 함수 구문
// ---------------------------------------------------------------------------

// 1. 매개변수의 갯수
//    0개, 2개 이상은 소괄호 생략할 수 없다.
//    1개, 소괄호 생략 가능하다.



//    0개
// let readABook = () => { console.log('"책"을 읽다.')}

// 자바스크립트 월드 사람들의 관례
// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용한다. -> 단, 일반함수식은 해당없음
// let readABook = _ => { console.log('"책"을 읽다.')}

//    1개면 소괄호 생략 가능
// let readABook = (bookName) => { console.log('"' + bookName + '"을 읽다.')}

//    2개 이상인 경우, 소괄호 생략을 허용하지 않는다.
// let readABook = (bookName, day) => { console.log(day + '일에 걸쳐' + '"' + bookName + '"을 읽다.')}

// readABook('오만과 편견', 21)

// 2. 암묵적 반환
//    return undefined (암묵적 반환, 기본 반환)
//    retrun 값 (명시적 반환)

// const ROOT_FONT_BASE =  16

// 함수 선언
// function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_BASE + 'rem'
// }

// 함수 표현식
// let px2rem = function (pxValue) {
//   return pxValue / ROOT_FONT_BASE + 'rem'
// }

// 화살표 함수 표현식 변경 1 (기본 화살표 함수 표현식)
// let px2rem = (pxValue) => {
//   return pxValue / ROOT_FONT_BASE + 'rem'
// }


// 화살표 함수 표현식 변경 2 (매개변수 1개: 소괄호 생략)
// let px2rem = pxValue => {
//   return pxValue / ROOT_FONT_BASE + 'rem'
// }


// 화살표 함수 표현식 변경 3 (암묵적 반환)
// let px2rem = pxValue => pxValue / ROOT_FONT_BASE + 'rem'


// console.log(px2rem(28))

// 객체를 반환하는 함수
// function getStyles() {
// let cssStyles = {
//   'display': 'grid',
//   'row-gap': 24
// }
//   return cssStyles
// }

// 함수 표현식

// 화살표 함수 표현식
// let getStyles = _ => {
//   let cssStyles = {
//   'display': 'grid',
//   'row-gap': 24
// }
//   return cssStyles
// }

// console.log(cssStyles)

const ten = () => 10

const logger = message => '로그 메시지:' + message


// 명시적
function pxToRem(px) {
  let rem = px / 16 + 'rem'
  return rem
}

// 암묵적
const pxToRem = (pxValue) => pxValue / 16 + 'rem'

// percentage 계산 함수
const percentage = (x, y) => (x / y) * 100 + '%'

// 왜 함수를 화살표 함수 표현식으로 사용할 때 
// let 이 아닌 const를 사용했을까?