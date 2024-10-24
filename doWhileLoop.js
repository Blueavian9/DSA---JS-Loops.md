/* 1. WHILE LOOP 
COUNT DOWN FROM 10 - 1: */
let count = 10; 
while (count > 0) {
    console.log(count);
    count--; 
}

/* 2. KEEP ASKING FOR A CORRECT
PASSWORD (simple example) */
let password = "secret";
let input = "";
while (input !== password) {
    input = prompt("Enter the password:"); 
    }
        console.log("Access granted!");
