// Return a number of vowels in a string

let phrase = 'You Are so beautiful';
phrase = phrase.toLowerCase();
let lastchar = phrase.length; 
let numofVowel = 0

for (i = 0; i <lastchar; i++){
     if(phrase[i]=="a" || phrase[i]=="e" || phrase[i]=="o" || phrase [i]=="i" || phrase [i]=="u")
    { 
       numofVowel++;
       //process.stdout.write(phrase[i]);     
    }
   
}
console.log(phrase + ":" + numofVowel + " - number of vowels characters in this phrase")




