const radius = [3, 1, 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}


// reusable-1
const calculate = function (arr, logic) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

// reusable-asMap
Array.prototype.calculateAsMap = function (logic) {
    const output = []
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// reusable with existing function "map"
console.log("Area is " + radius.map(area))

// call reUsable1
console.log("Area is " + calculate(radius, area));

// call reUsableAsMap
console.log("Area is " + radius.calculateAsMap(area));


console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));