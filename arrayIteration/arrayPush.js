const animals = ["pigs", "chicken", "goats"];

const count = animals.push("dog");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "chicken", "goats", "dog"]

animals.push("tiger","crocodile", "dino");
console.log(animals); // output
// Expected output: Array ["pigs", "chicken", "goats", "dog", "tiger", "crocodile", "dino"]