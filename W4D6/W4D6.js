/*
Write a function  called favoriteDessert that takes no paremeters
and returns an object with 3 key-value pairs.
The names of each property and their respective values are up to you, 
but the values cannot be undefined. How would you describe your favorite dessert?

For example, one could return an object such as:

{ name: "Flan", ovenTemp: 350, prepTime: "25 minutes + 50 minutes chilling" }
Another example could be:

{ name: "Gelato", countryOfOrigin: "Italy", flavor: "Chocolate Chip" }
*/

function FavoriteDessert () {
	var obj = {};
	obj.name = name; 
    obj.countryOfOrigin = countryOfOrigin;
    obj.flavor = flavor;

    return obj 
}
var creatobj = function(dessertName,country,flavorr){
	this.name = dessertName;
	this.countryOfOrigin = country
	this.flavor = flavorr;
}

var x= FavoriteDessert();

x.creatobj("mansaf:P","jordan","amazing");
