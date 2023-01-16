const myArr = ['This', 'is', 'an', 'array'];
//finding length of an array
console.log(myArr.length);
//accessin specific element
console.log(myArr[1]);
//adding data at the end of the array
console.log(myArr.push('!'));
console.log(myArr);
//removing data from the end of the array
console.log(myArr.pop());
console.log(myArr);
//adding data at the beginning of the array
console.log(myArr.unshift('!'));
console.log(myArr);
//removing data from the beginning of the array
console.log(myArr.shift('!'));
console.log(myArr);
//accessing specific part of an array
console.log(myArr.slice(0,2));
console.log(myArr);
// console.log(myArr.splice(0,2));
// console.log(myArr);
//adding data to an array other way
console.log(myArr.concat('This','is'));
console.log(myArr);
//making the array empty
// console.log(myArr.length=0);
// console.log(myArr);

//splice other way
console.log(myArr.splice(1,1,"was"));
console.log(myArr);

//array slice adding new element in array
let newArr = ['It', ...myArr.slice(1)];     //...denotes flating an array(it is called 'spread operator')
console.log(newArr);