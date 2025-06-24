// -------------------------------------------------------------------------------
// typeof 연산자 활용
// -------------------------------------------------------------------------------

const o = {
  // key(string): value(any),
  name: 'object', // data type = string
  serialNumber: 20250613, // data type = number
  isObjectType: () => true, // data type = function -> boolean
  isNotDefined: undefined, // data type = undefined
  empty: null, // data type = null
  symbol: Symbol('o'), // data type = symbol
  int: 100n, // data type = bigint
}

// 어떤 데이터 타입인지 확인하고자 할때
// typeof 연산자 사용
// typeof 데이터 // 데이터로 반환됨 'string', 'number', ...
// (연산자 오류) typeof 연산자로는 null과 object를 구분할 수 없다

console.log(typeof o)
console.log(typeof o.name)
console.log(typeof o.serialNumber)
console.log(typeof o.isObjectType)
console.log(typeof o.isObjectType())
console.log(typeof o.isNotDefined)
console.log(typeof o.empty)
console.log(typeof o.symbol)
console.log(typeof o.int)