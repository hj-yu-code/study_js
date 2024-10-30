/////////////////////////////////////////////////////////////

const a = 10;
const b = 20;
const c = 20;


/////////////////////////////////////////////////////////////
// if 조건문
if (a<b)
    console.log('step0');
// step0

if (a>b) {
    console.log('step1');
} else if (b===c) {
    console.log('step2');
} else {
    console.log('step3');
}
// step2


/////////////////////////////////////////////////////////////
// switch 조건문
const number = 10;

switch (number) {
    case 1:
        console.log(`${number} step1`);
        break; // 없다면 다음 case도 실행됨
    case 10:
        console.log(`${number} step2`);
        break;
    default:
        console.log('default');
}
// 10 step2