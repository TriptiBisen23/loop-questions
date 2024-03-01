const input = require("readline-sync")

let n = input.questionInt("Enter the number:");
let x = input.questionInt("Enter the number:");
i = 1;
s = 0;
while(i<=n)
{
    a = x ** i/i;
    s = s+a;
    i = i+1;
} 
{
    console.log("s:",s);
}
