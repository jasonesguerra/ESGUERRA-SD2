// console.log("Hello, World!");

// [SECTION] JavaScript Object
// Imitates real-world descriptions and real-world objects

let arr = [1, 2, 3];

let obj = {
    name: "Carlo",
    age: 22
}

console.log(typeof arr);
console.log(typeof obj);

let person = {
    completeName: "Juan Dela Cruz",
    age: 25,
    height: 160,
    weigth: 85,
    contactNumber: [1234, 4567],
    address: {
        houseNo: 1,
        brgy: "Del Pilar",
        city: "CSFP"
    }
}

console.log(person);


// Dot notation
// Access values inside an object property

console.log(person.completeName);

console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old!`);

console.log(person['completeName']);

//Updating a value via dot notation
person.completeName = "John Doe";

console.log(person);

//Adding a property inside an object
person.email = "jdoe@mail.com";

console.log(person);

// Class and Objects
// to add properties in a class use "this" keyword
function Animal(name, breed, color, kind){
    //constructors
    this.name = name;
    this.kind = kind;
    this.breed = breed;
    this.color = color;
    this.makeSound = function(){
        if(this.kind == "dog"){
            console.log("Woof! Woof!");
        }else if(this.kind == "cat"){
            console.log("Meooooow!");
        }else{
            console.log("Cannot provide sound for the given animal.");
        }
        
    }
}

// Instance -> copy/duplicate of a function class

let dog = new Animal("Bruno", "Aspin", "Brown", "dog");
console.log(dog);

console.log(dog.name);
dog.makeSound();

let cat = new Animal("Luna", "Puspin", "Gray", "cat");
console.log(cat.name);
cat.makeSound();
console.log(cat);

let trex = new Animal("Rex", "Dino", "Green", "dinosaur");
trex.makeSound();

console.log(person.contactNumber[1]);
console.log(person.address.brgy);

// [SECTION] Pokemon

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;

    this.tackle = function(target) {
        let damage = 25;
        console.log(`${this.name} used Tackle on ${target.name}!`);
        target.health -= damage;
    }
    this.useskill1 = function(target) {
        if(this.name === "Pikachu"){
            if(this.mana < 75){
                console.log(`${this.name} does not have enough mana to use Thunderbolt! mana left: ${this.mana}`);
                return;
            }
            let damage = 250;
            console.log(`${this.name} used Thunderbolt on ${target.name}!`);
            target.health -= damage;
            this.mana -= 75;
            console.log(`${this.name} has ${this.mana} mana left. ${target.name} health left: ${target.health}`);
        } else if(this.name === "Charmander"){
            if(this.mana < 100){
                console.log(`${this.name} does not have enough mana to use Flame Thrower! mana left: ${this.mana}`);
                return;
            }
            let damage = 350;
            console.log(`${this.name} used Flame Thrower on ${target.name}!`);
            target.health -= damage;
            this.mana -= 100;
            console.log(`${this.name} has ${this.mana} mana left. ${target.name} health left: ${target.health}`);
        }
    };
}

let pikachu = new Pokemon("Pikachu", 15, 100, 175);

console.log(pikachu);

let charmander = new Pokemon("Charmander", 10, 120, 150);
console.log(charmander);

pikachu.tackle(charmander);
pikachu.tackle(charmander);
console.log(charmander);

charmander.tackle(pikachu);
console.log(pikachu);
console.log(charmander);

charmander.useskill1(pikachu);
console.log(charmander);
console.log(charmander);