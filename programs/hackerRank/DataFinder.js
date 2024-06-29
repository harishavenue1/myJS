'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

function dataFinder(data) {
    return function f(minInd, maxInd, value) {
        if (data.length-1 < maxInd || data.length === 0 || minInd > maxInd)
            throw new Error('Invalid range')
            
        for (let x=minInd; x<=maxInd; x++) {
            if (data[x] === value)
                    return true
        }
        return false
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const data = readLine().trim().split(' ');
    const finalData = data.map(val => parseInt(val));
    const join = dataFinder(finalData);
    try {
        const inputs = readLine().trim().split(' ');
        const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
        ws.write(result.toString());
    } catch(e) {
        ws.write(`${e}`);
    }
    ws.end();
}
