//Random a number in range of [a,b] with a < b
//[a,b]
// min: a
// range: b-a

// [10,100]
// min: 10
// range: 100 -10 = 90

function randomNumberInRange(a, b) {
  if (a >= b) return -1
  const random = Math.random() * (b - a)
  return Math.round(random) + a
}

console.log(randomNumberInRange(10, 100))
