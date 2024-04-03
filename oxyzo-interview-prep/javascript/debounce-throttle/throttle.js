function throttle(cb, delay) {
  let isThorttle;
  return function (...args) {
    if (!isThorttle) {
      cb(args);
      isThorttle = true;
      setTimeout(() => {
        isThorttle = false;
      }, delay);
    }
  };
}

const btn = document.getElementById("shoot-btn");

const shoot = () => {
  console.log("shooting");
};
const throttleShoot=throttle(shoot,5000)
btn.addEventListener("click", () => {
throttleShoot()
});
