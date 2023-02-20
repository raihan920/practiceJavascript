//... denotes rest operator
const arr1 = ['I', 'love', 'programming'];
const arr2 = ['We', 'love', 'web', 'development'];
//destructuring array
const [elm1, elm2, elm3] = arr1;
console.log(elm1, elm2, elm3);
//using rest operator ... while destructuring
const [elm4, ...restElm] = arr2;
console.log(elm4, restElm);

const [...myRest] = arr2;
console.log(myRest)

//use of 'rest operator' in object
const studentInfo = {
    student_id: 123,
    studetn_name: "Abdur Rahman",
    student_age: 30,
    student_gender: "Male",
    student_department: "CSE"
}
console.log(studentInfo);
const {student_id, ...restObjElm} = studentInfo;
console.log(student_id, restObjElm);