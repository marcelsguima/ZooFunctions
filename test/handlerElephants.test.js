const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o retorno da população de elefantes está correta', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Testa se o retorno dos nomes dos elefantes está correto', () => {
    const actualNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(actualNames);
  });

  it('Testa se média da idade dos elefantes está correta', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
