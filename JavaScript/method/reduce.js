// 1. 배열의 모든 값 (1부터 10까지) 더하기

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result1 = number.reduce((acc, curr, i) => {
    // console.log(acc);
    // console.log(curr);
    // console.log(i);
    // console.log(acc, curr, i);
    return acc + curr;
}, 0);

// console.log(result1);

// 2. callback함수 선언 후 이용

function sumResult(acc, curr) {
    return acc+curr;
}

let result2 = number.reduce(sumResult)
console.log(result2);


// 3. object 배열에서 원하는 항목의 값만 더하기
const friends = [
    {        
        name: '최영우',
        age: 36,
        job: '공인중개사',
        married: false
    },
    {        
        name: '임재만',
        age: 23,
        job: '투자자',
        married: true
    },
    {        
        name: '한우택',
        age: 26,
        job: '회사원',
        married: true
    },
]

let result3 = friends.reduce((acc, curr) => {
    // console.log(acc);
    // console.log(curr);
    return acc + curr.age;
}, 0);
// console.log(result3);

// 4. map 처럼 활용
const numbersReduce = number.reduce((acc, curr) => {
    acc.push(curr*2);
    return acc;
}, []);

// console.log(numbersReduce);

const oneTwoThree = number.reduce((acc, curr) => {
    acc.push(curr % 2 ? '짝수' : '홀수');
    return acc;
}, []);

// console.log(oneTwoThree);

// 5. filter 처럼 활용
const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon'];

const filterReduce = fruits.reduce((acc, curr) => {
    // acc.push(curr.length > 5)
    if (curr.length > 5) {
        acc.push(curr);
    }
    return acc;
}, []);

// console.log(filterReduce);

// 6. find 처럼 활용
const arr = [4, 15, 377, 395, 400, 1024, 3000, 1121]
const findReduce = arr.reduce((acc, curr) => {
    if (typeof acc == 'undefined' && curr % 5 == 0) {
        acc = curr;
    }
    return acc;
}, undefined);

console.log(findReduce);