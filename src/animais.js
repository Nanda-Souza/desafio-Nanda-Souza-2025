//Lista de animais do abrigo incluindo nome, tipo e brinquedos favoritos
const animaisDisponiveis = [
    {
        Nome: 'Bola',
        Tipo: 'CÃO',
        Brinquedos: ['CAIXA', 'NOVELO']
        }, 
    {
        Nome: 'Bebe',
        Tipo: 'CÃO',
        Brinquedos: ['LASER', 'RATO', 'BOLA']
        }, 
    {
        Nome: 'Fofo',
        Tipo: 'GATO',
        Brinquedos: ['BOLA', 'RATO', 'LASER']
        }, 
    {
        Nome: 'Loco',
        Tipo: 'JABUTI',
        Brinquedos: ['SKATE', 'RATO']
        }, 
    {
        Nome: 'Mimi',
        Tipo: 'GATO',
        Brinquedos: ['BOLA', 'LASER']
        }, 
    {
        Nome: 'Rex',
        Tipo: 'CÃO',
        Brinquedos: ['RATO', 'BOLA']
        }, 
    {
        Nome: 'Zero',
        Tipo: 'GATO',
        Brinquedos: ['RATO', 'BOLA']
        }
];

//Função para validar se os indices estão em ordem crescente
function validaOrdemCrescente(lista) {
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < lista[i - 1]) {
      return false;
    }
  }
  return true;
}

class Animais {   

    //Valida lista por animais duplicados, se encontrar retorna true
    static validaAnimalDuplicado(listaAnimais) {
        for (let i = 0; i < listaAnimais.length; i++) {
            if (listaAnimais.indexOf(listaAnimais[i]) !== i) {
                return true;
            }
        }
        
        return false;
    }

    //Valida se o animal existe no abrigo comparando o nome da lista com a propriedade nome em UPPER CASE
    static validaAnimalAbrigo(listaAnimais) {
        for (let animal of listaAnimais) {
            if (!animaisDisponiveis.some(a => a.Nome.toUpperCase() === animal.toUpperCase())) {
                return false;
            }
        }

        return true;

    }

    //Valida as preferencias do animal
    static validaPreferenciaAnimal(nomeAnimal, listaBrinquedos, listaAdotados) {
        const animal = animaisDisponiveis.find(a => a.Nome.toUpperCase() === nomeAnimal.toUpperCase());
        const brinquedosFavoritos = animal.Brinquedos;
        const ordemFavoritos = [];
        let ordemCrestente = false;

        //Percorre os brinquedos favoritos do animal e verifica se estão na lista de brinquedos da pessoa
        for (let brinquedo of brinquedosFavoritos) {            
            
            for (let brinquedoLista of listaBrinquedos) {
                //Se o brinquedo favorito estiver na lista adiciona a posição do indice para termos a ordem
                if (brinquedo === brinquedoLista) {
                    ordemFavoritos.push(listaBrinquedos.indexOf(brinquedo));
                }
            }
        }
        
        //
        if (nomeAnimal.toUpperCase() === 'LOCO' && listaAdotados.length > 0) {
            ordemCrestente = true;
        } else {
            ordemCrestente = validaOrdemCrescente(ordemFavoritos);
        }

        //Caso o tamanho da lista de ordemFavoritos for igual ao tamanho da lista de brinquedos significa que todos os brinquedos foram encontrados
        //Se a função validaOrdem crescente retornar true significa que os brinquedos estão na ordem de preferencia mesmo intercalados
        if (ordemFavoritos.length == brinquedosFavoritos.length && ordemCrestente) {
            return true;
        } else {
            return false;
        }        
    }




}

export { Animais as Animais };