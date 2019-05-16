var score = 100;          //Number

var average = 40.5;       //Floating number

var name = "sachin";      //String

var retired = true;      //Boolean


console.log(score);
console.log(average);
console.log(name);
console.log(retired);
console.log(score,average,name);
 
var a = 5;
var b = "hello";

console.log(a+b); 
var a = 5;
a = "hello";
 
console.log(a);

var b = 6;

console.log(b+a);      // See + acting as concatnation and converting variable b to string

var c = "1"

console.log(b+c);       
console.log(b*c);        // c is converted to number

console.log(a*b);   // as string hello can not be converted to a number - Gives NaN (Not a Number) as output
// addition
var a = 5;
var b = 6;


var sum = a  + b;
var diff = a - b;
var product = a * b;
var division = a / b;
var modulus = a % b;


console.log("sum:",sum,"diff:",diff,"product:",product,"division:",division,"modulus:",modulus)  

sum++;

console.log(sum);  //increment

sum = sum + 2;

console.log(sum);

diff--;

console.log(diff);  //decrement

diff = diff -3;

console.log(diff);
 
// Labset-1
// triangle
function triangle(a,b,c)
{  
    if(a+b<=c || b+c<=a || a+c<=b)
   { return "not-valid";
   }
else 
{ var s;
    s=(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
}
// temperature-conversion
function tc1(f)
{  
    return ((f-32)*5)/9;
}
        
function tc2(c)
{    
    return (9*c)/5+32;
}


// maximum of three numbers
function maximum(a,b,c)
{ var max;
    if(a>b&& a>c)
    max=a;
    else if(b>a&&b>c)
    max=b;
    else
    max=c;
    return max;
}


// multiple of 3 and 7
function factor(a)
{ if(a%3==0||a%7==0)
    return true;
else return false;
} 


// capitalise 
function capitalise(str)
{ var arr=[];
    arr=str.split(" ");
var i=0;
var pos=[];
for(i=0;i<arr.length;i++)
{ pos[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1,arr[i].length);
    
}
var str1=pos.join(" ");
return str1;
}
console.log(capitalise("we are the champions"));

