const debouce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
};

const callApi = function () {
  console.log("...calling api");
};
const debounceApi = debouce(callApi, 500);
const input = document.getElementById("search-input");

input.addEventListener("input", function (e) {
  debounceApi();
});
