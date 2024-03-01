const input = require("readline-sync")

let n = input.questionInt("Enter the number:");
let m=n;
let s = 0;
while(0<n)
{
    r = n%10
    s = (s*10)+r
    n = Math.floor(n/10)
}
if(m == s)
{
    console.log("palandrome");
} else
{
    console.log("not a palandrome");
}