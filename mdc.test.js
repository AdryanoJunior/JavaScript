const { mdc } = require('./mdc');

describe('Teste da função mdc', () => {
    it('deve retornar o MDC de dois números', () => {
        expect(mdc(72, 108)).toBe(36);
        expect(mdc(12, 28)).toBe(4);
        expect(mdc(18, 60)).toBe(6);
    });

    it('deve retornar o próprio número se um dos números for zero', () => {
        expect(mdc(0, 17)).toBe(5);
        expect(mdc(39, 0)).toBe(10);
        expect(mdc(0, 0)).toBe(0);
    });
});
