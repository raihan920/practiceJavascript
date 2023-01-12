let myText = "I love Programming";

//find length of an string
console.log(myText.length);

//finding/printing a character form a string
console.log(myText[0]);

//finding a character at an index
console.log(myText.charAt(5));

//finding index by character
console.log(myText.indexOf('e'));

//to uppercase
console.log(myText.toUpperCase());

//to loewrcase
console.log(myText.toLowerCase());

//check wherther some text is included in a string or not
console.log(myText.includes('gra'));

//remove additional spaces
console.log(myText.trim().length);      //trims from both side
console.log(myText.trimStart().length); //trims from left side
console.log(myText.trimEnd().length);   //trims from right side

//pulling out text form string
console.log(myText.slice(0, 6));        //slice(startIndex, endIndex)
console.log(myText.substr(5, 6));       //substr(startIndex, length)

//adding to the string
console.log(myText.concat('!!'));

//converting array form string
console.log(myText.split(' '));