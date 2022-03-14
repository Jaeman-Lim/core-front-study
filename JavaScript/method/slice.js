const numbers = [1, 2, 3, 4, 5];
// 양수 index    0, 1, 2, 3, 4
// 음수 index   -5,-4,-3,-2,-1

console.log(numbers.slice()); // index 0부터 추출(0, undefined, null 동일 동작)
// expected : [1, 2, 3, 4, 5];

console.log(numbers.slice(1)); // index 1부터 추출
// expected : [2, 3, 4, 5];

console.log(numbers.slice(-2)); // 마지막요소부터 마지막에서 두번째 요소까지 추출
// expected : [4, 5];

console.log(numbers.slice(99)); // 배열의 길이보다 클 경우 빈 배열
// expected : [];

console.log(numbers.slice(1, 4)); // index 1부터 index 4까지(index 4제외) 추출
// expected : [2, 3, 4];

console.log(numbers.slice(2, -1)); // index 2부터 마지막에서 첫번째 요소까지(마지막에서 첫번째 요소 제외) 추출
// expected : [3, 4];

console.log(numbers.slice(2, 99)); // index 2부터 마지막에서 요소까지 추출(end가 배열의 길이보다 큼)
// expected : [3, 4, 5];

// Using slice, create newCar from myCar.
let myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};

let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = " + JSON.stringify(myCar));
console.log("newCar = " + JSON.stringify(newCar));
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
