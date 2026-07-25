const arreglo: number[] = [1, 10, 56, 3, 7, 20, 66]

console.log({arreglo});

for (let i = 0; i < arreglo.length; i++) {

    for (let j = 0; j < arreglo.length-i-1; j++) {

        if (arreglo[j]!>arreglo[j+1]!) {
            const temp = arreglo[j];
            arreglo[j] = arreglo[j+1]!;
            arreglo[j+1] = temp!;
        }
    }
}

console.log({arreglo});