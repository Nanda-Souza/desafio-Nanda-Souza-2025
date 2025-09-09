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




}

export { Animais as Animais };