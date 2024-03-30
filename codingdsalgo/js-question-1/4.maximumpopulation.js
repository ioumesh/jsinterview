// constraint :years can only be between 1950 to 2050 -100years

const maximumPopulationYear = (logs) => {
  let offset = 1950;
  let bucket = new Int8Array(100);
  for (let set of logs) {
    const [birth, death] = set;
    for (let i = birth - offset; i < death - offset; i++) {
      bucket[i]++;
    }
  }
  let maxPop = 0;
  let maxYear = 0;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] > maxPop) {
      maxPop = bucket[i];
      maxYear = i;
    }
  }
  return maxYear + offset;
};

const input = [
  [1993, 1999],
  [2000, 2010],
];

console.log(maximumPopulationYear(input));
