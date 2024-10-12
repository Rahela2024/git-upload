// problem-1 Manage a todo FileList
let todoList = ["Do laundry", "pay bills", "walk the dog" ];
// step-1
todoList.push("Buy groceries");
console.log(todoList);
// step-2
todoList.unshift("Clean room");
console.log(todoList);
// step-3
todoList.pop();
console.log(todoList);
todoList.push("Buy groceries");
console.log(todoList);
// step-4
let result = todoList.indexOf("Clean room");
console.log(result);
todoList.shift();
console.log(todoList);
// step-5
console.log(todoList.length);


// Problem-2:Guest List
let guests = ["Alice", "Bob" ];
// Step-1
guests.push( "Rahela", "Rahi", " joni");
console.log(guests);
// Step-2
guests.shift();
console.log(guests);
// Step-3
guests.unshift("jone doe");
console.log(guests);
// Step-4
let result1 = guests.indexOf("jone doe");
console.log(result1);
// Step-5
console.log(guests.length);


// Problem-3: Modify an Array of Colors
let colors = ["Red", "Blue ", " Green" ];
// Step-1
colors.push("Yellow");
console.log(colors);
// Step-2 
colors.shift()
console.log(colors);
// Step-3
colors.unshift("Purple");
console.log(colors);
// Step-4
let result2 = colors.indexOf("Blue");
console.log(result2);
// Step-5 
console.log(colors.length);


// Problem-4: Grade Evaluation
let score = 85;
// Step-1 
if(score >= 90 ){ 
    console.log("grade A ");    
}
// Step-2
else if ( score >=80){
    console.log( "Grade B ");  
}
// Step-3
else if ( score >= 70){
    console.log("Grade C");   
}
// Step-4
else if ( score >= 60){ 
    console.log(" Grade D");
}
// Step-5
else if ( score = 60){ 
    console.log(" Grade F");
}
// Ans: Grade B


// Problem-5 
let temperature = 15;
let inRaining = true;
// Step-1
if ( temperature < 0){ 
    console.log("Heavy Jacket ");
}







































