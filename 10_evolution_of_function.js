// way one of writing function in js
function funcOne(){
    console.log("my precious comment!...")
}
funcOne();

// way two of writing function in js
const funcTwo = function(){
    console.log('My comment 2');
}
funcTwo();

// way three of writing function in js
const funcThree = () => {
    console.log('My comment 3');
}
funcThree();

// way four of writing function in js
const funcFour = () => {
    return 'My comment 4'; //returns the value
}  
console.log(funcFour());

// way five of writing function in js
const funcFive = () => 'My comment 5';  //returns the value
console.log(funcFive());