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

let betterFizzBuzz = function (from, to) {
  for (var i=from; i<=to; i++) {

    // const array = fbTest(i)
    // const string = fbFormatOutput(array)

    // fbPrint(string)

    fbPrint(fbFormatOutput(fbTest(i)))

  }
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

betterFizzBuzz(1, 1000)


let fizzBuzz = function () {
  let printVal

  for (var i=1; i<=100; i++) {

    printVal = i + ' '

    if (i % 3 === 0) {
      printVal += 'Fizz'
    }

    if (i % 5 === 0) {
      printVal += 'Buzz'
    }

    console.log(printVal)

  }
}

// fizzBuzz()
