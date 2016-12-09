/*
- Percorre um range de numeros por exemplo, 1 - 100.
- Printa o <numero> seguido da string "Fizz" se o numero é multiplo de 3.
- Printa o <numero> seguido da string "Buzz" se o numero é multiplo de 5.
- Printa o <numero> seguido da string "FizzBuzz" se o numero é multiplo de 5 e 3.
- Printa o <numero> se nenhum das regras são válidas.
*/


let fbPrint = function (string) {
  console.log(string)
}

let fbFormatOutput = function (item) {
  return item.join(' ')
}

let fbTest = function (number) {
  let retval = [number]

  if (number % 3 === 0) {
    retval.push('Fizz')
  }

  if (number % 5 === 0) {
    retval.push('Buzz')
  }

  if (number % 7 === 0) {
    retval.push('Bang')
  }

  return retval
}

let generateRange = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => i + from)


let betterFizzBuzz = (from, to) => generateRange(from, to)
  .map(item => fbFormatOutput(fbTest(item)))

betterFizzBuzz(100, 1000).forEach(fbPrint)
