// Higher-Order Function: menerima fungsi dan argumen, lalu menjalankannya
function apply(operation, ...args) {
    // KODE
    return operation(...args)
}

function sum(a, b, c) {
    return a + b + c;
}

function discount(disc, value) {
    return value - ((disc / 100) * value);
} 

// penggunaan HOF
const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product Price:', productPrice);
console.log('with discount 25%', withDiscount);




//========================CONTOH 2==============================//
function memoize(fn) {
    const cache = new Map(); // menyimpan hasil yg pernah di hitung

    return function (...args) {
        const key = JSON.stringify(args); // membuat key dari argumen
        if (cache.has(key)) 
            return cache.get(key);  // kembalikan hasil dari cache jika sudah ada

        const result = fn(...args); // jalan kan fungsi asli
        cache.set(key, result); // menyimpan hasil kedalam cache
        return result;
    };
}

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1)); // recursive menunjukan isi array
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 },  (_, i) => i + 1);

console.time('memoized Sum first call');
console.log('Total:', memoizedSumArray(largeArray));    // hitung pertama
console.timeEnd('memoized Sum first call');

console.time('memoized Sum second call (cache)');
console.log('Total:', memoizedSumArray(largeArray));    // gunakan cache
console.timeEnd('memoized Sum second call (cache)');