//{문제}
//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

//코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = line;
    
    let sum =0;
    for(let i=1; i<=input;i++){
        sum=sum+i;
    }
    
  console.log(sum);

  rl.close();
}).on("close", function() {
  process.exit();
});