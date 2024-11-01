/////////////////////////////////////////////////////////////
// for 반복
// for ( [시작값]; [조건]; [증감값])
console.log('for 반복');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4

// 시작값과 증감값 생략
let i_2 = 4;
for (; i_2 < 6; ) {
    console.log(i_2++);
}
// 4
// 5

// continue, break 활용
for (let i = 0; i < 5; i++) {
    if (i===4) {
        break;
    }
    if (i==1) {
        continue;
    }
    console.log(i);
}
// 0
// 2
// 3

/////////////////////////////////////////////////////////////
// for of 문
console.log('for of 반복');
const arr = [1, 2, 3];
for (const i of arr) {
    console.log(i);
}
// 1
// 2
// 3

/////////////////////////////////////////////////////////////
// while 문
console.log('while');
let i_3 = 0;

while ( i_3 < 5) {
    console.log(i_3++);
}

// 0
// 1
// 2
// 3
// 4

/////////////////////////////////////////////////////////////
// de while 문
console.log('do while')
let i_4 = 0;

do {
    console.log(i_4++);
} while ( i_4 < 5)

// 0
// 1
// 2
// 3
// 4
