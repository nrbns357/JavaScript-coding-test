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
// [나중에 풀기]





// 9월 30일 2558번 문제 [A+B - 2]
// {문제}
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//코드
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]); 
console.log(a+b);