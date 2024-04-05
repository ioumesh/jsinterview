function debouce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

const input = document.getElementById("input");

const apiCalling = () => {
  console.log("api calling....");
};
const debounceApi = debouce(apiCalling, 2000);
input.addEventListener("input", () => {
  debounceApi();
});
