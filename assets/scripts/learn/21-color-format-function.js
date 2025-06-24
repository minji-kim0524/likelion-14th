// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'

function setHexColor(a, b, c) {
  return '#' + (a.toString(16) + b.toString(16) + c.toString(16))
}

console.log(setHexColor(255, 255, 255))


function setRgbColor(n, m, p) {
  return 'rgb(' + (parseInt(n, 16) + ',' + parseInt(m, 16) + ',' + parseInt(p, 16)) + ')'
}

console.log(setRgbColor('ff', 'ff', 'ff'))