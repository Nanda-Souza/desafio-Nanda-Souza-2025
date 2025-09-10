import { Animais } from './animais.js';
import { Brinquedos } from './brinquedos.js';

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {    
    //Variaveis de controle usadas para montar a lista de resultado
    const listaResultado = [];
    const listaAdotadosPessoa1 = [];
    const listaAdotadosPessoa2 = [];
    let prefPessoa1 = false;
    let prefPessoa2 = false;

    
    //Transforma as entradas em strings e cria listas separando por vírgula 
    //remove entradas com espaços
    //e no caso da lista de brinquedos coverte para UPPER CASE
    const listaBrinquedosPessoa1 = brinquedosPessoa1.toString().toUpperCase().split(',').map(a => a.trim());
    const listaBrinquedosPessoa2 = brinquedosPessoa2.toString().toUpperCase().split(',').map(a => a.trim());
    const listaOrdemAnimais = ordemAnimais.toString().split(',').map(a => a.trim());

    //Valida brinquedos duplicados    
    if (Brinquedos.validaBrinquedosDuplicados(listaBrinquedosPessoa1, listaBrinquedosPessoa2)) {
      return { erro: 'Brinquedo duplicado' };
    }

    //Valida brinquedos inválidos    
    if (Brinquedos.validaBrinquedoInvalido(listaBrinquedosPessoa1, listaBrinquedosPessoa2)) {
      return { erro: 'Brinquedo inválido' };
    }

    //Valida animais duplicados
    if (Animais.validaAnimalDuplicado(listaOrdemAnimais)) {
      return { erro: 'Animal duplicado' };
    }

    //Valida animais inválidos    
    //Se a função retorna false, significa que não achou o animal na lista do abrigo
    if (!Animais.validaAnimalAbrigo(listaOrdemAnimais)) {
      return { erro: 'Animal inválido' };
    }

    for (let animal of listaOrdemAnimais) {
      prefPessoa1 = Animais.validaPreferenciaAnimal(animal, listaBrinquedosPessoa1, listaAdotadosPessoa1)
      prefPessoa2 = Animais.validaPreferenciaAnimal(animal, listaBrinquedosPessoa2, listaAdotadosPessoa2)
      
      //Caso as duas pessoas tenham a preferência do animal ele ficará no abrigo
      //Caso contrario valida qual pessoa tem a preferência e se ambas retornarm false o animal irá para o abrigo
      //Caso a pessoa tenha adotado 3 animais, mesmo que tenha a preferência o animal irá para o abrigo
      if (prefPessoa1 && prefPessoa2) {
          listaResultado.push(`${animal} - abrigo`);
      } else if (prefPessoa1 && listaAdotadosPessoa1.length < 3) {
          listaResultado.push(`${animal} - pessoa 1`);
          listaAdotadosPessoa1.push(animal);
      } else if (prefPessoa2 && listaAdotadosPessoa2.length < 3) {
          listaResultado.push(`${animal} - pessoa 2`);
          listaAdotadosPessoa2.push(animal);
      } else {
          listaResultado.push(`${animal} - abrigo`);
      }
    }      
    
    return { lista: listaResultado.sort()};

  }
}

export { AbrigoAnimais as AbrigoAnimais };
