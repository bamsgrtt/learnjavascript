function sumNumbers(a, b) {
    const result = a + b;
    return result; // <--
  }
  
  const result = sumNumbers(2, 4);
  console.log('2 + 4:', result);
  
  /* Output:
  2 + 4: 6
  */

// ----
  function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!');
  }
   
  const message = generateGreetingWorldMessage();
  console.log(message);
   
  /* Output:
  Halo, dunia!
  */

// ----
function convertCelsiusToFahrenheit(temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90) // this parameter
console.log('Result Convertion: ', temperatureInFahrenheit)