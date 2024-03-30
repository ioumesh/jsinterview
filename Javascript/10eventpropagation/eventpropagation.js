const div = document.getElementById("div");
const form = document.getElementById("form");
const btn = document.getElementById("button");

div.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("div clicked");
});

form.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("form clicked");
});

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("button clicked");
});


// bubble
// capture
// event.target, this.target, event.currentTarget.tagName
// event.stopPropagation