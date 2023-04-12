// Javascript first class function
// function as variable reference
// function as return value
// function as input argument

// function func(){
//     console.log("my precious comment!...")
// }
// func();

// const func = function(){
//     console.log('My comment 2');
// }
// func();

//higher order function and callback function
// function outerFunc(){
//     return function innerFunc(){
//         console.log("Inner function is here!!!");
//     }
// }
// outerFunc()();

function outerFunc(innerFunc){
    console.log(innerFunc())
}
outerFunc(function(){
    console.log('Inner function here');
})