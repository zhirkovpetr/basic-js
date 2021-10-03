export default function transform(arr) {
  let newArr = []

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return newArr
  }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] === '--discard-next') {
        } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
          newArr.pop()
        } else if (arr[i - 1] === '--double-next') {
          newArr.push(arr[i], arr[i])
        } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
          i === 0 ? 0 : newArr.push(arr[i - 1])
        } else if (arr[i] !== '--double-next' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev') {
          newArr.push(arr[i])
        }
    }
  return newArr
}



