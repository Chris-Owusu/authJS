let input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultString
let resultArray = []

for(let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i].toUpperCase())
  }
  if (input[i] === 'u') {
    resultArray.push(input[i].toUpperCase())
  }
  for(let j = 0; j < vowels.length; j++) {
    if(input[i] === vowels[j]) {
      resultArray.push(vowels[j].toUpperCase())
    }
  }
}
console.log(resultArray)

resultString = resultArray.join()
console.log(resultString)