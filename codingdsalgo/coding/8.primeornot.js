// A prime number is only divisible by 1 and itself
function isPrime(number) {
  // step :no less than 2 is not prime
  for (let i = 2; i <= number / 2; i++) {
    // step2 remainder must not be zero to be prime
    if (number % i === 0) {
      return false; //number is divisible by i hence not prime
    }
  }
  return true;
}

console.log(isPrime(7)); //output true
console.log(isPrime(10)); //output false
