// var dwayne = {},
//   daniel = { firstName: "Daniel" },
//   jason = { key: "jason" };

// dwayne[daniel] = 123;
// dwayne[jason] = 456;

// console.log(dwayne[daniel]);

// const func = (function(a){
//     delete a;
//     return a;
//   })(5);

//   console.log(func);

//   console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

// const jamesBond = {
//     firstName: "Daniel",
//     lastName: "Craig",
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`.trim();
//     }
// };
// jamesBond.getFullName();

// What will the code below output? Explain your answer.
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// function boo() {
//   boo = null;
// }

// boo();
// boo();

// console.log(null || 1 || undefined);

function logName(name) {
  var n = name || "Mark";
  console.log(n);
}

logName();
