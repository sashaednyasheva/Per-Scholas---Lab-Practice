//Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. 
//Write a loop that says how many quarters he got in return.

let price = 4;
let payment = 10
let change = payment - price
let count = 0
let machinepayout = 0.25
let bill=1

let i = 0;
while (i<change)
{
    count = count + (bill/ machinepayout)
    i++;
}
console.log('Your change is ' + count + ' quarters')



