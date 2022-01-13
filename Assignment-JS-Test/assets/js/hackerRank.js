// function x() {
//   a();
//   function a() {
//     console.log("m");
//   }
//   a();
//   function a() {
//     console.log("n");
//   }
//   a();
// }
// console.log(x());
// x();
// ===============================

// function constfuncs() {
//   var funcs = [];
//   for (var i = 0; i < 10; i++)
//     funcs[i] = function () {
//       return i;
//     };
//   return funcs;
// }
// var funcs = constfuncs();
// console.log(funcs[5]());
// ===============================

// var x = 21;
// var girl = function () {
//   console.log(x);
//   var x = 20;
// };
// girl();
// ===============================

// (function () {
//   var a = (b = "42");
// })();
// console.log(typeof a);
// // ===============================

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 0);
//   Promise.resolve().then(() => console.log(3));
//   console.log(4);
// })();
// ===============================

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// ===============================
// for (var i = 0; i < 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
// ======================
