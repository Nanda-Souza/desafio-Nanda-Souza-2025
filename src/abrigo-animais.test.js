import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido da lista', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar animal duplicado da lista', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Rex,Rex');
    expect(resultado.erro).toBe('Animal duplicado');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar animal como inválido caso receba inteiro', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 1);
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });
  
  test('Deve rejeitar animal como inválido caso receba lista com separador diferente de virgula', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Rex.Fofo');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo inválido da pessoa 1', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('OSSO,RATO', 'RATO,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo inválido da pessoa 2', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('laser,RATO', 'PIZZA,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo como inválido caso receba inteiro', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(1, 'PIZZA,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo como inválido caso receba lista com separador diferente de virgula', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA.RATO', 'RATO,BOLA', 'Rex,Fofo');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo duplicado pela pessoa 1', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,RATO', 'RATO,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo duplicado');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo duplicado pela pessoa 2', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,LASER', 'BOLA,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo duplicado');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve aceitar brinquedos em lower case como entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'rato,bola', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve aceitar brinquedos com espaços em branco como entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      ' RATO, BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

   test('Deve aceitar animais com espaços em branco como entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      ' RATO, BOLA', 'RATO,NOVELO', 'Rex , Fofo ');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve aceitar animais em lower case como entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      ' RATO, BOLA', 'RATO,NOVELO', 'rex,fofo');
      expect(resultado.lista[0]).toBe('fofo - abrigo');
      expect(resultado.lista[1]).toBe('rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para dois animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,CAIXA,NOVELO', 'BOLA,LASER', 'Rex,Fofo,Bola,Mimi');
      expect(resultado.lista[0]).toBe('Bola - pessoa 1');
      expect(resultado.lista[1]).toBe('Fofo - abrigo');
      expect(resultado.lista[2]).toBe('Mimi - pessoa 2');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });
  
  test('Deve encontrar pessoa para três animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA,CAIXA,NOVELO', 'BOLA,LASER', 'Rex,Bebe,Bola,Mimi');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Bola - pessoa 1');
      expect(resultado.lista[2]).toBe('Mimi - pessoa 2');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  }); 

  test('Não deve permitir pessoa adotar mais de três animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'SKATE, LASER,RATO,BOLA,CAIXA,NOVELO', 'BOLA,LASER', 'Rex,Bebe,Bola,Loco');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Bola - pessoa 1');
      expect(resultado.lista[2]).toBe('Loco - abrigo');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para Loco com brinqueidos fora de ordem que já tenha outro animal adotado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,SKATE', 'RATO,NOVELO', 'Rex,Loco');
      expect(resultado.lista[0]).toBe('Loco - pessoa 1');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Não deve encontrar pessoa para o Loco sem ter todos os brinquedos caso tenha outro animal adotado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Loco');
      expect(resultado.lista[0]).toBe('Loco - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Não deve encontrar pessoa para Loco com brinqueidos fora de ordem caso não tenha outro animal adotado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,SKATE', 'RATO,NOVELO', 'Loco,Rex');
      expect(resultado.lista[0]).toBe('Loco - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Não deve encontrar a mesma pessoa para gatos com os brinquedos em comum', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,SKATE', 'RATO,NOVELO', 'Rex,Zero');
      expect(resultado.lista[0]).toBe('Rex - pessoa 1');
      expect(resultado.lista[1]).toBe('Zero - abrigo');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });
});
