//creamos una funcion en donde declaramos una lista con las palabras
function ChoirSong(numberUser) {
    if (typeof (numberUser) === "number") {
        if (numberUser > 0 && numberUser <= 4) {
            let song1 = [' Mami ', ' Gata ', ' Perra ', ' Zorra ', ' Chica '];
            let song2 = [' yo quiero ', ' vamos a ', ' yo voy a ', ' yo quiero ', 'yo vengo a '];
            let song3 = [' castigarte ', ' cogerte ', ' encenderte', ' darte', ' azotarte'];
            let song4 = [' duro ', ' rápido ', ' lento ', ' suave ', ' fuerte'];
            let song5 = [' hasta que salga el sol ', ' toda la noche ', ' hasta el amanecer ', ' hasta mañana ', ' todo el día '];
            let song6 = [' sin miedo ', ' sin anestesia ', ' en el piso ', ' contra la pared ', ' sin compromiso '];
            //utilizamos el metodo Random para generar una lista al azar
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence6 = song1[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence7 = song2[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence8 = song3[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence9 = song4[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence10 = song5[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence11 = song6[random];

            console.log(sentence6, sentence7, sentence8, sentence9, sentence10, sentence11);
            // declaramos unos valores predeterminados a dicha lista para ordenar y desordenar los numeros
            var uno = 0;
            var dos = 0;
            var tres = 0;
            var n = 0;
            do {

                var random = Math.round(Math.random() * (4 - 1) + 1);
                if ((random != uno) && (random != dos) && (random != tres)) {
                    n++;
                    if (n == 1) {
                        uno = random;
                    }
                    if (n == 2) {
                        dos = random;
                    }
                    if (n == 3) {
                        tres = random;
                    }
                }
            } while (n < 3);
            // nuevamente utilizamos el metodo Ramdon para generar lo que seria el coro de la cancion
            let sentence1 = song3[uno];
            let sentence2 = song3[dos];
            let sentence3 = song3[tres];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence4 = song5[random];
            var random = Math.round(Math.random() * (4 - 1) + 1);
            let sentence5 = song4[random];
            for (var a = 0; a < numberUser; a++) {

                console.log(sentence1, sentence2, sentence3, sentence4, sentence5);
            }

        } else {
            console.log("El número que ingresaste no es válido");
        }
    } else {
        console.log("No es un dato válido");
    }
}

ChoirSong(2);