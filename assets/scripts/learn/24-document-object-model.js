// DOM (문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (Web APIs)
// ------------------------------------------------------------


// Document.getElementsByTagName(tagName)
// console.log(document.getElementsByTagName('li'))

// Document.getElementById(idName)
// let emailInput = document.getElementById('useremail') // 데이터 타입 객체
// console.log(emailInput)

// Document.getElementsByName(name)
// console.log(document.getElementsByName('email'))

// Document.getElementsByClassName(className)
const items = document.getElementsByClassName('item')
console.log(items)


// ----------------------------------------------------------------

// 1. 
const character = document.querySeleotor('exorcist-characters')

console.log(character)

// 2.
const characterHero = document.getElementsByTagName('li.yo-han')

console.log(characterHero)