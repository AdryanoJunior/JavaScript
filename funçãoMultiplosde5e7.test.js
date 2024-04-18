const { somaMultiplosDe5e7 } = require('./somaMultiplosDe5e7>1000');

describe('Teste da função somaMultiplosDe5e7', () => {
    it('deve retornar a soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somaMultiplosDe5e7()).toBe(214235);
    });

    it('deve retornar a soma correta para um intervalo específico', () => {
        expect(somaMultiplosDe5e7(30)).toBe(175);
    });

    it('deve retornar a soma correta para um intervalo específico', () => {
        expect(somaMultiplosDe5e7(50)).toBe(471);
    });
});
