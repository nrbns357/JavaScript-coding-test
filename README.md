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
**split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.**<br/>

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

**#예시**<br/>
**Number 객체는 숫자 값으로 작업할 수 있게 해주는 래퍼(wrapper) 객체입니다. Number 객체는 Number() 생성자를 사용하여 만듭니다.**<br/>

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


**#parseInt() 함수**<br/>
