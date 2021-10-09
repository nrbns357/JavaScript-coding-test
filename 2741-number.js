//{문제}
//자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

//코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = line;
    const output = [];
    for(let i=1; i <= input; i++){
        output[i-1]=i;
    }
    console.log(output.join("\n"));
    
  rl.close();
}).on("close", function() {
  process.exit();
});


//다른 방법
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = Number(line);
    let str = '';
    for(let i=1; i <= input; i++){
        str+=(i+'\n');
    }
    console.log(str.slice(0, -1));
    
  rl.close();
}).on("close", function() {
  process.exit();
});