class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    //Lista de brinquedos e animais válidos
    const animaisDisponiveis = ['Bola', 'Bebe', 'Fofo', 'Loco', 'Mimi', 'Rex', 'Zero'];
    const brinquedosValidos = ['BOLA', 'CAIXA', 'LASER', 'NOVELO', 'RATO', 'SKATE'];

    //Transforma as entradas em strings e cria listas separando por vírgula 
    //remove entradas com espaços
    //e no caso da lista de brinquedos coverte para UPPER CASE
    const listaBrinquedosPessoa1 = brinquedosPessoa1.toString().toUpperCase().split(',').map(a => a.trim());
    const listaBrinquedosPessoa2 = brinquedosPessoa2.toString().toUpperCase().split(',').map(a => a.trim());
    const listaOrdemAnimais = ordemAnimais.toString().split(',').map(a => a.trim());

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

    //Valida animais duplicados
    for (let i = 0; i < listaOrdemAnimais.length; i++) {
      if (listaOrdemAnimais.indexOf(listaOrdemAnimais[i]) !== i) {
        return { erro: 'Animal duplicado' };
      }
    }

    //Valida animais inválidos
    for (let animal of listaOrdemAnimais) {
      if (!animaisDisponiveis.includes(animal)) {
        return { erro: 'Animal inválido' };
      }
    }
    

    


    
  }
}

export { AbrigoAnimais as AbrigoAnimais };
