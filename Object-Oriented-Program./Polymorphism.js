class Smartphones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class Android extends Smartphones {
    // Overriding constructor
    constructor(color, brand, model, device) {
        super(color, brand, model); // method super()
        this.device = device;
    }


    // Overriding Method
    charging() {
        // memanggil method charging dari SuperClass (SmartPhones)
        super.charging();
        console.log(`Charging ${this.model} with fast charging`); // yg di ubah
    }


    splitScreen() {
        console.log('Android have a splitScreen');
    }
}

// Output
const android = new Android('white', 'B', 'Infinix Note 40', 'smart TV');
android.charging();