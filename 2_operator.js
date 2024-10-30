
/////////////////////////////////////////////////////////////
// 산술 연산자
// +, -, *, /(몫), %(나머지), **(지수)

/////////////////////////////////////////////////////////////
// 증감 연산자
// ++, --

/////////////////////////////////////////////////////////////
// 비교 연산자
// <, <=, >, >=
// ==, ===, !==
const a = 123;
const b = '123';
console.log(a==b); // true
console.log(a===b); // false
console.log(a!=b); // false
console.log(a!==b); // true

/////////////////////////////////////////////////////////////
// 논리 연산자
// &&, ||, !
const isA = true;
const isB = false;
console.log(isA && isB); // false
console.log(isA || isB); // true
console.log( !isA ); // false

/////////////////////////////////////////////////////////////
// 삼항 연산자
// (조건)? (참일 때 실행 부분) : (거짓일 때 실행 부분)

/////////////////////////////////////////////////////////////
// Nullish 연산자
// ?? : null 또는 undefined 아닌 값이 나올때까지 넘어감
const A_undefined = undefined;
const B_null = null;
const C_str = '혜정';
console.log(A_undefined ?? B_null ?? C_str); // '혜정'

/////////////////////////////////////////////////////////////
// 비트 연산자
// &, |, ~, ^, <<, >>

/////////////////////////////////////////////////////////////
// 대입 연산자
// =
// 복합대입 연산자
// +=, -=, ...


/////////////////////////////////////////////////////////////
// 전개구문
// ... : 내부 값들을 꺼내서 출력
const numbers = [1, 2, 3];
console.log(numbers); // (3) [1, 2, 3]
console.log(...numbers); // 1 2 3

const numbers2 = [4, 5, 6];
const new_numbers = [numbers, numbers2];
const new_numbers2 = [...numbers, ...numbers2];
console.log(new_numbers); // (2) [Array(3), Array(3)] 
console.log(new_numbers2); // (6) [1, 2, 3, 4, 5, 6]
