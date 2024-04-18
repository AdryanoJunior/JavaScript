const { indicesMinMax } = require('./indicesMinMax');

describe('Teste da função indicesMinMax', () => {
    it('deve retornar os índices do menor e do maior valor em um array', () => {
        expect(indicesMinMax([1, 7, 3, 2])).toEqual({ indiceMin: 0, indiceMax: 3 });
        expect(indicesMinMax([40, 25, 33, 36, 50])).toEqual({ indiceMin: 0, indiceMax: 4 });
        expect(indicesMinMax([17, 13, 11, 28, 31])).toEqual({ indiceMin: 4, indiceMax: 0 });
    });

    it('deve retornar os índices corretos para arrays com valores negativos', () => {
        expect(indicesMinMax([-30, -25, -20, -15])).toEqual({ indiceMin: 2, indiceMax: 1 });
        expect(indicesMinMax([-9, -7, -3, -5])).toEqual({ indiceMin: 1, indiceMax: 2 });
    });

});
