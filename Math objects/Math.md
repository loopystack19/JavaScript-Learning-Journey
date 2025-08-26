**Math Objects**-This are in built methods in javascript that provides constants or enable mathemtical manupilation of data 

**a.Round Numbers**

1.Math.round()-This rounds off a given number to the nearest integer

**Sample Programme**

const PI = 3.1415;

var radius=10;

var area=Math.round(2 * PI * radius);

console.log(area);

2.Math.floor()-This method will always round down a given number

**Sample programme**

const PI = 3.1415;

var radius=10;

var area=Math.floor(2 * PI * radius);

console.log(area);

3.Math.ceil()-This method will always round a  number upwards 

**sample programme** 

const PI = 3.1415;

var radius=10;

var area=Math.ceil(2 * PI * radius);

console.log(area);

4.Math.trunc()-This method will always remove the trailing decimal points 

**sample programme**

const PI = 3.1415;

var radius=10.7889090;

var area=Math.trunc(2 * PI * radius);

console.log(area);

**b.Generating a random number in js**

**sample programme**

var randomNumber=Math.floor(Math.random()*10)+1;

console.log(randomNumber);

**c.Absolute and Sign**

1.Math.abs(x)-This methods returns the absolute value of a number

2.Math.sign(x)-This method shows whether a number is positive or negative by returning the sign of the number

**d.Power and Roots**

1.Math.pow(x,y)->A method that returns X raised to the power of Y

2.Math.sqrt(x)->This methods returns the square root of a number

3.Math.cbrt(x)->This method returns the cube root of a number

**e.Min and Max**

1.Math.max(a,b)->This method returns the greatest value in a given set

2.Math.min(a,b)->This method returns the smallest number in a given set

**f.Trigonometry**

1.Math.sin(x)->This method returns the sine of x in radians

2.Math.tan(x)->This method returns the tangent of x in radians

3.Math.cos(x)->This method returns the cosine of a number in radians

4.Math.asin(x)->This is an inverse of the sin function

5.Math.atan(x)->This method is an inverse to the tan method

6.Math.acos(x)->This method is an inverse to the cosine function

**g.Logarithms and Exponentials**

1.Math.log()->This returns the natural logarithim of a number

2.Math.log10()->This returns the logarithim of a number to the base 10

3.Math.log2()->This returns the logarithim of a number to the base 2

4.Math.exp(x)->This function calculates eulers number raised to the power of x