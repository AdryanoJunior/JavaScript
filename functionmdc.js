function calcularMDC(a, b) {
    // Garante que a é maior ou igual a b
    if (b > a) {
        [a, b] = [b, a];
    }

    // Cálculo do MDC
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

// Teste da função
const numero1 = 1000;
const numero2 = 2500;

const mdc = calcularMDC(numero1, numero2);

console.log(`O MDC entre ${numero1} e ${numero2} é: ${mdc}`);

