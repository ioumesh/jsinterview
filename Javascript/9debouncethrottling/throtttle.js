const throttle = (cb, limit) => {
  let isThrottle;
  return function (...args) {
    if (!isThrottle) {
      cb(args);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, limit);
    }
  };
};

const shoot = () => {
  console.log("function called");
};
const throt = throttle(shoot, 500);
document.getElementById("shootbtn").addEventListener("click", function (e) {
  throt();
});
