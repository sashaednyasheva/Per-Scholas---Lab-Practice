// Check if the word is a Palindrome word (reads the same reversed)

let originalword = "radar"
let backwordsword = ""

for (let i=originalword.length-1; i >= 0; i--)
{
    backwordsword += originalword.charAt(i)
    console.log(backwordsword)
}

if(originalword == backwordsword)
{
    console.log(originalword + "is a palindrome")
}    
else 
{
    console.log(originalword + "is not a palindrome")
}


