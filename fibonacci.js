let num1 = 0;
let num2 = 1;
let sum = 0

console.log(num1)
console.log(num2)   

let count=1
while (count <=10)
{
    sum = num1 +num2
    console.log(sum);
    num1=num2;
    num2=sum;
    count++;
}

