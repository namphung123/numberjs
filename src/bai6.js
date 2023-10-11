//1.Write a function to calculate the area of a rectangle

function calcAreaOfRectangle(a, b) {
  //checking
  if (a <= 0 || b <= 0) return -1
  //processing
  return a * b
}

//2.Write a function to calculate the perimeter of a rectangle

function calcPerimeterOfRectangle(a, b) {
  //checking
  if (a <= 0 || b <= 0) return -1
  //processing
  return (a + b) * 2
}
//3.Write a function to calculate the area of a Circle
// S = PI * R * R

function calcAreaOfCircle(r) {
  if (r <= 0) return -1
  return Math.PI * r * r
}
