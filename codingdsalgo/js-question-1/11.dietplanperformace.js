// function dietPlanPerformace(calorie, k, lower, upper) {
//   let total = 0;
//   let points = 0;
//   for (i = 0; i < calorie.length; i++) {
//     total = total + calorie[i];
//     if (i + 1 < k) continue;
//     if (i + 1 > k) {
//       total = total - calorie[i - k];
//     }
//     if (total < lower) points--;
//     if (total > upper) points++;
//     if (i + 1 > k) {
//     }
//   }
//   return points;
// }

function dietPlanPerformace(calorie, k, lower, upper) {
  let total = 0;
  let points = 0;
  for (let i = 0; i < calorie.length; i++) {
    total = total + calorie[i];
    if (i + 1 < k) continue;
    if (i + 1 > k) {
      total = total - calorie[i - k];
    }
    if (total < lower) points--;
    if (total > upper) points++;
  }
  return points;
}
console.log(dietPlanPerformace([6, 5, 0, 0], 2, 1, 5));
