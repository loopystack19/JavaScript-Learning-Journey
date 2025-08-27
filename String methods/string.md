**String Methods**

**1.charAt()**-This method returns the character at a particular index in a string

**Sample programme**

let userName="loopystack19";

console.log(userName.charAt(5));

**Output**-> s

**2.indexOf()**-Returns an index for the first occurence of a character in a string

**sample programme**

let userName="loopystack19";

console.log(userName.indexOf("a"));

**output**->7

**3.lastIndexOf()**-returns the index for the last occurence of a particular character

**sample programme**

let userName="loopystack19";

console.log(userName.lastIndexOf("o"));

**Output**-> 2

**4.length**->Returns the length of a string

**Sample programme**

let userName="loopystack19";

console.log(userName.length);

**5.trim()**->Removes the whitespaces before and after a string

**6.toUpperCase()**->Transforms all the alphabetical characters in a string to uppercase

**7.toLowerCase()**->Transforms all the characters in a string to lower case 

**8.repeat(7)**-This method repeats a particular string a specified Number of times

**9.startsWith()**-This methods the checks the first character of a string and returns a boolean value 

**10.endsWith()**-This method returns a boolean value , it checks the last character of a string

**11.includes()**-Checks if a specified character is included in a particular string and it returns a boolean value

**.replaceAll("Character being replaced", character being introduced)**->Replaces a particular character in a string with a new character

**12.padStart()/.padEnd(length of the string, "padding character")**->Ensures a string is a particular length by either padding the start or the end with a particular character 

**String Slicing**

**Syntax**

userName.slice("start","end");

**Sample programme**

var fullName="loopy stack19";

var firstName=fullName.slice(0, fullName.indexOf(" "));

var lastName=fullName.slice(fullName.indexOf(" ")+ 1);

console.log(firstName);

console.log(lastName);

-The slice method allows you to create a new string for an existing string without altering the original string 

**.splice()**->this allows addition and removal elements at the same time 

**sample programme**

var arrayNumbers=[1,2,3,4,5];

arrayNumbers.splice(0, 2, "We deleted two items starting at index 0");

console.log(arrayNumbers);

**split()**->this method returns an array after performing a spilt based on the seperator 

**Syntax**->.split("seperator", limit);

**sample programme**

var randomString="Good morning people";

let split1=randomString.split("");

console.log(split1);

**output**->[
  'G', 'o', 'o', 'd', ' ',
  'm', 'o', 'r', 'n', 'i',
  'n', 'g', ' ', 'p', 'e',
  'o', 'p', 'l', 'e'
]

