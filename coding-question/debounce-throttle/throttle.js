function throttle(cb, limit) {
  let isThottle;
  return function (...args) {
    if (!isThottle) {
      cb(args);
      isThottle = true;
      setTimeout(() => {
        isThottle = false;
      }, limit);
    }
  };
}

const btn = document.getElementById("shoot");

const Shooting = () => {
  console.log("shooting");
};
const throttleShoot = throttle(Shooting, 3000);
btn.addEventListener("click", () => {
  throttleShoot();
});
