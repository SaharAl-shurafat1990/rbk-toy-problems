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

function favoriteDessert() {
	var instances ={}

	instances.name = name
	instances.countryOfOrigin = countryOfOrigin
	instances.favoriteTopping = favoriteTopping

	return instances
}

function name(string) {
	return this.name = string
}

function countryOfOrigin(string) {
	return this.countryOfOrigin = string
}

function favoriteTopping(string) {
	return this.favoriteTopping = string
}