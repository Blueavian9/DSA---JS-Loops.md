/* 1. FOREACH LOOP PRINT EACH
ITEM IN AN ARRAY: */
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => console.log(fruit));

/* 2. ADD 1 TO EACH NUMBER IN AN ARRAY */ 
let numbers = [1, 2, 3, 4];
numbers.forEach((num, index, arr) => {
    arr[index] = num + 1;
})
console.log(numbers); // [2, 3, 4, 5]


/* 3. LOG THE INDEX AND 
VALUE OF AN ARRAY ELEMENT */
let colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) => console.log(`Color at index ${index}: ${color}`));
