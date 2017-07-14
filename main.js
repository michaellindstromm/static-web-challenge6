let firstTen = [];
for (var i = 0; i < 10; i++) {
  firstTen[i] = i+1;
}
console.log(firstTen);

let sumOfSquares = 0;

for (var i = 0; i < firstTen.length; i++) {
  sumOfSquares += (firstTen[i]**2);
}
console.log(sumOfSquares);

let sum = 0;
let squareOfSums = 0;
for (var i = 0; i < firstTen.length; i++) {
  sum += firstTen[i];
}
console.log(sum);
sum = sum**2;
console.log(sum);
let difference = sum - sumOfSquares;
console.log(difference);

document.getElementById("sumsSquares").innerHTML = `<p>The Difference is: ${difference}</p>`
