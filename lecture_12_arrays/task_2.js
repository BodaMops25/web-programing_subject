const arr = [1, -2, 3, 4, -9, 6],
      arr2 = [-1, -2, -3]

function getMaxSubSum(arr) {
  return arr.reduce((sum, item) => item > 0 ? item + sum : sum, 0)
}

console.log(getMaxSubSum(arr), getMaxSubSum(arr2))
