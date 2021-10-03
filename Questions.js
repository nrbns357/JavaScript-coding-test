// 9월 28일 1920번 문제 [수찾기]
// {문제}
// N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [코드]
// [나중에 풀기]





// 9월 28일 2750번 문제 [수 정렬하기]
// {문제}
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

// 코드
// [나중에 풀기]





// 9월 29일 1000번 문제 [A+B]
// {문제}
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 코드
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);





// 9월 29일 1001 문제 [A-B]
// {문제}
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

// 코드
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a-b);





// 9월 29일 1330번 문제 [두 수 비교하기]
// {문제}
// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

// 코드
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);


if(a>b){
    console.log('>');
}else if(a<b){
    console.log('<');
}else if(a==b){
    console.log('==');
}





// 9월 29일 2557번 문제 [Hello World]
// {문제}
// Hello World!를 출력하시오.

// 코드
console.log("Hello World!");





// 9월 29일 1550번 문제 [16진수]
// {문제}
// 16진수 수를 입력받아서 10진수로 출력하는 프로그램을 작성하시오.

// 코드
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.on('line', function(line) {
    const input = line;
      let sum=0;
      const getNumber = (char) => {
          switch(char){
              case '0' : return 0;
              case '1' : return 1;
              case '2' : return 2;
              case '3' : return 3;
              case '4' : return 4;
              case '5' : return 5;
              case '6' : return 6;
              case '7' : return 7;
              case '8' : return 8;
              case '9' : return 9;
              case 'A' : return 10;
              case 'B' : return 11;
              case 'C' : return 12;
              case 'D' : return 13;
              case 'E' : return 14;
              case 'F' : return 15;
              }
          
      };
      for(let i = 0; i < input.length; i++){
          sum += getNumber(input[i]) * Math.pow(16,input.length-(i+1));
      }
    console.log(sum);
  
    rl.close();
  }).on("close", function() {
    process.exit();
  });





// 9월 30일 2558번 문제 [A+B - 2]
// {문제}
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//코드
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]); 
console.log(a+b);





// 10월 2일 2752 문제 [세수정렬]
//{문제}
//동규는 세수를 하다가 정렬이 하고싶어졌다.
// 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다.
// 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.

//코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum=0;
rl.on('line', function(line) {
    let input = line.split(' ');
    input[0] = Number(input[0]);
    input[1] = Number(input[1]);
    input[2] = Number(input[2]);
for(let i = 0; i <= 2; i++) {
    
    if (input[0] > input[1]) 
    {
			sum = input[0]; 
			input[0] = input[1]; 
			input[1] = sum; 
		}
    else if (input[1] > input[2]) 
    {
			sum = input[1];
			input[1] = input[2];
			input[2] = sum;
		}
	else if(input[0] > input[2])
    {
			sum = input[0];
			input[0] = input[2];
			input[2] = sum;
		}
	}
	console.log(input[0], input[1], input[2]);
  rl.close();
}).on("close", function() {
  process.exit();
});

//다른 풀이
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
input.sort((a, b) => a -b);
console.log(input.join(' '));





//10월 3일 2741 문제 [N 찍기]
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





//10월 3일 2742 문제 [기찍 N]
//{문제}
//자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

//코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = Number(line);
    let str = '';
    for(let i=input; i >= 1; i--){
        str+=(i+'\n');
    }
    console.log(str.slice(0, -1));
    
  rl.close();
}).on("close", function() {
  process.exit();
});