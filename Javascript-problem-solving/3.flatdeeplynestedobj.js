const flattenObj = (obj, parent) => {
  let finalObj = {};
  const generateFlatObj = (obj, parent, finalObj) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlatObj(value, newParent + ".", finalObj);
      } else {
        const result = value;
        finalObj[newParent] = result;
      }
    }
  };
  generateFlatObj(obj, parent, finalObj);
  return finalObj;
};

const obj = {
  A: "12",
  B: 23,
  c: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(flattenObj(obj, ""));
