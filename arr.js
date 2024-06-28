let arr = ["asif","fazal","adil","mustary"];
console.log(arr);

console.log(arr.length);        // property

console.log(arr[0],arr[1]);


arr[0]="abcd";      // arrays are mutable
console.log(arr);

// looping over arrays
for(let i =0;i<=arr.length;i++){
    console.log(arr[i]);
}

for(let j of arr){
    console.log(j);
}
 

// practise ques

let marks = [20,40,80,70,60,10];
sum = 0;
for(m of marks){
    console.log(m);
    sum+=m;

}
console.log(sum);

let price = [450,700,800,900,1200];
let i=0;
for(let val of price){
    let offer = val/10;
    price[i]= price[i]-offer;
    console.log("value after offer =${items[i]}");
    i++;

}

