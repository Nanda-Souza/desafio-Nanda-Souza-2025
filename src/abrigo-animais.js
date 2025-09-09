import { Animais } from './animais.js';
import { Brinquedos } from './brinquedos.js';

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {    
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
    // for (let brinquedo of listaBrinquedosPessoa1) {
    //   if (!brinquedosValidos.includes(brinquedo)) {
    //     return { erro: 'Brinquedo inválido' };
    //   }
    // }

    // for (let brinquedo of listaBrinquedosPessoa2) {
    //   if (!brinquedosValidos.includes(brinquedo)) {
    //     return { erro: 'Brinquedo inválido' };
    //   }
    // }
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
    
    
  }
}

export { AbrigoAnimais as AbrigoAnimais };
