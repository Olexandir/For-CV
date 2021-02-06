/* let arr = [-1, -4, -7, -12];

function pushing(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }

  if (newArr.length == 0) {
    return 0;
  } else {
    return newArr.reduce((x, y) => x + y);
  }
}

console.log(pushing(arr)); */

let arr = [
  28,
  -13,
  22,
  11,
  -15,
  -15,
  -1,
  12,
  25,
  -4,
  -5,
  10,
  -16,
  10,
  -13,
  -19,
  -8,
];

function sumOfDifferences(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  return newArr;
}

console.log(sumOfDifferences(arr));
