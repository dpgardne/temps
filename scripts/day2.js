//create object with dot notation

var pet = {
	
};

pet.speed = 20
pet.born = 1999
pet.type = 120
pet.breed = 4
pet.cost = 100
pet.cities = 500


//make a object with variable notation
var park = {
	
};

park["length"] = 20
park["price"] = 1000
park["type"] = 50
park["breed"] = 4
park["cost"] = 100
park["nieghborhoods"] = 500



//For objects use a for in loop. For looping over objects. Loop pet. print objects

for(var prop in pet) { //Created the word prop but could be anything. looking for a property on pet named prop
	console.log(pet[prop], 'pet[prop]', prop, 'prop') //use your made up word. 
}

//for in loop park to print out all the values

for(var grass in park) { //Created the word grass but could be anything. looking for a property on pet named prop
	console.log(park[grass], ' this is [grass]', grass, 'hi I am grass' ) //don't need all of this. At a minimum would just need park[grass] to pull data
}


//for in loop 

for(var grass in park) { //Created the word grass but could be anything. looking for a property on pet named prop
	console.log(park[grass]) //this will just give the numbers and not what they are.
}

//for in loop to show object value and property it belongs to

for(var grass in park) { //Created the word grass but could be anything. looking for a property on pet named prop
	console.log(park[grass], [grass]) //this will give the array values and what they are
}













//Using the instruments object loop through all the 
//electric gutiars and print them to the console.

var instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"], //matters would the value is. Electric is an array
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

//looping through an array so use regular for loop
//create a normal for loop since we are looping through an array
for (var i = 0; i < instruments.guitar.electric.length; i++) { //use the dot notation to access electric
	console.log(instruments.guitar.electric[i]) //this will give the array values and what they are
}

//Add a property to the instruments object, that
// includes a list of your favourite singers.

//create array within an object called instruments
instruments.singers = ["Mary", "Joe", "Mike", "Daniel"]








var crazyObject = {
  taco: [{meat: 'steak', //taco is an array of objects. Taco is an array. Meat and cheese are the first object at position 0. The second meat and cheese are 1.
         cheese: ['panela', 'queso', 'chihuahua']}, 
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot"]},
        ],
  larry: { //larry is an object.
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"], //this is an array.
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{ //characters has 0, 1, 2 sections. characters is an array
      name: "Jeff", //0
      occupation: "manager"
    },
    {
      name: "funkhauser", //1
      occupation: "tv dude"
    },
    {
      name: "susie", //2
      occupation: "jeffs wife",
      favoriteHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}


//Using crazy object print the following


//"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
//"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favoriteHobby);
//"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
//"The object the contains the name funkhauser"
console.log(crazyObject.larry.characters[1].name);


//create a for in loop to print "susie", "jeff's wife", and "larry"

for(var susie in crazyObject.larry.characters[2]) {
console.log(crazyObject.larry.characters[2][susie]) //didn't have to call it susie
};


//print all of larry's quotes. //can use a regular for loop because an array
for (var i = 0; i < crazyObject.larry.quotes.length; i++) {
	console.log(crazyObject.larry.quotes[i])
};


var temp = window.prompt("What is the temperature?");

var weather = {
temp: 70,
windspeed: 30,
humidity: 20, //we are editing this in the function
rainProb: 30,
pollutionIndex: 10,
calcHumidity: function (amountOfWaterInAir, temp) {
	//amountOfWater / temp = humidity
	var humid = amountOfWaterInAir / temp;
	this.humidity = humid; //this method will replace the result of humidity
},

calcWindspeed: function(temp, airpressure) {
	this.windspeed = temp / airpressure; //this does the same as the method above but puts into windspeed. This refers to the object name
}

}

//calc wind speed wind speed + press
//check by weather.windspeed after calling the function weather.calcWindspeed(30,20)




