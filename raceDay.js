let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)
let isRegistered = true
let age = 23
let early = '9:30'
let late = '11:00'
let young = '12:30'

if (raceNumber >= 1000 && isRegistered) {
  raceNumber += 1000
  console.log(raceNumber)
  console.log('adult')
}else {
  console.log('young')
}

let runtime = 0

switch (runtime) {
  case early && age > 18: 
    console.log(`Race begins at 9:30am and race number is ${raceNumber}`)
    break
  case late && age > 18: 
    console.log(`Race begins at 11:00am and race number is ${raceNumber}`)
    break
  case young && age < 18: 
    console.log(`Race begins at 9:30am and race number is ${raceNumber}`)
    break
  default: 
   console.log('You are 18 years')
}