// synchronous
// event loop
// call stack, microque, que
// callback
// promise
// promise.all , race, any

// then and wait , then do not block code execution but await hold the other execution until finished

function test(time) {
  return new Promise((resolve, rejct) => {
    setTimeout(() => {
      resolve("hi i am resolved promise");
    }, time);
  });
}
// thenable never block next line execution
test(1000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   modern approach

async function abc() {
  try {
    const res = await test(3000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// abc();
// callback to handle async code
function register(cb) {
  setTimeout(() => {
    console.log("register");
    cb();
  }, 2000);
}

function login(cb) {
  setTimeout(() => {
    console.log("login");
    cb();
  }, 500);
}

function logout(cb) {
  setTimeout(() => {
    console.log("logout");
    cb();
  }, 1000);
}

register(() => {
  login(() => {
    logout(() => {
      console.log("done");
    });
  });
});

// promise and aysc await is used for that 
