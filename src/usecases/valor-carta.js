
/**
 * Funcion que sirve para pedir una carta nueva
 * @param {String} carta 
 * @returns {Number} Retorna el valor numerico o especial de la carta correspondiente
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length-1);
    return  ( isNaN(valor))
            ? (valor === 'A') ? 11 : 10
            : valor * 1
}