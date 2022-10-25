// {문제}
// 16진수 수를 입력받아서 10진수로 출력하는 프로그램을 작성하시오.

// 코드
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line;
  let sum = 0;
  const getNumber = (char) => {
    switch (char) {
      case "0":
        return 0;
      case "1":
        return 1;
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "A":
        return 10;
      case "B":
        return 11;
      case "C":
        return 12;
      case "D":
        return 13;
      case "E":
        return 14;
      case "F":
        return 15;
    }
  };
  for (let i = 0; i < input.length; i++) {
    sum += getNumber(input[i]) * Math.pow(16, input.length - (i + 1));
  }
  console.log(sum);

  rl.close();
}).on("close", function () {
  process.exit();
});
