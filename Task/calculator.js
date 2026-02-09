 math.js
functionadd(a, b) {
return a + b;
}

module.exports = add;

const add =require("./math");
console.log(add(2,3));

math.js
function add(a, b) {
return a + b;
}

function sub(a, b) {
return a - b;
}

module.exports = { add, sub };

const math =require("./math");
math.add(2,3);
math.sub(5,2);
const utils =require("./utils");

const fs =require("fs");
const express =require("express");

// counter.js
let count =0;
count++;

module.exports = count;

const a = require("./counter");
const b = require("./counter");
const c = require("./counter");

console.log(a, b, c)



