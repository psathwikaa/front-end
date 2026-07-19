//Intro to arrays

var firstarray = ["sunny", 22];
console.log(firstarray);

//nested array

var nestedarray = [["universe",22], ["galaxy", 14]];
console.log(nestedarray);

//Acess array data

var myarray = [50,60,70];
var mydata = myarray[1];

console.log(mydata);

//modify arrays with indexes

myarray[2] = 80;
console.log(myarray);

//Multi dimensional arrays

var MultiD = [[1,2,3], [4,5,6], [[10,20,30], 40,50,60]];
var MultiD_data = MultiD[2][2];
console.log(MultiD_data);

//push 

firstarray.push = ["pusala", 10];
console.log(firstarray);

//pop

var poparray = ["sunny",1,2,3,4];
var poppedarray = poparray.pop();
console.log(poppedarray); //shows which item is popped
console.log(poparray); //shows the output after popping

//shift 

var shiftarray = poparray.shift();
console.log(shiftarray);
console.log(poparray);

//unshift

poparray.unshift(0);
console.log(poparray);


//Reusable code with functions

function reuse(){      //define, declare the function
    console.log("hello,world!");
}

reuse(); //function call 

//functions with args

function func_with_args(a, b) {
    console.log(a-b);

}

func_with_args(15,5);

/* global scope = refers to the visbility of variables
 which are defined outside of a function have a global scope, 
that means it can be seen everywhere in JS code. */

var username = "sunny";  //GLOBAL SCOPE

function sayhi() {
    console.log("Hello " + username ); }
function saybye() {
    console.log("Bye " + username);
}

sayhi();
saybye();


/* Local Scope = variables which are declared within a func as well as the 
function parameters have a local scope, it is only visible inside the function */

function localscope() {
    var localvar = 4;    //local scope
    console.log(localvar);

}

localscope();


// global vs local

//local variable taking presedence of global variable 

var clothes = "shirt";

function outfit() {
var clothes = "frock" ;
    return clothes;
}
 console.log(outfit());
 console.log(clothes);

 //return a value from a function 

 function mynumber(username){
    return username + "hello";
 }
 console.log(mynumber(" sathwika "));

 //assignment with a returned value
 var assign = 0;

 function assigned(num) {
    return (num +5)/3;
 }

 assign = assigned(10);
 console.log(assign);

 //my way of doing it 

 function change(num){
    return (num+5)/3;
 }
 console.log(change(10));

 //stan-in-line (queue)

 function inline(arr,item){
    arr.push(item);
    return arr.shift(item);

 }

 var testarr = [1,2,3,4,5]

 
 console.log("before: " + JSON.stringify(testarr));
 console.log(inline(testarr, 6));
 console.log("after: " + JSON.stringify(testarr));







