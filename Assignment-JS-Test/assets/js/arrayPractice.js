// var arrayList = ["a", "b", "c", "d", "e", "f"];

// //Empty and Array.
// arrayList = []; //Object is still in the memory without any reference.
// arrayList.length = 0; //Better Approach.

// function isInt(a) {
//   if (a % 1 == 0) {
//     return ! a % 1;
//   }
//   return false;
// }

// console.log(isInt(4)); // true
// console.log(isInt(12.2)); // false
// console.log(isInt(0.3)); // false

let stack1 = [1, 2, 3, 4, 5];
let stack2 = [];

function enq(arr, ele) {
  arr.push(ele);
}

function deq(arr, arr2) {
  arr.push(arr2.pop());
}
