(async () => {
  const p1 = Promise.resolve("ABC");
  const p2 = Promise.resolve("XYZ");
  // const p1 = Promise.resolve(); //undefined
  // const p2 = Promise.resolve(); //undefined
  // const resolved = await Promise.all()[0]; //undefined
  // const resolved = await Promise.all([p1, p2])[0];
  const resolved = await Promise.all([p1, p2])[0];
  console.log(resolved); //
  console.log(resolved); //
  console.log(resolved); //
  console.log(resolved); //
  // console.log(await Promise.all([p1, p2])[0]);
})();

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function f1() {
//   var x = await resolveAfter2Seconds(10);
//   console.log(x); // 10
// }

// f1();
