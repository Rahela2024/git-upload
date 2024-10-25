//1. Write a function that loops through an array of numbers and returns the sum of the numbers.

let array = [1,2,3,3,4,5]

function arrayofnumber(array){
    sum = 0;
    for(i = 1; i < array.length; i++){
       sum += array[i]
    }
    return sum
}
// console.log(arrayofnumber(array));
// ***************************************************

// 2. Create an object with properties name and age. Write a function to add a new property city to the object.

let person = {
    Name : "Rahela",
    age : 30,
}
function addcity(city,sylhet){
    person.city = "sylhet";
}
 addcity(person, 'sylhet')
// console.log(person);
// *************************************************.

//3. Write a function that takes a number and returns whether it is even or odd.

function isEvenOrOdd(num){
   if(n % 2 == 0)
   return "This number is even" 
}
 else {
     return "This number is odd" 
}

// console.log(isEvenOrOdd(7));
// **********************************************************

//4. Create an object that represents a car with properties brand and model. Write a function to update the model of
//  the car.
let car = {
    brand: 'Toyota',
    model: 'Rahela'
};
function updateTheModel(model,sakila){
       car.model = sakila;
}
updateTheModel(car,"sakila")
// console.log(car);
// ********************************************************

// 5 .Write a function that loops through an object and prints each property and its value.

let golperBoi = {
     
    name : 'Bikel Bela',
    price : '135tk',
    color : 'red',
  };
  
  function golperBoiInfo(){
    
    for(key in golperBoi ){
      
     console.log(key + " : "+ golperBoi[key] );
      
    }
  }








