// 1 memoise function closure
function memoise(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

// 2 array pollyfill or prototype
// way of extending objects

Array.prototype.myFind = function () {
  console.log(this);
};

const arr = [1, 2, 3];
arr.myFind();
