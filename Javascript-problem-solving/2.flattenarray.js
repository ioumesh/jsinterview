function flattenArray(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = acc.concat(flattenArray(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

const input = [1, [1, 2], [4, 5]];
console.log(flattenArray(input));
