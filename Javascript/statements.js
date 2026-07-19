 //boolean values - another data type in js, they only have true/false;
 //no need of "" 

 function bool(){
    return true;
 }
 
 console.log(bool());

 //conditional statements(if)

 function checkage(age){
    if (age>=18){
        return "you can party"
    }
    return "no party"
 }

 console.log(checkage(12));
 console.log(checkage(20));

 //other example

 function isittrue(option){
    if (option){
        return "it is true"     
    }
    return "it is false"
 }

 console.log(isittrue(false));
 console.log(isittrue(true));

 //equality operator 

 function strict(eq){
    if (eq === 19){        // strict not equal
        return "equal"
    }
    return "not equal"
 }
 console.log(strict(13));
console.log(strict(19));
console.log(strict('19'));

//Inequality operator

function inequal(val){
    if (val !== 10) {          //strict not equal
        return "not equal";
        }
        return "equal" ;
}
console.log(inequal(13));
console.log(inequal(10));
console.log(inequal('10'));

//and, or operators
function andor(val){
    if (val<=50 && val>=25){  //same way for or ||, ex: val<10 || val>20
        return "yes";
    }
    return "No";
}
console.log(andor(20));
console.log(andor(34));

function chained(num){
    if (num<5){
        return "Tiny"
    } else if (num<10){
        return "Small"
    } else if (num <15){
        return "Medium"
    } else if (num<20){
        return "Large"
    } return "Huge"
}
console.log(chained(12));
console.log(chained(34));

//practice example

var names = ["sunny", "harsha", "sathwika", "bunny" , "thaman"];
function prizes(player, place){
    if (place == player - 1) {
        return names[0]
    } else if (place <= player + 5 ){
        return names[1]
    }
}

console.log(prizes(3,2))

//switch statements

function tryswitch(val){
    var answer=""; 
    switch(val){
        case 1: answer = "alpha";
        break;
        case 2: answe = "beta";
        break;
        case 3: answer = "gamma";
        break;
        case 4: answer = "delta";
        break;
        default: answer = "nothing"
        break;
    }
    return answer;
}
console.log(tryswitch(1));
console.log(tryswitch(3));
console.log(tryswitch(10));

function switchtry(val){
    var answers = "";
    switch(val){
        case 1:
        case 2:
        case 3: answers = "low"
        break;
        case 4:
        case 5:
        case 6: answers = "medium"
        break;
        case 7:
        case 8:
        case 9: answers = "High"
        break;
        case 10: answers = "very high"
        break;
    }
        return answers;
}
console.log(switchtry(3));
console.log(switchtry(5));
console.log(switchtry(10));

//returnning bool from functions 
function compare(a,b){
    return a<b;
}

console.log(compare(10,5));

//counting crads

var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
    count += 0; // no change
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count -= 1;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

console.log(cc(2));   // "1 Bet"
console.log(cc(3));   // "2 Bet"
console.log(cc(7));   // "2 Bet"
console.log(cc('K')); // "1 Bet"
console.log(cc('A')); // "0 Hold"


//objects, has propertirs, they can be arrays, strings, its

var dog = {
    "name" : "snoopy",
    "age" : 5,
    "friends" : "everyone!"
}
console.log(dog)

//dot " . " notation

var dogname = dog.name;
var dogage = dog.age;


//if the properties have space in between them we can use brackets instead of dot

var cat = {
    " cat name" : "piggy",
    "cat age" : 3,
};

var catsname = cat[" cat name"]
var catsage = cat ["cat age"]
  
console.log(catsname); 
console.log(catsage);


var test = {
    12: "shiny",
    15: "monny"
}
var obj = 12;
var players = test[obj];
console.log(players)

//updating objec parameters
dog.name = "flexi"
console.log(dog.name);

//add properties to obj

dog['bark'] = "woof";

//delete obj

delete dog.friends;
console.log(dog);

//






