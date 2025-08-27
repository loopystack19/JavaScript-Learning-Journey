/*Write a javascript program to replace every character in a string with a character that follows it in the Alphabet */

var string="Hello papa";

var splitString=string.toLowerCase().split("");

var alphabetCharacter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var newLettersIndex=[];

var formedWord;

for(let i=0; i<splitString.length; i++){

    if(alphabetCharacter.includes(splitString[i])){

        newLettersIndex.push((alphabetCharacter.indexOf(string[i])+1) % alphabetCharacter.length );
    }else{

        newLettersIndex.push(string[i])
    }
}

for(let j=0; j<newLettersIndex.length; j++){

    newLettersIndex.push(alphabetCharacter[newLettersIndex[j]]);

    formedWord=newLettersIndex.join("");
}

console.log(formedWord);



