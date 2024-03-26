//<Employee>  <Employee>
//String data type
 let firstname="Lavish";
let lastname="Jain";

let fullname=firstname+" "+lastname;
console.log(fullname);
document.write(fullname);

console.log(typeof fullname)


//decimal data 
let value1=10.5674;
console.log(value1);
console.log(typeof value1);


//let age;
//console.log(age);


// All the above one -primitive data type


// Array or refrence->
// homogenous and heterogenous 
let array1=[10,"Lavish",10.3,"Magesh","Krishna",67 ,89];
console.log(array1);
console.log(array1[4]);
array1[10]=100;
console.log(array1)


// Object Level type->JSON object->
// JSON-Javascript Object Notation->
// simple pair of curly braces 
// it is simple human readable data format for reading
// the data which stored in form key:value pair

//simple javascript object data type->
// Nested object 
let employee={
    name:"Sohan",
    age:38,
    designation:"Manager",
    address:{
        city:"Pune",
        state:"Maharastra",
        country:"India"
    }
}
console.log(employee.name);
console.log(employee.designation);
console.log(employee.address.city);

//destructure object->
// breaking of an object into single  
let {name,age,designation}=employee;//React

//Template Literal->$
// backticks with $ expression 
console.log(`
Name:${name}
Age:${age}
Designation:${designation}
`)


//would like to access city,state and country
//Destructurize it
let {city,state,country}=employee.address;

console.log(
` 
City:${city}
State:${state}
Country:${country}
 `
)


// Es-6 ->Ecmascript-2015

let Student={
    "sroll":101,
    "sname":"Kamal",
    "sage":20,
    "smobile":95544647737,
}

//Spread Operator ->to represent the data and merge the data from one object to other object 
// syntax: ... 
// Ecamscript-2015 
// let array1=[10,20,30,40];
// let array2=[...array1,78,45,34];
// console.log(array2);
// console.log(array1);


let android=["Nokia","Xiaomi","Samsung","vivo"];
let iphones=["iphone 11","iphone 12","iphone 13","iphone 14"];


//merge both in single object 
let allphone=[...android,...iphones];
console.log(allphone)


// Rest Parameters->... 
// functions 
// ->to skip or consider a particular in group of data 
//should last one in  a function parameter

//traditional approach
function sorteddata(...array){
    //logic
    let data=array.sort();
    return data;
}
let array=[6,8,2,5,9];
console.log(sorteddata(6,8,2,5,9));


