function encontrarIndicesMaiorMenor(array) {
    // Inicializa as variáveis para o índice do maior e do menor valor
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        // Atualiza o índice do maior valor, se necessário
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }

        // Atualiza o índice do menor valor, se necessário
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return {
        indiceMaior: indiceMaior,
        indiceMenor: indiceMenor
    };
}

// Teste da função
const arrayNumerico = [50, 42, 20, 15, 16, 12, 9];
const indices = encontrarIndicesMaiorMenor(arrayNumerico);

console.log(`O índice do maior valor é: ${indices.indiceMaior}`);
console.log(`O índice do menor valor é: ${indices.indiceMenor}`);
