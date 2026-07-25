const arreglo: number[] = [1, 10, 56, 3, 7, 20, 66]

let temp = 0;
for (let i = 0; i < arreglo.length; i++) {

    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[i]<arreglo[j]) {
            temp = arreglo[i];
            arreglo[i] = arreglo[j];
            arreglo[j] = temp;
        }
    }
}
