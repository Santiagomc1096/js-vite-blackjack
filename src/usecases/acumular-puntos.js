import { valorCarta } from "./valor-carta";

const puntajes = document.querySelectorAll('small');
// Turno: 0 = primer jugador y el ultimo sera la computadora
export const acumularPuntos = ( turnoJugador, carta, puntosJugadores ) => {

    
    puntosJugadores[turnoJugador] += valorCarta(carta);
    puntajes[turnoJugador].innerText = puntosJugadores[turnoJugador];
    return puntosJugadores[turnoJugador]
}