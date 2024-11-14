// 1. Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments,
//and show the outputs.

let func = (fname,lname)=>{
     return ` My nane is ${fname} ${lname}`
}
// console.log(func("Rahela","Begum"));
// *************************************************************

// 2 - Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.
const location = (name,city)=>{
  return `She is good,her name ${name}.she lives in ${city}  `
}
// console.log(location("Rahela", "United Kingdom"));
// ***************************************************************

//3. Combine two arrays using the spread operator and find the maximum value in the merged array.
let arr1 = [10,27,38]
let arr2 = [ 38,48,50]
let allarr = [...arr1,...arr2]

let max = Math.max(...allarr)
// console.log(max);
// *************************************************


// Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.
let person ={
    name: 'Rahi',
    age : 28,
    country: "Bangladesh"
}
let book = [ 1,2,3,4,6,5];
const [Second,last]= book;
let {name, age , country} = person;
// console.log(name, age, country);
// console.log( Second, last);
// *************************************************

// 5:Access the city property of a nested object using both dot notation and optional chaining
// let person1= {
//     fname:"Abrar",
//     lname: "Ahmed"

//  address:{
//     city:'London',
//     postcCode:57488,
// }
//  };
//  console.log(person1.address.postCode);
// console.log(person1.address?.id);
// *********************************************

// 6: Given an array of student objects with properties name and marks, use:map() to extract the names
let array = [
    { Name: 'Jone',  mark: 57},
    { Name: 'Joni', mark: 68},
    { Name: 'Rani', mark: 49},
    { Name: 'jomir', mark: 57},
]
let newarr = array.map((item)=>{
  return item
})
// console.log(newarr);
// *****************************************

// 7:filter() to return students with marks above 80.
let array1 = [
    { Name: 'Jone',  mark: 57},
    { Name: 'Joni', mark: 68},
    { Name: 'Rani', mark: 91},
    { Name: 'jomir', mark: 81},
]
let newarray = array.filter((element)=>{
  return element.mark > 80
})
// console.log(newarray);
// **********************************************

// 8 :Use map() on a string array to create a new array where each string is prefixed with "Hello, ".
let color = [ "black","red","green"]

let newarry = (color)=>{
    return `Hello, ${color}`
}
// console.log(newarry(color));
// **********************************************

// 9. Given an array of objects, use filter() to return all objects where a specific condition is met 
// (e.g., products priced above a certain amount).
let products = [
    { name: "iphone", price: 10000 },
    { name: "tv", price: 700 },
    { name: "Phone", price: 300 },
    { name: "remote", price: 200 },
    { name: "Keyboard", price: 100 }
];
let allProducts= products.filter(products=>{
    return products.price>600
} )
// console.log(allProducts)
// **********************************************************

//  10. You have an array of product objects, where each product has a name and price. Write a function 
// that uses the map method to create a new array of strings. Each string should contain the product's
//  name and price formatted as Product: [name] costs $[price].

let product = [
    { name: "iphone", price: 10000 },
    { name: "tv", price: 700 },
    { name: "Phone", price: 300 },
    { name: "remote", price: 200 },
    { name: "Keyboard", price: 100 }
];
let allProduct= product.map(product =>{
     return `product:${product.name} costs:${product.price}`
} )
console.log(allProduct);




