function kebabToSnake(x) {
  var word = "";
  if (typeof x === "string") {
    for (var i = 0; i < x.length; i++) {
      if ("-" === x.charAt(i)) {
        word += "_";
      }else {
        word += x.charAt(i);
      }
    }
  }

  return word;
}
console.log("Print 1")
var num1 = -10;
while (num1 <= 19) {
  console.log(num1);
  num1++;
}
console.log("Print 2")
var num1 = 10;
while (num1 <= 40) {
  if (num1 % 2 === 0)
  console.log(num1);
  num1++;
}
console.log("Print 3")
var num1 = 300;
while (num1 <= 333) {
  if (num1 % 2 === 1)
  console.log(num1);
  num1++;
}
console.log("Print 4")
var num1 = 5;
while (num1 <= 50) {
  if (num1 % 5 === 0 && num1 % 3 === 0)
  console.log(num1);
  num1++;
}
