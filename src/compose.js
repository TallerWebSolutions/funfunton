const compose = (...funcs) => arg => funcs.reduce((arg, func) => func(arg), arg)

const timesTwo = value => 2 * value
const timesThree = value => 3 * value

const timesSix = compose(timesTwo, timesThree)

// console.log(timesSix(2))


const data = [
  { age: 12 },
  { age: 23 },
  { age: 43 },
  { age: 25 },
]

const sum = (a, b) => a + b

const selectorAge = item => item.age

const sumAges = data
  .map(selectorAge)
  .filter(age => age >= 23)
  .reduce(sum)

console.log(result)

//
// let resultB = 0;
//
// data.forEach((item, index) => {
//   resultB += item.age
// })
//
// console.log(resultB)
//
// var bla = 0
// funcA()
// funcB()
// funcC()
//
// console.log(bla)
