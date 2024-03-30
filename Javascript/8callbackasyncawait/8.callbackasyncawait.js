// register
// verify
// login

// logout
console.log("other application works");
function register(cb) {
  setTimeout(() => {
    console.log("register");
    cb();
  }, 3000);
}

function verify(cb) {
  setTimeout(() => {
    console.log("verify");
    cb();
  }, 2000);
}

function login(cb) {
  setTimeout(() => {
    console.log("login");
    cb();
  }, 1000);
}

function logout(cb) {
  setTimeout(() => {
    console.log("logout");
    cb();
  }, 1000);
}

// register(() => {
//   verify(() => {
//     login(() => {
//       logout(() => {
//         console.log("okay");
//       });
//     });
//   });
// });

// promise

const subs = new Promise((res, rej) => {
  let sub = true;
  if (sub) {
    res("subscribe to umesh");
  } else rej(new Error("why"));
});

subs
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   with promise
console.log("other application works");
function register1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 3000);
  });
}

function verify1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("verify");
      resolve();
    }, 2000);
  });
}

function login1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 1000);
  });
}

function logout1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error("error in logout"));
      console.log("logout");
    }, 3000);
  });
}

// register1()
//   .then(verify1)
//   .then(login1)
//   .then(logout1)
//   .catch((err) => console.log(err)); //promise chaining

// Promise.all([register1(), verify1(), login1(), logout1()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err); // Handle errors
//   });

// modern approcah
async function result() {
  await register1();
  await verify1();
  await login1();
  await logout1();
}

result();
