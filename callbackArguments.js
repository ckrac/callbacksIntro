// /////// Exercise - Callback Arguments

// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(index) {
//   console.log("Found Waldo at index " + index + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


///// Exercise - Array forEach

function findWaldo(arr, found) {
  arr.forEach(function (element, index) {
    if (element === "Waldo") {
      // console.log("hey" + element[index]);
      found(index);
    }
  })
};

function actionWhenFound(pos) {
  console.log("Found Waldo at index " + pos + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



