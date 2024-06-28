

// let - cant be redeclared  but can be updated
let name = "mustary";
// let name = "asif "       this cant be done
name = "asif"     
console.log(name);

// const - cant be redeclared and updated
const pi = 3.14;
console.log(pi);


// note : let can be redecalred in different block of codes.
{
    let college = "vit ap";
    console.log(college);

}

{
    let college = "srkr";
    console.log(college);
}