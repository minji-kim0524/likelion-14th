// # 실습

// 객체를 만드는 연습을 해보세요. 실제 코딩에서 객체는 매우 많이 사용됩니다.

// 1. 빈 객체를 정의합니다.
const minjiPerson = {
  name: 'minji',
  gen: 'female',
  address: 'sejong'
}

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
minjiPerson.height = 155
console.log(minjiPerson.height)


// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
minjiPerson['nickname'] = '다람쥐'
console.log(minjiPerson['nickname'])

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
minjiPerson.nickname = 'squirrel'
minjiPerson.birthday = '05/24'

console.log(minjiPerson.nickname)
console.log(minjiPerson.birthday)

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
minjiPerson['name'] = 'kim-minji'

console.log(minjiPerson['name'])

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
const minjiPerson = {
  getName: function() {
    minjiPerson.name
  }
}

minjiPerson.getName()

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
minjiPerson.name()


// ### 연습 주제

// 어떤 객체를 만들어야 할 지 감이 안 잡힌다면? 아래 주제에 맞는 객체를 만들어 보세요.

// 1. 사람(person) 정보 객체로 만들기
//     - 속성 추가
//     - 속성 읽기
//     - 속성 수정
//     - 속성 삭제
// 2. 도서(book) 정보 객체로 만들기
//     - 속성 추가
//     - 속성 읽기
//     - 속성 수정
//     - 속성 삭제


// -------------------------------------------------------


let book
console.log(book)

// 1. 빈 객체를 정의합니다.
book = {}
console.log(book)

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
book.title = '첫 여름, 완주'
console.log(book)

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
book['page count'] = 224
console.log(book)

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book.title = '자매일기'
console.log(book)

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book['page count'] = 180
console.log(book)

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
book.getAuthors = function() {
  return '박소영, 박수영'
}
console.log(book.getAuthors())

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
book.getPrice = function(unit) {
  return '16,200' + unit
}

console.log(book)
console.log(book.getPrice('원'))

// 8. 객체의 속성 중 하나를 선택하여 삭제해봅시다.
delete book['page count']
console.log(book)
book.pageCount = 180
console.log(book)