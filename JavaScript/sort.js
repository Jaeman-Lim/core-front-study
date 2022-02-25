// 문자열 정렬
let fruit = ['orange', 'apple', 'banana'];
fruit.sort();
// console.log(fruit);

// 숫자 정렬
let score = [4, 11, 2, 10, 3, 1];

score.sort(function(a, b) {
    return a-b; //오름차순
    // return b-a; //내림차순
});
// console.log(score);

//숫자 정렬(함수형)
score.sort(function(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
// console.log(score);

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
})
student.sort(function(a, b) {
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0   //내림차순
})

//나이순으로 정렬
student.sort(function(a, b) {
    if (a.age > b.age) return -1
    if (a.age == b.age) return 0
    if (a.age < b.age) return 1
})
//오름차순
//내림차순
console.log(student);

