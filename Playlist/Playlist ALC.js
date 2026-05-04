//4CM5 Lagunas Calderón Alfonso
//Declaramos la playlist como un arrelgo de objetos
const playlist = [
    { id: 1, nombre: 'Bohemian Rhapsody', artista: 'Queen', duracion: '5:55' },
    { id: 2, nombre: 'APT', artista: 'ROSÉ & Bruno Mars', duracion: '2:50' },
    { id: 3, nombre: 'Broche de Oro', artista: 'La Trakalosa de Monterrey', duracion: '3:35' },
    { id: 4, nombre: 'Mad World', artista: 'Gary Jules', duracion: '3:10' }
];

let cancionActual = 0; // Variable para rastrear la canción actual
let accion = 'play'; // Acción inicial

function controlarPlaylist(accion) {
    switch (accion) {
        case 'play':
            console.log(`Se ha pulsado 'Play' \n🎵 Reproduciendo: ${playlist[cancionActual].nombre} - ${playlist[cancionActual].artista}`);
            break;
        case 'pausa':
            console.log('Pausa');
            break;
        case 'siguiente':
            cancionActual = (cancionActual + 1) % playlist.length;
            console.log(`Siguiente: ${playlist[cancionActual].nombre} - ${playlist[cancionActual].artista}`);
            break;
        default:
            console.log('Acción no reconocida');
    }
}


console.log("Playlist inicial:", playlist);

controlarPlaylist('play');
controlarPlaylist('siguiente');
controlarPlaylist('pausa');
accion = prompt("¿Qué acción deseas realizar? (play, pausa, siguiente)");
controlarPlaylist(accion);
