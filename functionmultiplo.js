function somaMultiplosDe5e7() {
    let soma = 0;

    for (let i = 1; i < 1000; i++) {
        // Verifica se o número é múltiplo de 5 ou 7
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;
}

// Teste da função
const resultado = somaMultiplosDe5e7();
console.log(`A soma de todos os múltiplos de 5 ou 7 abaixo de 1000 é: ${resultado}`);
