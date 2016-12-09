const { compose } = require('redux')

const sum = (a, b) => a + b

// const sumPlus = multiply => number => number * multiply

// const multiplier = coeficient => number => coeficient * number
//
// function multiplier(coeficient) {
//   return function (number) {
//     return coeficient * number
//   }
// }

// const timesTwo = multiplier(2)
// const timesThree = multiplier(3)

// console.log([1, 2, 4].map(timesTwo))
// console.log([1, 2, 4].map(timesTwo))


const createLogger = logger => data => logger(data)

const myYeahLogger = createLogger(data => console.log(data + '-yeahh'))

const myOpaLogger = createLogger(console.log)


// const myAwesomeLogger = data => {
//   myYeahLogger(data)
//   myOpaLogger(data)
// }

// const myAwesomeLogger = compose(myYeahLogger, myOpaLogger)

// myAwesomeLogger('opaaaaa')

const multiplier = coeficient => number => coeficient * number

const addLogging = method => value => {
 console.log(`Called with ${value}`)
 const result = method(value)
 console.log('Result with:', result)
 return result
}

const timesTwo = multiplier(3)

const timesTwoAndLog = addLogging(timesTwo)

// timesTwo(2)
timesTwoAndLog(2)
