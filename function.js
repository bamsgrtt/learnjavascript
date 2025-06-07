// membuat function
function convertCelciusToFahrenheit(temperatur) {
    const temperaturInFahrenheit = (9 / 5) * temperatur + 32;

    console.log('RESULT: ' ,temperaturInFahrenheit);
}

// Eksekusi tugas 
const temperatureInCelsius = 90
 // Hanya menampilkan nilai function
 console.log(convertCelciusToFahrenheit);
 // Output => [Function: convertCelciusToFahrenheit]
 
 // Akan menjalankan isi function
 convertCelciusToFahrenheit(temperatureInCelsius);
 // Output => Hasil konversi: 194


 // function lebih sederhana
 greetWolrd();

    function greetWolrd() {
        console.log('Hello, World!');
    }