 math.js
functionadd(a, b) {
return a + b;
}

module.exports = add;

// index.js
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

