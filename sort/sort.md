-The sort method is used the elemnts of an array in lexicographical order, its sorts the elements of the array in place

**sample programme**-sort the number elements of an array in decending order

let numbers=[6,5,2,1,10,8,3,4,7,9];

numbers.sort((a,b)=>b-a);

console.log(numbers);

**output**

[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]

**sample programme 2**

let people=[{firstName:"spongeBob",age:25,gpa:3.0},
            {firstName:"patrick", age:27, gpa:1.5},
            {firstName:"squidward", age:51, gpa:2.5},
            {firstName:"sandy", age:27,gpa:4.0}];


people.sort((a,b)=>a.firstName.localeCompare(b.firstName));

console.log(people);


**OUTPUT**

[
  { firstName: 'patrick', age: 27, gpa: 1.5 },
  { firstName: 'sandy', age: 27, gpa: 4 },
  { firstName: 'spongeBob', age: 25, gpa: 3 },
  { firstName: 'squidward', age: 51, gpa: 2.5 }
]

