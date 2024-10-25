/* 1. MAP() SQUARE EACH NUMBER IN AN ARRAY:
 */ 
let number = [2, 4, 6];
let squared = numbers.map(num => num * num);
console.log(squared); // [4, 16, 36];
/* 2. CONVERT AN ARRAY OF STRINGS TO UPPERCASE: */ 

let words = ["hello", "world"];
let uppercasedWords = words.map(word => word.toUpperCase()); 
console.log(upppercasedWords); // ["HELLO", "WORLD"]





/* 3. ADD A CONSTANT VALUE TO EACH NUMBER IN AN ARRAY: */ 
let values = [10, 20, 30];
let incrementedValues = values.map(value => value + 5);
console.log(incrementedValues); // [15, 25, 35]
