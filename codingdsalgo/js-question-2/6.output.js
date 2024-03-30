console.log(!!null);
console.log(!!1);
console.log(+true);

console.log(new Number(0)); //contructir funtion is truth
console.log(new Boolean(false));

console.log(eval("10*10+5"));
console.log([..."umesh"]);
console.log(3 + 4 + "5"); //typecast convert into string
console.log(parseInt("7*6", 10)); //* is not valid so it will return 7 only and ignore other things

console.log(parseInt("7F6", 16));

console.log(Number(2) === Number(2));
console.log(Boolean(true) === Boolean(true));
console.log(Symbol("kiran") === Symbol("kiran")); //unique
console.log(String.raw`hello\nworld`); //we have to pass the exact path
console.log("i want icecream"[0]);
console.log("i want icecream".charAt(0));
console.log(false || {} || null); //or return first truth
console.log(null || false || ""); //it will retrun in last false
console.log([] || 0 || false);
