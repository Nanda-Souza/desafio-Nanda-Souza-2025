//Lista de brinquedos
const brinquedosValidos = ['BOLA', 'CAIXA', 'LASER', 'NOVELO', 'RATO', 'SKATE'];

class Brinquedos {

    //Valida brinquedos duplicados
    static validaBrinquedosDuplicados(listaBrinquedos1, listaBrinquedos2) {
        for (let i = 0; i < listaBrinquedos1.length; i++) {
            if (listaBrinquedos1.indexOf(listaBrinquedos1[i]) !== i) {
                return true;
            }
        }
        for (let j = 0; j < listaBrinquedos2.length; j++) {
            if (listaBrinquedos2.indexOf(listaBrinquedos2[j]) !== j) {
                return true;
            }        
        }

        return false;
    }

    //Valida brinquedos inválidos
    static validaBrinquedoInvalido(listaBrinquedos1, listaBrinquedos2) {
        for (let brinquedo of listaBrinquedos1) {
            if (!brinquedosValidos.includes(brinquedo)) {
                return true;
            }
        }

        for (let brinquedo of listaBrinquedos2) {
            if (!brinquedosValidos.includes(brinquedo)) {
                return true;
            }
        }
        
        return false;
    }


}

export { Brinquedos as Brinquedos };