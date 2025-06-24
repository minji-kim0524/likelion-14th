;(() => {
  const headline = document.querySelector('h1')

  // 요소의 style 속성을 사용해 CSS 스타일링
  // 동적으로 DOM 요소 스타일 변경(update)

  // Web APIs

  // CSS 속성 값에는 단위가 포함되어야 한다. '200px'

  // 이벤트 리스너 추가
  // 마우스 엔터 (mouseenter)
  headline.addEventListener('mouseenter', () => {
    headline.style.fontsize = '300px'
  })

  // 마우스 리브 (mouseleave)
    headline.addEventListener('mouseleave', () => {
    headline.style.fontsize = '24.4px'
  })
})

//실습

;(() => {
const box = document.querySelector('.box')
// 1. `.box` 요소의 글자색을 변경합니다.
  box.style.fontsize = '100px'

// 2. `.box` 요소의 배경색을 변경합니다.
// 3. `.box` 요소의 너비를 벼경합니다.
// 4. `.box` 요소의 높이를 변경합니다.


})()


