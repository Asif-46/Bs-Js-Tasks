console.log("abc".toUpperCase());

//1
function myfunc(){
    console.log("hello welcome");
    console.log(" we are learning JS");
}
myfunc();

//2  argumented invovled function
function myfunc1(msg){
    console.log(msg);
}
myfunc1("Asif Hussain");

//3 
function myfunc2(a,b){
    s =a+b;
    return s;
}
let res = myfunc2(4,5);
console.log(res);


// arrow function
const arrsum = (a,b) => {
    console.log(a+b);
};
arrsum(5,9);

const arrowmul =(c,d) => {
    return c*d;
};
let result = arrowmul(5,10);
console.log(result);


const printhello =() => {
    console.log("hello world");
};
printhello();



// practise
function strlen(msg1){
    return msg1.length();
}
let res1 = strlen("asif");
console.log(res1);