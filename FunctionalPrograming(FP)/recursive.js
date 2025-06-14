for (let i = 10; i >= 1; i--) { // looping biasa
    console.log(i);
}

function cetakAngka(n) {
    if (n === 0) { // Base case
        return;
    }

    console.log(n);
    cetakAngka(n-1); // rekursive
}

cetakAngka(10);

// function Faktorial
function faktorial(y) {
    if (y === 0) return 1;
    return y * faktorial(y-1);
}

faktorial(32);

