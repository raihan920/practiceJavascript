let name = "Raihan"

function reverseString(name){
    let n = name.split('');
    console.log(n);
    // console.log(n.reverse());
    // console.log(n.join(''));
    return n.reverse().join('');
}

console.log(reverseString(name));