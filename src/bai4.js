//1 Random a number in range of [0,n]
// n = 10
// 0,1,5,10
// Math.random(0) -> [0,1)

function randomNumber(n) {
  if (n <= 0) return -1
  const random = Math.random() * n
  const result = Math.round(random)
  return result
}

console.log(randomNumber(100))
console.log(randomNumber(-2))
