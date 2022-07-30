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

  it('Testa se o retorno da localização dos elefantes está correto', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Testa se o retorno da localização dos elefantes está correto', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Testa se popularidade dos elefantes está correta', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(availability);
  });

  it('Testa se o retorno da função sem argumento', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
});
