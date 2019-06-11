let one = 1;
let two = 2;
let three = 3;

//Addition
console.log(1 + 2 + three);

//Subtraction
console.log(3 - two - 1);

//Multiplication
console.log((two * three) * one);

//Divison
console.log(3 / one);

let myCat = {
    Breed: 'Long-hair',
    Colour: 'Black',
    Name: "Star",
    "talk": () => console.log("Meow!"),
    favourite_toys: ['scratchpost', 'ball']
};

console.log('My cats breed: ', myCat.Breed, '\nColour: ', myCat.Colour, '\nName: ', myCat.Name);
myCat.talk();

myCat.favourite_toys.forEach(x => {
    console.log(x);
});


function catMaker(breed, colour, name, favouriteToys) {
    let cat = {
        breed,
        colour,
        name,
        favouriteToys,
        "myToys": () => favouriteToys.forEach(toy => console.log(toy)),
        "talk": () => console.log("Meow!")
    }
    return cat;
}

let catA = catMaker('Tabby', 'Tabby', 'Bagpuss', ['Mousie', 'String']);
let catB = catMaker('Gingerbread', 'Ginger', 'Ruby', ['Squirrel', 'Tail']);
catA.myToys();
catB.myToys();
catB.talk();

console.log(catA);
console.log(catB);

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

console.log("Add: 54 + 16 = " + add(54, 16));
console.log("Multiply: 2 * 16 = " + multiply(2, 16));
console.log("Divide: 64 / 8 = " + divide(64, 8));
console.log("Subtract: 20-10 = " + subtract(20, 10));

let myNumber = 1;
let fatArrowFunc = () => myNumber += 1;

fatArrowFunc();
fatArrowFunc();
console.log("My number is now: " + myNumber);

