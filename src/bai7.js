//1.Write a function to check if a number is odd/even
function isEven(n) {
  return n % 2 === 0
}

function isOdd(n) {
  return n % 2 !== 0
}

//2.Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
  return n % 5 === 0
}

//3.Write a function to check if a number is perfect square
//n = a * a

function isPerfectSquare(n) {
  if (n <= 0) return false

  const sqrtN = Math.sqrt(n)
  const sqrtTrunc = Math.trunc(sqrtN)

  return sqrtTrunc * sqrtN === n
}
