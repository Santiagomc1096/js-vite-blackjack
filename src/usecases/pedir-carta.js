

/**
 * Funcion que sirve para pedir una carta nueva
 * @param {Array<String>} deck 
 * @returns {String} Retorna el valor en string de la carta correspondiente
 */
export const pedirCarta = ( deck ) => {
    if( !deck || deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}