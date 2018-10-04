function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
<<<<<<< HEAD
      array.push(`I am ${i} strange loops.`)
=======
      array.push(`I am ${i} strange loops. `)
>>>>>>> c9e3b58f0de0f5ad5d35ad1b427d1d6f1f8d49f1
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

<<<<<<< HEAD
=======
function incrementVariable() {
  i = i + 1;
}

>>>>>>> c9e3b58f0de0f5ad5d35ad1b427d1d6f1f8d49f1
function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0)
<<<<<<< HEAD
  return array
=======
>>>>>>> c9e3b58f0de0f5ad5d35ad1b427d1d6f1f8d49f1
}