import { acumularPuntos, crearCarta, pedirCarta } from "./";




const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores
    setTimeout(() => {
        if( puntosMinimos < puntosComputadora){
            alert('Nadie gana :(')
        } else if (puntosMinimos > 21){
            alert('Computadora gana')
        } else if( puntosComputadora > 21){
            alert('Jugador gana');
        } else {
            alert('Computadora gana')
        }
    }, 10);
}

// Turno de la computadora
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores) => {

    console.log(puntosJugadores);
    
    if( !puntosMinimos ) throw new Error('Puntos minimos es necesario');
    if( !deck ) throw new Error('El deck es necesario');

    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos( puntosJugadores.length - 1, carta, puntosJugadores)
        
        crearCarta(carta, puntosJugadores.length - 1 )

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador( puntosJugadores )
    }