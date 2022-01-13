// Requirement -
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

//Algo Ver - 1
// 1 - Iterate from 1 to 100
// 2 - At multiple of 15 return fizzbuzz and continue
// 3 - At multiple of 3 return fizz
// 4 - At multiple of 5 return buzz

// for (let index = 1; index <= 100; index++) {

//     if (index%15 === 0) {
//         console.log("fizzbuzz");
//         continue;
//     }
//     if (index%3 === 0) {
//         console.log("fizz");
//     }
//     if (index%5 === 0) {
//         console.log("buzz");
//     }
// }

//Algo Ver - 2
// 1 - Iterate from 1 to 100
// 2 - Initialize output as empty
// 3 - At multiple of 3 concat output with fizz
// 4 - At multiple of 5 concat output with buzz
// 5 - Print Output

console.log("output");
for (let index = 1; index <= 100; index++) {
  let output = "";
  if (index % 3 === 0) {
    output = output.concat("fizz");
  }
  if (index % 5 === 0) {
    output = output.concat("buzz");
  }
  if (output) {
    console.log(output, index);
  }
}
