# Baek_Joon


**새로 배운 js함수**<br/><br/>


**#Math.pow()함수**<br/>
함수는base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.<br/><br/>

**#예시**<br/>
 ``` Math.pow(base, exponent);```<br/>
base : 2,8,10,16 진수를 넣는 곳.<br/>
exponent : 진수들을 제곱하기 위해 사용하는 지수. <br/><br/>

**#다른 방법 예시**<br/>
```(base ** exponent)```<br/>
** 두개만 적어도 Math.pow의 역할을 한다.<br/><br/>

***다른 방식으로도 쓰이니 궁금하면 찾아 보시길 바랍니다. (다른 방식은 추후에 업로드 예정)***<br/><br/><br/>



**#split() 함수**<br/>
**이 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.**<br/>

**#예시**<br/>
```
const str = 'The✔quick✔brown✔fox';
const words = str.split('✔'); // ✔표시가 된 부분을 인식 하고 배열로 나눠서 출력할수있다.
console.log(words[3]);
// expected output: "fox"
```

**#다른 예시**<br/>
```
const str = 'A,B,C,D';
const words = str.split(','); // ,표시가 된 부분을 인식 하고 배열로 나눠서 출력할수있다.
console.log(words[2]);
// expected output: "C"
```

***다른 방식으로도 쓰이니 궁금하면 찾아 보시길 바랍니다. (다른 방식은 추후에 업로드 예정)***<br/><br/><br/>



**#Number() 함수**<br/><br/>

**Number 객체는 숫자 값으로 작업할 수 있게 해주는 래퍼(wrapper) 객체입니다. Number 객체는 Number() 생성자를 사용하여 만듭니다.**<br/>

**#예시**<br/>
```
new Number(value);
var a = new Number('123'); // a === 123은 false
var b = Number('123'); // b === 123은 true
a instanceof Number; // true
b instanceof Number; // false
```
**value : 생성할 객체의 숫자 값.**<br/><br/>
Number 객체의 주된 용도는 다음과 같습니다.
만약 인수를 숫자로 변환할 수 없으면 NaN을 리턴합니다.
생성자로써 사용하지 않으면(new 연산자를 사용하지 않으면) Number를 사용하여 형변환을 할 수 있습니다.<br/><br/>

**#sort() 함수**<br/><br/>
이 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 
정렬은 stable sort가 아닐 수 있습니다. 
기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.


**#예시**
```
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => a - b); // {중요} sort함수 안에 (a,b) => a - b 써서 a와 b를 뺄셈을 하여 나온 값이 양수이면 a가 b와 자리를 바꾼다, 
//또 음수이면 자리를 바꾸지 않고 뒤에 배열안의 값과 뺄셈을 한다
//예를 들어 1-30 = -29 이다. 음수이기 때문에 자리를 바꾸지 않고 30의 뒤에 값인 4와 뺄셈을 한다 30-4 = 26 양수 이기 때문에 30 과 4의 자리를 바꾼다. 
//이렇게 하여 작은 값은 앞으로 큰 값은 뒤로 가는 정렬 방식이다. 이것은 외워두면 정말 좋은 방식이다.
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

**#parseInt() 함수**<br/>
함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.
```
let Hex = 'A';
console.log(roughScale(Hex, 16)); // 16진수를 10진수로 바꾸는 코드
```



**#join() 함수**  
join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.    

**#예시**  
```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(''));
// expected output: "FireAirWater" // 'Fire', 'Air', 'Water'이 사이사이에 아무런 기호 없이 출력이 된다. 

console.log(elements.join('-'));
// expected output: "Fire-Air-Water" // 'Fire', 'Air', 'Water'이 join('-'); 이렇게 써준다면 사이사이에 ' - '이 붙어서 출력이 된다.
```
  
  
**#slice() 함수**  
slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.   
원본 배열은 바뀌지 않습니다.

**#예시**   
```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//예를 들어, slice(1,4)는 두번째 요소부터 네번째 요소까지 (1, 2 및 3을 인덱스로 하는 요소) 추출합니다.

console.log(animals.slice(2)); 
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```
  
음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 
slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.  

