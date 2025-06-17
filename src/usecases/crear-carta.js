

const divCartasJugadores = document.querySelectorAll('.divCartas')

export const crearCarta = ( carta, turnoJugador) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turnoJugador].append(imgCarta);
}