// for, while , do while , for of , for in

// for loop
let n  = 6;
for(let i= 1;i<=10;i++){
    console.log(n*i);
}

// while loop
let num= 6;
let j =1;
while(j<=10){
    console.log(num*j);
    j++;
}

// for of loop
let str = "asif hussain";
for(k of str) {
    console.log(k);
}

let str1 = " i am a student";
for(l of str1){
    console.log(l);
}

//for in loop

let student = {
    name : "asif",age : 20 , id : 10
}
for(m in student){
    console.log(m,student[m]);
}