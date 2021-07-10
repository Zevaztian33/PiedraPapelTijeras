var opciones = [0, 1, 2];
var seleccionIA;

function aleatorio(min, max){
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}

function seleccion(seleccionPJ){
    seleccionPJ = parseInt(seleccionPJ);
    seleccionIA = aleatorio(0,2);

    if(seleccionPJ == 0){
        if(opciones[seleccionIA] == 1){
            document.getElementById('resultado').innerHTML ='<h1>¡Perdiste!</h1> <h3>La máquina eligió <img src="./img/papel.png" alt="papel"> y tú <img src="./img/piedra.png" alt="piedra"></h3>';
        }else{
            if(opciones[seleccionIA] == 2){
                document.getElementById('resultado').innerHTML ='<h1>¡Ganaste!</h1> <h3>La máquina eligió <img src="./img/tijeras.png" alt="tijeras"> y tú <img src="./img/piedra.png" alt="piedra"></h3>';
            }else{
                if(opciones[seleccionIA] == 0){
                    document.getElementById('resultado').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron <img src="./img/piedra.png" alt="piedra"></h3>';
                }
            }
        } 
    }

    if(seleccionPJ == 1){
        if(opciones[seleccionIA] == 2){
            document.getElementById('resultado').innerHTML ='<h1>¡Perdiste!</h1> <h3>La máquina eligió <img src="./img/tijeras.png" alt="tijeras"> y tú <img src="./img/papel.png" alt="papel"></h3>';
        }else{
            if(opciones[seleccionIA] == 0){
                document.getElementById('resultado').innerHTML ='<h1>¡Ganaste!</h1> <h3>La máquina eligió <img src="./img/piedra.png" alt="piedra"> y tú <img src="./img/papel.png" alt="papel"></h3>';
            }else{
                if(opciones[seleccionIA] == 1){
                    document.getElementById('resultado').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron <img src="./img/papel.png" alt="papel"></h3>'; 
                }
            }
        }
    }

    if(seleccionPJ == 2) {
        if(opciones[seleccionIA] == 1){
            document.getElementById('resultado').innerHTML ='<h1>¡Perdiste!</h1> <h3>La máquina eligió <img src="./img/piedra.png" alt="piedra"> y tú <img src="./img/tijeras.png" alt="tijeras"></h3>';
        }else{
            if(opciones[seleccionIA] == 0){
                document.getElementById('resultado').innerHTML ='<h1>¡Ganaste!</h1> <h3>La máquina eligió <img src="./img/papel.png" alt="papel"> y tú <img src="./img/tijeras.png" alt="tijeras"></h3>';
            }else{
                if(opciones[seleccionIA] == 2) {
                    document.getElementById('resultado').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron <img src="./img/tijeras.png" alt="tijeras"></h3>';
                }
            }
        }
    }
}