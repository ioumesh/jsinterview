// create an element and append

const heading = document.createElement("h2");
const headingText = document.createTextNode("hello i am heading");
heading.appendChild(headingText);
const element = document.getElementById("heading");
element.appendChild(heading);

// childnode
// children

// remove child
element.removeChild(heading)