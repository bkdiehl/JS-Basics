//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var name = 'Tyler';
var isTyler = function(name) {
	if (name ==='Tyler') {
		return true;
	}
	else {
		return false;
	}
};


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 var getName = function() {
 	var myName = prompt("What is your name?");
 	return myName;
 };


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
	alert('Welcome ' + getName());
};


//Next problem




//What is the difference between arguments and parameters?

var nameFunction = function (name) { //name is a parameter
	return name;
};
nameFunction(Briant); //Briant is an argument

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


NaN -- null -- undefined -- 0 -- '' -- false
var name; //undefined variable is falsy
if (!something)  //checks to see if something is false
var name = '' //will return undefined

//Next Problem



//Create a function called myName that returns your name

var myName = function (name) {
	return name;
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName(prompt("What is your name?")))

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

 var outerFn = function() {
 	return function () {
 		var name = "Briant"
 		return name;
 	};
 };
 
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
innerFn();

//Now invoke innerFn.
