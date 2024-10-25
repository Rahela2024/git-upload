//1. write a function called addnumbers that takes two numbers as parameters & returns their Sum.

function addnumbers(num1, num2){
    let result1 = num1 + num2;
    return result1;
}
// console.log(addnumbers(5,6));
// ***********************************************

//2. write a function called  sumUPToN that takes a number N & returns the sum of all numbers from 1 to N.use a loop

function sumUpToN(n){
    sum = 0
    for( i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum
}
// console.log(sumUpToN(7));
// // **********************************************************
 
//3. Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of
//  all the numbers in the array

let array1 = [10,11,12,13];
    
function sumArray(a){
    let sum = 0; 
    for( let i = 0; i < a.length; i++ ){
        sum = sum + a[i];
    }
    return sum
}

// console.log(sumArray(array));
// ***************************************************


// 4. Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of
//  even numbers in the array

let array2 = [1,2,3,4,5,6]

function countEvenNumbers(a){
          let count = 0;
           for(i = 0; 1 < a.length; i++ ){
               if(array[i] % 2 === 0 ){
                count++
               }
      }  
      return count;
}

//   console.log(countEvenNumbers(array));
  

for(let i = 1; i <= 10; i++){
      // console.log(7 + " x " + i + " = " + 7*i);
    
}