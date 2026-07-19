function funclookup(val) {

    var result =""


var lookup = {
    "sunny": "name",
    "uma":"father",
    "bhuju":"mother"
}

result = lookup[val];
return result;
}
console.log(funclookup("uma"));

//testing obj for its properties

var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

function checkCar(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return obj[prop];
    } else {
        return "not found";
    }
}

console.log(checkCar(car, "brand")); 
console.log(checkCar(car, "model")); 
console.log(checkCar(car, "color")); 

//record collection 

var collection = {
    "101": { name: "Alex", age: 20 },
    "102": { name: "Sam", age: 25 }
};

function updateRecord(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecord("101", "age", 21));
console.log(updateRecord("102", "age", ""));
