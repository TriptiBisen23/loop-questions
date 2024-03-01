const input = require("readline-sync")
var n = input.questionInt("Enter the number:");
var b=0;
let i = 2;
while(i<n)
{
    if(n%i==0){
    b += 1;
    break;
    }
  else{
       i=i+1;
  }  
   }

  if(b==0)
{
      console.log("prime");
  } else
  {
      console.log("not prime");
  }
