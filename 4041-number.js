//{문제}
//두 양의 정수가 주어졌을 때, 첫 번째 수가 두 번째 수보다 큰지 구하는 프로그램을 작성하시오.

//코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = line.split(' ');
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
     if(a==0&&b==0){
         rl.close();
     }else if(a==b)
         console.log("No");
    else{
       console.log((a>b) ? "Yes":"No");
     }

}).on("close", function() {
  process.exit();
});