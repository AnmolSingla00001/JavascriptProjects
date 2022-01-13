// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// //   ====================================

// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };

// const getMes = object.getMessage;
// console.log(getMes());

// //   ====================================
// function Pet(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }
// const cat = new Pet("Fluffy");
// console.log(cat.getName()); // What is logged?
// const { getName } = cat;
// console.log(getName()); // What is logged?

// //   ====================================
// const object = {
//   who: "World",
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };
// console.log(object.greet()); // What is logged?
// console.log(object.farewell()); // What is logged?

// const _greet = object.greet;
// console.log(_greet()); // What is logged?

//   ====================================
const object = {
  getMessage() {
    console.log("Inside getMsg : ", this);
  },
  getMessageWithArrow: () => {
    console.log("Inside getMessageWithArrow : ", this);
  },
};
object.getMessage();
object.getMessageWithArrow();
