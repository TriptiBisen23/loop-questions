const input = require("readline-sync")
var a = input.questionInt("Enter the 1 number:");
var b = input.questionInt("Enter the 2 number:");
let m = a;
let n = b;
while(a!==b)
{
    if(a>b)
    {
        a = a-b;
        
    } else
    {
        b = b-a;
    }
    
}
let  hcf = a;
  console.log("hcf:",hcf);
  let lcm = (m * n)/hcf;
  console.log("lcm:",lcm);
  













  