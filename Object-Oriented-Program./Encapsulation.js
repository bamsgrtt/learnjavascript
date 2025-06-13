class CoffeMachine {
    #temperature = 90; // enclosing class

    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature) {
        console.log('you are not allowed to change the temperature');
    }

    get temperature() {
        return this.#temperature;
    }

    #defaultTemperature() {
        return 90;
    }
}

// Contoh Penggunaan akan error karena mencoba mengubah property private
const Coffe = new CoffeMachine();
console.log(`sdsdsdsds ${Coffe}`)
// Coffe.#temperature = 100;