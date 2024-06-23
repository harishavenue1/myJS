const arr = [5, 1, 3, 2, 6]

function double(x) {
    return 2 * x;
}

function binary(x) {
    return x.toString(2);
}

function fn_filterOdd(x) {
    return x % 2 === 1;
}

function fn_filterEven(x) {
    return x % 2 === 0;
}

function fn_filterGreat4(x) {
    return x > 4;
}

const doubler = arr.map(double);
console.log("Doubler " + doubler);

const binaryOut = arr.map(binary);
console.log("Binary " + binaryOut);

const filterOdd = arr.filter(fn_filterOdd);
console.log("Filter Odd " + filterOdd);

const filterEven = arr.filter(fn_filterEven);
console.log("Filter Even " + filterEven);

const g4 = arr.filter(fn_filterGreat4);
console.log("Filter G4 " + g4);

// reduceSum-1
const reduceSum = arr.reduce(function (acc, cur) {
    acc = acc + cur;
    return acc;
}, 0);

console.log("Reduce via detailed sum " + reduceSum)

// reduceSum-2
console.log("Reduce as Sum " + arr.reduce((a, b) => a + b));

// reduceMax-1
const reduceMax = arr.reduce(function (max, cur) {
    if (cur > max)
        max = cur;
    return max;
}, 0);

console.log("Reduce via detailed max " + reduceMax)

// realWorldQn

const users = [
    { firstName: "a", lastName: "a1", age: 26 },
    { firstName: "b", lastName: "b1", age: 75 },
    { firstName: "c", lastName: "c1", age: 50 },
    { firstName: "d", lastName: "d1", age: 26 },
];

// count ages
const outputAge = users.reduce(function (acc, cur) {
    if (acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age];
    } else {
        acc[cur.age] = 1;
    }
    return acc;
}, {});

console.log("user wise age", outputAge);

// get age wise name
const outputAgeWiseName = users
    .filter(x => x.age < 30)
    .map(x => x.firstName);
console.log("age wise name", outputAgeWiseName);

