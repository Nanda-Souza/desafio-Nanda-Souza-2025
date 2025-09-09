
const animaisDisponiveis = [
    {Nome: 'Bola'}, 
    {Nome: 'Bebe'}, 
    {Nome: 'Fofo'}, 
    {Nome: 'Loco'}, 
    {Nome: 'Mimi'}, 
    {Nome: 'Rex'}, 
    {Nome: 'Zero'}
];

class Animais {
    //Metodo para retornar a lista de animais disponíveis no abrigo
    // static listaAnimais() {
    //     return animaisDisponiveis;
    // }

    //Valida lista por animais duplicados, se encontrar retorna true
    static validaAnimalDuplicado(listaAnimais) {
        for (let i = 0; i < listaAnimais.length; i++) {
            if (listaAnimais.indexOf(listaAnimais[i]) !== i) {
                return true;
            }
        }
        
        return false;
    }

    static validaAnimalAbrigo(listaAnimais) {
        for (let animal of listaAnimais) {
            if (!animaisDisponiveis.some(a => a.Nome === animal)) {
                return false;
            }
        }

        return true;

    }




}

export { Animais as Animais };