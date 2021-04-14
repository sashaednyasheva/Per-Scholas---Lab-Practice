// Return if a number is an Armstrong number 

let num = 370;
let sum = 0

let q = num;
while(q!= 0) { 
    let r = q%10; 
    sum = sum + (r*r*r);  
    q = Math.floor(q/10);
    //console.log(sum)
}  
    if (sum == num)
    {
    console.log(num + '- Armstrong number')
    }
    else 
    {
    console.log(num + '- is not an Armstrong number')
    }







