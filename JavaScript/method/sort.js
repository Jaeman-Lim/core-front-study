// 문자열 정렬
let fruit = ['orange', 'apple', 'banana'];
fruit.sort();
console.log(fruit);

// 숫자 정렬
let score = [4, 11, 2, 10, 3, 1, 5];

/**
 * 오름차순 메커니즘
 * 반환 값 < 0 a가 b보다 앞에 있어야 한다.
 * 반환 값 = 0 a와 b의 순서를 바꾸지 않는다.
 * 반환 값 > 0 b가 a보다 앞에 있어야 한다.
 */

// 오름차순
score.sort(function(a, b) {
    return a-b;
});
// 내림차순
score.sort(function(a, b) {
    return b-a;
});

//숫자 정렬(함수형)

// 오름차순
score.sort(function(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
//내림차순
score.sort(function(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});

console.log(score);

// 오브젝트 정렬
let student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

// 이름순으로 정렬
student.sort(function(a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0   //오름차순
});
student.sort(function(a, b) {
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0   //내림차순
});
console.log(student);

//나이순으로 정렬
student.sort(function(a, b) {
    if (a.age > b.age) return -1
    if (a.age == b.age) return 0
    if (a.age < b.age) return 1
});

console.log(student);

const arr = ['banana', 'b', 'Boy'];

arr.sort(function(a, b) {
    const upperCaseA = a.toUpperCase();
    const upperCaseB = b.toUpperCase();

    if(upperCaseA > upperCaseB) return 1;
    if(upperCaseA < upperCaseB) return -1;
    if(upperCaseA == upperCaseB) return 0;
});

console.log(arr);
