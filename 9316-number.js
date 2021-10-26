//{문제}
// 당신은 N개의 테스트케이스들에게 반드시 인사를 해야 이 문제를 풀 수 있다.
// N개의 줄에 걸쳐
// "Hello World, Judge i!"
// 를 출력하는 프로그램을 만들라. 여기서 i는 줄의 번호이다.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = line;
    for(let i=1; i <= input; i++){
        console.log(`Hello World, Judge ${i}!`);
    }

  

  rl.close();
}).on("close", function() {
  process.exit();
});