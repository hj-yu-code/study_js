/////////////////////////////////////////////////////////////
// 기본 자료형 정리
const age = 20;
const age_n = 20n;
const job = '개발자';
const isTrue = true;
const constNull = null;
const constUndefined = undefined;

console.log(typeof age); // number
console.log(typeof age_n); // bigint : 큰 정수형 범
console.log(typeof job); // string
console.log(typeof isTrue); // boolean
console.log(typeof constNull); // object: null을 선언하여 값이 없는 상태
console.log(typeof constUndefined); // undefined: 값이 지정되지 않은 상태

/////////////////////////////////////////////////////////////
// ` (백틱) 사용
const msg = '저는 ' + job + '이고, ' + age + '살 입니다.'
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg);
console.log(msg2);


/////////////////////////////////////////////////////////////
// 참조데이터 타입: 배열, 객체, 함수


/////////////////////////////////////////////////////////////
// 배열: data 집합
const arr = [1, 2, 3];
console.log(arr); // Array(3)
console.log(arr[0]); // 1

/////////////////////////////////////////////////////////////
// 객체: 여러 datatype 사용 가능
// Key-value의 Proto type 형태
const obj = {
    name: '혜정',
    job: '개발자',
};
console.log(obj); // {name: '혜정', job: '개발자'}
console.log(obj.job); // 개발자 : 점 표기
console.log(obj['name']); // 혜정 : 대괄호 표기

/////////////////////////////////////////////////////////////
// 배영과 객체 중첩
const arr_ex = [1, 2, 3, [4, 5]];
console.log(arr_ex); // [1, 2, 3, Array(2) ]
const arr_ex2 = [1, 2, 3, {name:'혜정'}];
console.log(arr_ex2); // [1, 2, 3, {...} ]
const obj_ex = {
    arr: [1,2,3], 
    something: {
        name: '혜정'
    },
};
console.log(obj_ex) // {arr: Array(3), something: {...}}
