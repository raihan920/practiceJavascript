const arr = ['We', 'love', 'web', 'development'];

arr.forEach(function(elm){
    console.log(elm);
});
//(value, index, array )
arr.forEach(function(elm, index){
    console.log(index, elm);
});