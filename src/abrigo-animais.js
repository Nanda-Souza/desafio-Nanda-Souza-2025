class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    //Lista de brinquedos e animais válidos
    const animaisDisponiveis = ['Bola', 'Bebe', 'Fofo', 'Loco', 'Mimi', 'Rex', 'Zero'];
    const brinquedosValidos = ['BOLA', 'CAIXA', 'LASER', 'NOVELO', 'RATO', 'SKATE'];

    //Transforma as entradas em strings e cria listas separando por vírgula 
    //no caso da lista de brinquedos coverte para UPPER CASE
    const listaBrinquedosPessoa1 = brinquedosPessoa1.toString().toUpperCase().split(',');
    const listaBrinquedosPessoa2 = brinquedosPessoa2.toString().toUpperCase().split(',');
    const listaOrdemAnimais = ordemAnimais.split(',');

    //Valida brinquedos duplicados
    for (let i = 0; i < listaBrinquedosPessoa1.length; i++) {
      if (listaBrinquedosPessoa1.indexOf(listaBrinquedosPessoa1[i]) !== i) {
        return { erro: 'Brinquedo duplicado' };
      }
    }

    for (let j = 0; j < listaBrinquedosPessoa2.length; j++) {
      if (listaBrinquedosPessoa2.indexOf(listaBrinquedosPessoa2[j]) !== j) {
        return { erro: 'Brinquedo duplicado' };
      }
    }

    //Valida brinquedos inválidos
    for (let brinquedo of listaBrinquedosPessoa1) {
      if (!brinquedosValidos.includes(brinquedo)) {
        return { erro: 'Brinquedo inválido' };
      }
    }

    for (let brinquedo of listaBrinquedosPessoa2) {
      if (!brinquedosValidos.includes(brinquedo)) {
        return { erro: 'Brinquedo inválido' };
      }
    }
    

    


    
  }
}

export { AbrigoAnimais as AbrigoAnimais };
