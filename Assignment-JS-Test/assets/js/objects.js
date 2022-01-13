// const person = {
//   age: 20,
//   name: "Ben",
// };

// const peopleArray = [person, person, person];
// peopleArray[1].name = "Joe";
// console.log(peopleArray[0].name);
// =========================

// function foo() {
//   {
//     let c = 0;
//   }
//   //   console.log(c);
//   let a = (b = 0);
//   console.log(b);
//   for (index = 0; index < 5; index++) {
//     // const element = array[index];
//     console.log("inside loop", index);
//   }
//   console.log(index);
//   //   let a = 0;
//   //   var b = 0;
//   a++;
//   return a;
// }
// foo();
// typeof a; // => ???
// typeof b; // => ???
// typeof c; // => ???
// =========================

// // let a = { abc: 24, xyz: 24 };
// // console.log(Object.keys(a));

// let a = [24, 45, 78];
// let len = a.length;
// // for (let index = 0; index < len; index++) {
// //   console.log(a);
// //   console.log(a.length);
// //   a.pop();
// // }
// console.log(a[10]);
// console.log(a);
// a.length = 0;
// =========================

// var rows = 3;
// var column = 5;

// for (let index = 0; index < rows; index++) {
//   var row = "";
//   //   console.log("r");
//   for (let index2 = 0; index2 < column; index2++) {
//     row = row.concat("*");
//     // console.log("c");
//     // console.log(row);
//   }
//   console.log(row);
// }
// =========================

// // let i;
// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }
// //333
// =========================

// *
// **
// * *
// *  *
// *   *
// ******
const rows = 10;
let row = "";
for (let index = 0; index < rows; index++) {
  row = "";
  for (let ind = 0; ind <= index; ind++) {
    if (ind == 0 || ind == index || index == rows - 1) {
      row = row.concat("*");
    } else {
      row = row.concat("-");
    }
  }
  console.log(row);
}

// =========================

// let a = [12, 24, "abc"];
// a[10] = 20;
// console.log(a.length);
// ==============================
