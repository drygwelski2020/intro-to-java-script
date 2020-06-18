const main = () => {
  for (let index = 0; index < 20; index++) {
    // MUST BE BACKTICKS, NOT A SINGLE QUOTE!
    //console.log(`This index is ${index}`)
  }

  // Function to square a number given to it
  function square(number) {
    return number * number
  }

  const squareOfFive = square(5)
  //console.log(`The square is ${squareOfFive}`)

  // This is the same function as above
  const squareExpression = function (number) {
    return number * number
  }

  const otherSquareOfFive = squareExpression(5)
  //console.log(`The otherSquare is ${otherSquareOfFive}`)
  //console.log(otherSquareOfFive)

  const double = function (number) {
    return number * 2
  }

  const half = function (number) {
    return number / 2
  }

  const doubleAnum = double(6)
  //console.log(`The double of 6 is: ${doubleAnum}`)
  //console.log(doubleAnum)
  //console.log(``)

  const triple = function (number) {
    return number * 3
  }

  function printIt(array, functionToRunForEachValue) {
    for (let index = 0; index < array.length; index++) {
      const value = array[index]
      const result = functionToRunForEachValue(value)
      console.log(result)
    }
  }

  const numbers = [42, 100, 1, 21, 15, 32]

  printIt(numbers, triple)

  // Similar C# LINQ functions
  // var result = array.Select(number => number * 2)
  // var result = array.Select(number => number * 3)
  // var result = array.Select(number => number * number)
  // var result == array.Select(number => number / number)

  const names = ['Dave', 'Larry', 'Sue', 'Tracey', 'Shelley']
  const lengthOfNames = names.length
  console.log(`The length of the array is: ${lengthOfNames}`)
  const firstName = names[0]
  console.log(`The first element in the array is: ${firstName}`)
  const secondName = names[1]
  console.log(`The first element in the array is: ${secondName}`)

  for (let index = 0; index < names.length; index++) {
    let valueAtIndex = names[index]
    console.log(valueAtIndex)
  }
}

document.addEventListener('DOMContentLoaded', main)
