export default function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  let separator = options.separator ? options.separator : '+'
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  let arrayMain = []
  let addition=''

  if (typeof(options.addition) !== "undefined") {
     addition = options.addition  + ''
  }

  for (let i=0; i < repeatTimes; i++) {

    let result = []

    for (let j=0; j<additionRepeatTimes; j++) {
      result.push(addition)
    }

    arrayMain.push(str+result.join(additionSeparator))
  }
  return(arrayMain.join(separator))
}
