// function z() {
//   var a = 100;
//   function y() {
//     var b = 200;
//     function x() {
//       console.log(a, b);
//     }
//     b = 300;
//     return x;
//   }
//   var yy = y();
//   console.log(yy);
//   yy();
// }
// z();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Hey There");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hey There");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Hey There");
// }
// x();

// function Counter() {
//   var count = 0;
//   this.increment = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrement = function () {
//     count--;
//     console.log(count);
//   };
// }

// var c1 = new Counter();
// c1.increment();
// c1.increment();
// c1.increment();
// c1.decrement();

// higher order functions with callback functions
// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };
// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (var i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// console.log(radius.map(area));

// using array prototype
// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (var i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.calculate(area));

// map filter and reduce
// const arr = [5, 2, 3, 7, 9, 7];

// const double = function (item) {
//   return 2 * item;
// };

// const triple = function (item) {
//   return 3 * item;
// };

// const binary = function (item) {
//   return item.toString(2);
// };

// const output = arr.map(double);
// console.log(output);
// const output2 = arr.map(triple);
// console.log(output2);
// const output3 = arr.map(binary);
// console.log(output3);

// const output4 = arr.map(function (x) {
//   return x.toString(2);
// });
// console.log(output4);

// const output5 = arr.map((x) => {
//   return x.toString(2);
// });
// console.log(output5);

// const output6 = arr.map((x) => x.toString(2));
// console.log(output6);

// const arr = [10, 4, 6, 5, 2, 3, 7, 9, 7];

// function isOdd(x) {
//   return x % 2;
// }

// function isEven(x) {
//   return x % 2 === 0;
// }

// const output = arr.filter(isOdd);
// const output = arr.filter(isEven);
// console.log(output);

// reduce

// const arr = [10, 4, 6, 5, 5];

// const output = arr.reduce(function (accumulator, current) {
//   return (accumulator += current);
// }, 0);

// console.log(output);

// const output = arr.reduce(function (accumulator, current) {
//   if (current < accumulator) {
//     accumulator = current;
//   }
//   return accumulator;
// }, 0);

// console.log(output);

// map filter reduce

// const arr = [
//   { f: "Vivek", l: "Kumar", a: 29 },
//   { f: "Vivek", l: "Kumar", a: 29 },
//   { f: "Vivek", l: "Kumar", a: 29 },
//   { f: "Ashutosh", l: "Kumar", a: 24 },
//   { f: "Ashi", l: "Kumari", a: 14 },
// ];

// const output = arr.map((obj) => {
//   return obj.f + " " + obj.l;
// });

// console.log(output);

// const output = arr.reduce((acc, curr) => {
//   const key = curr.a;
//   acc[key] = (acc[key] || 0) + 1;
//   return acc;
// }, {});
// console.log(output);

// const output = arr.reduce((acc, curr) => {
//   if (curr.a > 25) {
//     acc.push(curr.f);
//   }
//   return acc;
// }, []);
// console.log(output);

// const output = arr.filter((x) => x.a < 25).map((x) => x.f);
// console.log(output);

// promise

// const cart = ["shoes", "watch"];

// const promise = createOrder(cart);
// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//     return err;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (payInfo) {
//     console.log(payInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid!");
//       reject(err);
//     }
//     // api call or any logic to create order
//     const orderId = 123456;
//     setTimeout(function () {
//       resolve(orderId);
//     }, 1000);
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return false;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     if (orderId !== undefined) {
//       const data = "Payment is successful";
//       resolve(data);
//     } else {
//       const err = new Error("OrderId is not correct!");
//       reject(err);
//     }
//   });
// }

// promise apis

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P2 success"), 1000);
//   setTimeout(() => reject("P2 failed"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 success"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async await

// async function getData() {
//   return "hey there";
// }

// const promise = getData();
// console.log(promise);
// promise.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//   // resolve("Promise resolved");
//   reject("Promise rejected");
// });

// async function handlePromise() {
//   const val = await p;
//   // console.log(val);
//   val.catch((err) => console.log(err));
// }

// handlePromise();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 resolved");
//   }, 8000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 resolved");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("hey there");

//   const val = await p1;
//   console.log("p1 result awaited");
//   console.log(val);

//   const val2 = await p2;
//   console.log("p2 result awaited");
//   console.log(val2);
// }

// handlePromise();

// fetch using await

// const API_URL = "htt://api.github.com/users/vivek2005";

// async function fetchCallGitHub() {
//   // try {
//   const data = await fetch(API_URL);
//   const jsonValue = await data.json();
//   console.log(jsonValue);
//   // } catch (err) {
//   //   console.log("first catch");
//   //   console.log(err);
//   // }
// }

// // fetchCallGitHub();
// fetchCallGitHub().catch((err) => {
//   console.log("second catch");
//   console.log(err);
// });

// const student = {
//   name: "Vivek",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// student.printName();

// const student2 = {
//   name: "Vishal",
// };

// student.printName.call(student2);
