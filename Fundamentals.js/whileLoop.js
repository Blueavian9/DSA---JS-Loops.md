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


/* 3. DOUBLE A NUMBER UNTIL IT'S GREATER THAN 1000. */
let num = 2; 
while (num <= 1000) {
    console.log(num);
    num *= 2; 
    } 

