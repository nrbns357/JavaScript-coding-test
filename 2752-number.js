//{문제}
//동규는 세수를 하다가 정렬이 하고싶어졌다.
// 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다.
// 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.

//코드
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
rl.on("line", function (line) {
  let input = line.split(" ");
  input[0] = Number(input[0]);
  input[1] = Number(input[1]);
  input[2] = Number(input[2]);
  for (let i = 0; i <= 2; i++) {
    if (input[0] > input[1]) {
      sum = input[0];
      input[0] = input[1];
      input[1] = sum;
    } else if (input[1] > input[2]) {
      sum = input[1];
      input[1] = input[2];
      input[2] = sum;
    } else if (input[0] > input[2]) {
      sum = input[0];
      input[0] = input[2];
      input[2] = sum;
    }
  }
  console.log(input[0], input[1], input[2]);
  rl.close();
}).on("close", function () {
  process.exit();
});

//다른 풀이
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
input.sort((a, b) => a - b);
console.log(input.join(" "));
