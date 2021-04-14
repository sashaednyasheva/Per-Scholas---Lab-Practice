let num=[6,13,7,190,-5]
let temp

//linear sorting
for(i=0; i<num.length-1; i++)
{
    for(let j=i+1; j<num.length; j++)
        { if(num[i]>num[j])
        {
            temp = num[i];
            num[i]= num[j];
            num[j]=temp;      
        }
        }
}
console.log(num)

//bubble sorting
for(i=0; i<num.length;i++)
{
    for(let j=0; j<num.length-1; j++)
    {
        if(num[j]>num[j+1])
        {
            let temp=num[j];
            num[j]=num[j+1];
            num[j+1]=temp;
        }
    }
}
console.log(num)
