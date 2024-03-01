const input = require("readline-sync")

let n = input.questionInt("Enter the n number:");
let a = input.questionInt("enter the first number")
let max = a;
let small = a;
i = 2;
while(i<=n)
{
    let b= input.question("enter the second number")
    if(b>max)
{
    max = b
    min= max;
} else
  max = max
  min = b;
  if(small<min)
{
    small = small;
} else
{
    small = min;
} i = i+1;
}
{
    console.log("small,max:",small,max);
}
