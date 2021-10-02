#Baek_Joon
백준의 문제들을 javaScript로 푼 코드를 올리는 저장소 입니다.<br/><br/>

###새로 배운 js함수<br/><br/>


##Math.pow()함수<br/>
함수는base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.<br/><br/>

#예시<br/><br/>
 ```Math.pow(base, exponent); ```<br/>
base : 2,8,10,16 진수를 넣는 곳.<br/>
exponent : 진수들을 제곱하기 위해 사용하는 지수. <br/><br/>

#다른 방법 예시<br/>
```(base ** exponent)```<br/>
** 두개만 적어도 Math.pow의 역할을 한다.<br/><br/>

#다른 방식으로도 쓰이니 궁금하면 찾아 보시길 바랍니다. (다른 방식은 추후에 업로드 예정)



##split() 함수
split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

#예시
const str = 'The✔quick✔brown✔fox';

const words = str.split('✔'); // ✔표시가 된 부분을 인식 하고 배열로 나눠서 출력할수있다.
console.log(words[3]);
// expected output: "fox"

#다른 예시
const str = 'A,B,C,D';

const words = str.split(','); // ,표시가 된 부분을 인식 하고 배열로 나눠서 출력할수있다.
console.log(words[2]);
// expected output: "C"

#다른 방식으로도 쓰이니 궁금하면 찾아 보시길 바랍니다. (다른 방식은 추후에 업로드 예정)



##Number() 함수

#예시




#sort() 함수

#parseInt() 함수
