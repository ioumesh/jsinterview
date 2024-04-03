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
const thortShoot = throttle(shoot, 3000);
const throt = throttle(shoot, 500);
document.getElementById("shootbtn").addEventListener("click", function (e) {
  thortShoot();
});
