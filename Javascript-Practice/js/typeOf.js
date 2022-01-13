function returnType(x) {
  //   console.log(x);
  try {
    console.log(typeof x);
    // return typeof x;
  } catch (error) {
    console.log(
      "Invalid Input Value for Type Check as " + error.name + error.message
    );
    // return (
    //   "Invalid Input Value for Type Check as " + error.name + error.message
    // );
  }
}
try {
  returnType(abc);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finally Block Executed");
}
function fnRandom() {}
