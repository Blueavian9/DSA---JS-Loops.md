/* 1a. DO WHILE LOOP:
ENSURE A USER ENTERS 
A NUMBER GREATER THAN 10 */

// let userInput;
// do {
//     userInput = prompt("Enter a number greater than 10:");
// } while (userInput <= 10); 

/* 1b. DO WHILE LOOP OPPOSITE:
CONDITION FOR STOPPING (OPPOSITE OF CONTINUING)
example: STOPS WHEN A CERTAIN CONDITION IS MET,
EVEN THOUGH THE LOOP RUNS ONCE:
*/ 

// let i = 10;
// do {
//     console.log(i); 
//     i--;
// } while (i > 5);




/* 2a. DISPLAY NUMBERS
FROM 1 - 5 COUNTING UP AT LEAST ONCE: */ 

// let i = 1; 
// do { 
//     console.log(i); 
//     i++;
// } while (i <= 5); 


/* 2b. (OPPOSITE) COUNTING DOWN: */

// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i > 0); 




/* 3. RUN A LOOP THAT CONTINUES
UNTIL A USER TYPES: "EXIT" */ 
// let command;
// do {
//     command = prompt("Enter a command or 'exit' to quit:");
//     console.log("You entered:", command);
// } while (command !== "exit");