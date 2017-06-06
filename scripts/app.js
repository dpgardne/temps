console.log('window is loaded');


var question = parseInt(window.prompt('How old are you?'));

if(question >=21 && question < 65){
	console.log('drink water')
}

else if(question >=65){
console.log('drink smoothie')
}

else {
	console.log('drink coconut')
};



function add(x, y) {

return parseInt(x) + parseInt(y)
}



function multiply(x,y) {
	var number = 1
	return parseInt(x) * parseInt(y) + number
}

function divide(x,y) {
	return parseInt(x) / parseInt(y)
}

//aray

var array = [1, 2, null, 'Im a string', true, false, {}, 5]

var numbers = []; //want numbers to go here
var strings = []; //strings to go here
var bools = []; //booleans to go here
var nulls = []; // nulls to go here


//for loop

for (var i = 0; i < array.length; i++) {
	console.log(array[i], ' array[i]', i, '< this is i', array, " this is array")

//first check to see if item is a number
if(typeof array[i] === "number"){
numbers.push(array[i])

} else if (typeof array[i] === "string"){
strings.push(array[i]) 

} else if (typeof array[i] === "boolean"){
bools.push(array[i])

} else if (typeof array[i] === null){
nulls.push(array[i])
}

else {
	console.log('not one of the data type')
}

};

var characters = ['Darth Vader', 'Princess Leia', 'Han Solo', 'Luke Skywalker'];



