// 변수(Variables)

// ----------------------------------------------
// 의미없는 코드
// ----------------------------------------------
// 4 + 27 = 31
// console.log(31)
// console.log(4 + 27)

// ----------------------------------------------
// 의미있는 코드
// ----------------------------------------------

// 처음 가진 사과의 갯수 = 4
// 변수 선언 및 값 할당Add commentMore actions
let 처음_가진_사과의_갯수 = 4
console.log('처음_가진_사과의_갯수 = ', 처음_가진_사과의_갯수) // 4
// let 처음_가진_사과의_갯수 = 4
// console.log('처음_가진_사과의_갯수 = ', 처음_가진_사과의_갯수) // 4
// let initial_apples = 4 // snakeCase
// console.log('initial_apples =', initial_apples)


let initialApples = 4 //camelCase
console.log('initialApples =', initialApples)

// 잘못된 변수 이름
// 공백은 안돼요!
// let initial apples [x]
// 첫 글자가 숫자 안돼요!
// let 4people [x]
// 하이픈(-) 기호 안돼요!
// let dart-impact = '다크 임팩트'
// 예약어(예: if, for, while, fuction, ...)사용 안돼요!
// let return = '회귀'

// 추가로 구매한 사과의 갯수 = 27
// let 추가로_구매한_사과의_갯수 = 27

// 변수 선언 (값 할당 없이) -> 나중에 할당가능
// let addBuyApples // 기본값(undefined)
// console.log('addBuyApples =', addBuyApples)

// console.log('추가로_구매한_사과의_갯수 = ', 추가로_구매한_사과의_갯수) // 27
// let 추가로_구매한_사과의_갯수 = 27
// console.log('추가로_구매한_사과의_갯수 = ', 추가로_구매한_사과의_갯수) // 27

// 현재 내가 가진 사과의 갯수 = 처음 가진 사과의 갯수 + 추가로 구매한 사과의 갯수
// let 현재_내가_가진_사과의_갯수 = 처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수
// console.log('현재_내가_가진_사과의_갯수 = ', 현재_내가_가진_사과의_갯수) // 4 + 27
// let 현재_내가_가진_사과의_갯수 = 처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수
// console.log('현재_내가_가진_사과의_갯수 = ', 현재_내가_가진_사과의_갯수) // 4 + 27


// 블록 스코프(block scope)
{
    var myName
    console.log(1, myName)

    myName = 'yamoo9'
    console.log(2, myName)
}

myName = 'y9'
console.log(3, myName)

{
    let myName2
    console.log(1, myName2)

    myName2 = 'yamoo9'
    console.log(2, myName2)
}

// myName2 = 'y9'
// console.log(3, myName2)

// let 변수 vs. const 변수(상수, constant)
// - 변수 = 시간의 흐름에 따라 값이 변경됨
// - 상수 = 처음 선언 시, 할당된 값이 이후 변경되지 않음