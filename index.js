function breakOut(array, changeValue, stopValue) {
  array = ["hello"]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      return array[i]
    }
    array[i] = changeValue;
  }
}

function keepGoing (array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] = "skipValue") {
      continue
    }
    array[i] = "changeValue"
  }
}
