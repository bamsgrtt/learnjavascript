// Arrow Function
const convertCelsiusToFahrenheit = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
}

temperatureInFahrenheit = convertCelsiusToFahrenheit(90)
console.log('Hasil Konversi: ', temperatureInFahrenheit)

// Concise arrow function
const convertCelsiusToFahrenheitInconciseSyntax = (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInconciseSyntax(90)
console.log('Hasil Konversi: ',temperatureInFahrenheit)