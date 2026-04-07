//[SECTION] Array
// An Array is also a strorage for multiple elements/values
// the best practice is value/elements stored in an array should be of the same data type.

let pokemon = ["Pikachu", "Charmander", "Squirtle"];
console.log(pokemon);


console.log(pokemon[0]); 
console.log(pokemon[2]); 

console.log(`My Favorite Pokemon is ${pokemon[0]}`);

console.log(`My Favorite Pokemon is ${pokemon[0].toUpperCase()}`);

//get the length of the array
console.log(pokemon.length);

//Accessing an index that is ot existing will result as undefined
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements

pokemon[3] = "Bulbasaur";
console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";
console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Misty";
console.log(pokemon);
console.log(pokemon.length);

//Add Element on the tail of an array without knowing the actual index number

console.log(pokemon.length);
pokemon[pokemon.length] = "Jigglypuff";

console.log(pokemon);   
console.log(pokemon.length);


// Accessing the last element of an array
console.log(pokemon[pokemon.length - 1]);

//[SECTION] MODERN ARRAY MUTATION METHODS

let fruits = ["Apple", "Banana", "Melon"];

// push() -> add an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("Push Method: " + fruits);

// pop() -> remove the last element of an array
console.log("Original Array: " + fruits);
fruits.pop(); // strawberry -> removed
fruits.pop(); // melon -> removed
console.log("Pop Method: " + fruits);

//unshift() -> add an element on the head of an array
console.log("Original Array: " + fruits);
fruits.unshift("Strawberry");
console.log("Unshift Method: " + fruits);

fruits.unshift("grapes", "melon", "kiwi");
console.log("Unshift Method: " + fruits);

//shift() -> remove an element on the head of an array
fruits.shift();
fruits.shift();
console.log("Shift Method: " + fruits);

//sort() -> sorts elements in an array

fruits.sort();
console.log(fruits);

//reverse() -> reverse the order of elements in an array
fruits.reverse();
console.log(fruits);

// splice() -> adds or removes elements from an array at a specific index
fruits.splice(1, 2, "Blueberry");
console.log(fruits);


fruits.splice(1, 1);
console.log(fruits);

//forEach() -> read each element inside an array
fruits.forEach((fruit) => {
    console.log(fruit);
});
