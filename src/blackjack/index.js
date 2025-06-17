import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from '../usecases/crear-deck'
// import crearDeck, { crearDeck }  from '../usecases/crear-deck'
import { acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora, valorCarta } from '../usecases';


/**
* 2C = Two of Clubs (treboles)
* 2D = Two of Diamonds (Diamantes)
* 2H = Two of Hearts (Corazones)
* 2S = Two of Spades (Espadas)
*/

const miModulo=(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = [];

    // Referencias del HTML
    const   btnPedir      = document.querySelector('#btnPedirCarta'),
            btnDetener    = document.querySelector('#btnDetener'),
            btnNuevo    = document.querySelector('#btnNuevo');

    const //divCartasJugadores      = document.querySelector('#jugador-cartas'),
          //divCartasComputadora  = document.querySelector('#computadora-cartas');
          divCartasJugadores = document.querySelectorAll('.divCartas')

    const puntajes = document.querySelectorAll('small');

    const inicializarJuego = ( numJugadores = 1 ) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = []
        for(let i = 0; i <= numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntajes.forEach( elem => elem.innerText = 0)
        divCartasJugadores.forEach( elem => elem.innerHTML = '')
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta( deck );
        console.log(deck);
        
        const puntosJugador = acumularPuntos( 0, carta, puntosJugadores )

        crearCarta(carta, 0)

        if( puntosJugador > 21 ){
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores);
        } else if (puntosJugador === 21){
            console.warn('21, muy bien');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores);
        }
        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0], deck, puntosJugadores);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })

    return {
        nuevoJuego: inicializarJuego
    }

})();

