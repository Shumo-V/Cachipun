var numerodepartidas = +prompt("¿Cuantas veces deseas jugar?");

for (var i = 0; i < numerodepartidas; i++) { // Comenzar el ciclo y repetir n veces hasta que i sea igual al número de partidas seleccionadas

    var usuario = prompt(`[${i+1}/${numerodepartidas}] ¿Piedra, Papel o Tijeras?`).toLocaleLowerCase();
    var jugadas = [`piedra`, `papel`, `tijeras`];
    var cpu = Math.floor(Math.random() * 3); // cpu 0 = Piedra ; cpu 1 = Papel ; cpu 2 = Tijeras

    if (jugadas.includes(usuario)) {

        document.write("<br />");
        document.write(`<h2><b> Jugada ${i + 1}<br/></h2>`);

        if (usuario == "piedra") {
            if (cpu == 0) {
                alert("¡Es un empate! Ambos escogieron piedra");
                document.write(`Es un empate! Ambos escogieron piedra <br/>`);
            } else {
                if (cpu == 1) {
                    alert("Has perdido! La máquina escogió papel y tú piedra");
                    document.write(`Has perdido! La máquina escogió papel y tú piedra <br/>`);
                } else {
                    if (cpu == 2) {
                        alert("Felicitaciones, has ganado! La máquina escogió tijeras y tú piedra");
                        document.write(`Felicitaciones, has ganado! La máquina escogió tijeras y tú piedra <br/>`);
                    }
                }
            }
        }

        if (usuario == "papel") {
            if (cpu == 0) {
                alert("Felicitaciones, has ganado! La máquina escogió piedra y tú papel");
                document.write(`Felicitaciones, has ganado! La máquina escogió piedra y tú papel <br/>`);
            } else {
                if (cpu == 1) {
                    alert("Es un empate! Ambos escogieron papel");
                    document.write(`Es un empate! Ambos escogieron papel <br/>`);
                } else {
                    if (cpu == 2) {
                        alert("Has perdido! La máquina escogió tijeras y tú papel");
                        document.write(`Has perdido! La máquina escogió tijeras y tú papel <br/>`);
                    }
                }
            }
        }

        if (usuario == "tijeras") {
            if (cpu == 0) {
                alert("Has perdido! La máquina escogió piedra y tú tijeras");
                document.write(`Has perdido! La máquina escogió piedra y tú tijeras <br/>`);
            } else {
                if (cpu == 1) {
                    alert("Felicitaciones, has ganado! La máquina escogió papel y tú tijeras");
                    document.write(`Felicitaciones, has ganado! La máquina escogió papel y tú tijeras <br/>`);
                } else {
                    if (cpu == 2) {
                        alert("Es un empate! Ambos escogieron tijeras");
                        document.write(`Es un empate! Ambos escogieron tijeras <br/>`);
                    }
                }
            }
        }
    } else {
        alert(`No has introducido una jugada válida`);
        i--;
    }

}

function reiniciarJuego() {
    location.reload();
}