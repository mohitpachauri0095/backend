console.log("A");
console.log("B");

// for (let i = 0; i < 1000000000000; i++) {
//   // Simulating a time-consuming task
//   let a=1;
// }
function sum(){
console.log("C");     
    return 1+2; 
}  
setTimeout(sum, 5000);
// let ab = setInterval(sum, 1000);

console.log("D");
console.log("E"); 