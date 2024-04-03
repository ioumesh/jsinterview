function debounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

const input = document.getElementById("type-input");

const callingApi = () => {
  console.log("api calling");
};
const debounceApi = debounce(callingApi, 3000);
input.addEventListener("input", () => {
  debounceApi();
});
