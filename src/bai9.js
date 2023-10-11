//1.Get the ones of a number having 3 digits

function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1

  return n % 10
  //123 % 10
}

//2.Get the tens of a number having 3 digits
function extractTheTen(n) {
  if (n.toString().length !== 3) return -1
  //123 % 100
  //23 / 10 = 2.3 -> 2
  return Math.trunc((n % 100) / 10)
}
console.log(extractTheTen(123))
//3.Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1
  //123 / 100 = 1.23

  return Math.trunc(n / 100)
}
console.log(extractTheHundreds(123))
//4.Sum all digits  of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1

  const ones = n % 10
  const tens = Math.trunc((n % 100) / 10)
  const hundreds = Math.trunc(n / 100)

  let results = ones + tens + hundreds

  return results
}

console.log(sumDigits(123))
