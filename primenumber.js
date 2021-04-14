// Check if the number is a Prime Number 
/*let flag = true;
let num = 5;
*/

let isprime = true
let startnum = 2
let endnum = 20
let num = 5

for(let count = startnum; count <=endnum; count++)
{
    let isprime = true;
}
    for (let count = 2; count<num; count++)
    {
        if (num%count == 0)
        {
        isprime = false;
        break;
        }
        else {
        isprime = true;
        }
}
    if (isprime == true){
    console.log(num + ' - is a prime number')
}
    else{
    console.log(num + ' - is not a prime number')
}







