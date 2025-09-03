let people=[{firstName:"spongeBob",age:25,gpa:3.0},
            {firstName:"patrick", age:27, gpa:1.5},
            {firstName:"squidward", age:51, gpa:2.5},
            {firstName:"sandy", age:27,gpa:4.0}];


people.sort((a,b)=>a.firstName.localeCompare(b.firstName));

console.log(people);