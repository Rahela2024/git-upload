// problem 1
// Print 1 to 50

let number = 50; 
for(i = 1; i<=number; i++){
    // console.log(i);
}
// --------------------------------------------------

// Problem 2
// Print 33 to 1 

let num1 = 33;

for(i =33; i>=1; i--){
//     console.log(i);
}
// --------------------------------------------------------------------

// Problem 3 
// The sum of even numbers 1 t0 45

let num2 = 45;
sum = 0
for(let i = 1; i <=45; i++){
    if( i % 2 === 0){
        sum = sum + i;
        
    }
}
// console.log(sum);
// ----------------------------------------------------

// Problem -4 
// the sum of odd & square numbers 1 t0 10
let num3 = 10;
let sum = 0 
for(i=1;  i<=10;  i++ ){
   if( i % 2 !==0 ){
    sum = sum + Math.pow( i,2);
   }
}
// console.log(sum);
// --------------------------------------------------------------

// Problem- 5 
// // multiplication table in 7
// let number = 7;

// for( i=1; i<= 10; i++){
//     let result = number * i;
//     console.log( number + " x " + i + " = "  + result); 
// }

for(i=1; i<=10; i++){
    // console.log(7 + " " + 'x' + " i " + " = "  + 7 *i);  
}

// ------------------------------------------------------------------

// Problem - 6
// digit problem

let num4= 139586883;

let digitCount = 0;

while( num4 >0  ){
    num4 = Math.floor(num4 / 10 );
    digitCount++;
}

// console.log(digitCount);








