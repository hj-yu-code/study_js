/////////////////////////////////////////////////////////////
// for 반복
// for ( [시작값]; [조건]; [증감값])
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