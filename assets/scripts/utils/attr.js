/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// getAttr(element, attributeName)
// 속성 읽기 기능(함수)
const getAttr = (element, attributeName) => 
  element.getAttribute(attributeName)

// setAttr(element, attributeName, attributeValue)

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string
// function attr(element, attributeName, attributeValue) {
  

  // 설정 값이 있는 경우
  // 0, '' 고려해서 undefined가 아닌 경우만 처리
  // 속성 쓰기
  // if (attributeValue !== undefined) {
  //   element.setAttribute(attributeName, attributeValue)
  //   return element
  // } 
  // // 설정 값이 없는 경우
  // // 속성 읽기
  // else {
  //   const attributeValue = element.getAttribute(attributeName)
  //   // 반환 값: attributeValue
  //   return attributeValue
  // } 
// 속성 쓰기 기능(함수)
const setAttr = (element, attributeName, attributeValue) => {
  element.setAttribute(attributeName, attributeValue)
  return element
}

// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)

// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)
// 함수 내부에 사용된 기능을 분리(추출)
function attr(element, attributeName, attributeValue) {  
  if (attributeValue) {
    return setAttr(element, attributeName, attributeValue)
  } else {
    return getAttr(element, attributeName)
  }
}