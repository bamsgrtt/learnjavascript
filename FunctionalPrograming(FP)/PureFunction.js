// Impure Function
let value = 0;

function addWith(addingValue) {
  value += addingValue; // efek samping
  console.log(`Current value is ${value}`); // efek samping
  return value;
}

const result11 = addWith(1); // Output: Current value is 1
const result22 = addWith(1); // Output: Current value is 2
const result33 = addWith(1);
console.log(result11, result22, result33); // Output: 1, 2, 3


// Pure Function(tidak ada efek samping)
function addWith(value, addingValue) {
    return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`);

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`);

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`);

console.log(result1, result2, result3);