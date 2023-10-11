//1.Covert hours to second
function convertHoursToSecond(hours) {
  if (hours < 0) return -1

  const SECOND_PER_HOUR = 36000

  return hours * SECOND_PER_HOUR
}

// console.log(convertHoursToSecond(2))

//2.Given 3 numbers,find max
function findMax(a, b, c) {
  let max = a
  if (b > max) max = b
  if (c > max) max = c
  return max
}

console.log(findMax(-2, 3, 5))

//3.Given 3 numbers, find max even number
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY

  if (a % 2 === 0 && a > max) max = a
  if (b % 2 === 0 && b > max) max = b
  if (c % 2 === 0 && c > max) max = c

  return max
}

console.log(findMaxEven(7, 6, -3))
