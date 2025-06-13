class Smartphones {     // Parents class
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging() {    // Method
        console.log(`Charging ${this.model}`);
    }
}

class iOS extends Smartphones { // Sub-class
    airDrop() {     
        console.log('iOS have a behavior AirDrop');
    }
}

class Android extends Smartphones { // Sub-class
    splitScreen() {
        console.log('Android have a behavior SplitScreen');
    }
}

// Pemanggilan
const ios = new iOS('black', 'A', '16 Pro Max');
const android = new Android('white','B', 'Infinix NOte 40');

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

// Instanceof (pengecekan)
console.log(ios instanceof Smartphones); // Output: True
console.log(android instanceof Smartphones); // Output: True