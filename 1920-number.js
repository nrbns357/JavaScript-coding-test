// {문제}
// N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [코드]
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = Array.from({ length: 100001 }, () => 0);
arr = [];
let num = 0;
rl.on("line", function (line) {
  num += 1;
  if (num % 2 == 1) {
    return;
  } else if (num % 2 == 0) {
    arr.push(line);
  }
}).on("close", function () {
  const number1 = arr[0].split(" ");
  const number2 = arr[1].split(" ");
  const numberArray = [];
  for (let i = 0; i < number1.length; i++) {
    input[number1[i]] = 1;
  }
  for (let j = 0; j < number2.length; j++) {
    if (input[number2[j]] == 1) {
      numberArray[j] = 1;
    } else {
      numberArray[j] = 0;
    }
  }
  let ar = numberArray.join("\n");
  console.log(ar);
  process.exit();
});
