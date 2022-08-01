const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se executar a função sem parâmetros retorna um objeto com o horário de funcionamento', () => {
    const schedule = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(schedule);
  });

  it('Testa se retorna string The zoo is closed ao passar um parâmetro monday', () => {
    expect(getOpeningHours('Monday', '09:00-am')).toEqual('The zoo is closed');
  });

  it('Testa se retorna string The zoo is closed ao passar um parâmetro fora do horário de funcionamento', () => {
    expect(getOpeningHours('Wednesday', '09:00-pm')).toEqual('The zoo is closed');
  });

  it('Testa se retorna string The zoo is open ao passar um parâmetro dentro do horário de funcionamento', () => {
    expect(getOpeningHours('Saturday', '12:00-pm')).toEqual('The zoo is open');
  });

  it('Testa se retorna erro ao passar um parâmetro com o formaro inválido', () => {
    expect(() => getOpeningHours('Friday', '12:00pm')).toThrow(new Error('The minutes should represent a number'));
  });

  it('Testa se retorna erro ao passar um parâmetro com o formaro de AM/PM inválido', () => {
    expect(() => getOpeningHours('Tuesday', '8:00-cm')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Testa se retorna erro ao passar um parâmetro de hora inválido', () => {
    expect(() => getOpeningHours('Tuesday', '14:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Testa se retorna erro ao passar um parâmetro de minuto inválido', () => {
    expect(() => getOpeningHours('Tuesday', '9:68-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });

  it('Testa se retorna erro ao passar um parâmetro de dia da semana inválido', () => {
    expect(() => getOpeningHours('Sextouday', '10:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
});
