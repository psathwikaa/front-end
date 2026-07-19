//introducing datatypes and variables 

var a=0;
var b=5;
console.log(a);
a=7;
console.log(a);

//case sensitivity in variables

var StuDyCapVAr;
var properCamelCase;
var TitleCaseOver;

StuDyCapVAr=10;
properCamelCase="A String";
TitleCaseOver=9000;

console.log(StuDyCapVAr, properCamelCase, TitleCaseOver);

//addition

var sum = 10+5;
console.log(sum);

//subtracting

var difference = 10-5;
console.log(difference)

//multiply

var product = 10 * 5;
console.log(product)

//divison

var divide = 10/5;
console.log(divide);

//increment 

var increment = 10;

increment = increment + 1;
console.log(increment);

//decrement

var decrement = 10;
decrement--;
console.log(decrement);

//decimal numbers work same as normal number for all operations

//remainder (ofetn used to determine if a number is even or odd)

var remainder = 11%3;
console.log(remainder)

//augmented operations

var x=4;
var y=8;
var z=10;
 


x=x+2;
y-=2;
z*=2;

console.log(x,y,z);

//escape string

var str="I am a \" double quoted \"string\", okay \"hello world!";

var str1= 'I am a string inside "double quotes", okay'   //(you can also use `hello`);
console.log(str);
console.log(str1);


/* NOTES:

\' single quote
\" double quote
\\ backslash
\n new line
\r carraige return
\t tab
\b backspace
\f form feed
*/

var myvar = 'hello, everyone \n\t "My name is SATHWIKA\n\t \\  bye!!'
console.log(myvar);

//concatenate strings

var addstring = "this is the start" + "this is the end";
console.log(addstring);

addstring += "this is concatenation with equal sign"

console.log(addstring);

var myname = " sathwika ";
var mystr = "hello my name is, " + myname + " how are you?";
console.log(mystr);

//appending variables to strings 

myname += mystr;
console.log(myname);

//find length of the string

var namelength = 0;
var fullname = "siva sathwika";

namelength = fullname[2]  //(CAN ALSO USE FULLNAME.LENGTH TO GE THE TOTAL LENGTH)
console.log(namelength);  //(TO GET THE LAST LETTER YOU CAN USE, [Fullname.length - 1])

//word blanks

function wordblanks (noun,adjective, verb, adverb){

var result = "";
result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb;

return result;
}
console.log(wordblanks("dog", "big", "ran", "quickly"));
console.log(wordblanks("bike", "slow", "rode", "slowly"));










