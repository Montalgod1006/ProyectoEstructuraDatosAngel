const arreglo: number[] = [1, 10, 56, 3, 7, 20, 66]

console.log({arreglo});

for (let i = 0; i < arreglo.length; i++) {
    const key = arreglo[i]
    let j = i-1
    while (j>=0 && arreglo[j] > key) {
        arreglo[j+1] = arreglo[j];
        j = j-1;
    }
    arreglo[j+1] = key;
}

console.log({arreglo});