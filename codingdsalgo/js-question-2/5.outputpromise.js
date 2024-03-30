// // 1
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

// // 2
// async function getData() {
//   return await Promise.resolve("i made it ");
// }

// const data = getData();
// console.log(data.then((res) => console.log(res)));
// // 3
const myPromise = () => Promise.resolve("i have resolved");

function firstfunction() {
  myPromise().then((res) => console.log(res)); //keep aside and execute other
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise()); //it will hold until resolved till this promise resolved
  console.log("second");
}

firstfunction();
secondFunction();

//

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("second");
const promise3 = Promise.resolve("third");
const promise4 = Promise.resolve("fouth");

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
