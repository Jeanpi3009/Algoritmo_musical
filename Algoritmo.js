//creamos una funcion en donde declaramos una lista con las palabras
function ChoirSong(Number) {
    if (typeof (Number) === "number") {
        if (Number > 0 && Number <= 4) {
            let song1 = [' Mami ', ' Gata ', ' Perra ', ' Zorra ', ' Chica '];
            let song2 = [' yo quiero ', ' vamos a ', ' yo voy a ', ' yo quiero ', 'yo vengo a '];
            let song3 = [' castigarte ', ' cogerte ', ' encenderte', ' darte', ' azotarte'];
            let song4 = [' duro ', ' rápido ', ' lento ', ' suave ', ' fuerte'];
            let song5 = [' hasta que salga el sol ', ' toda la noche ', ' hasta el amanecer ', ' hasta mañana ', ' todo el día '];
            let song6 = [' sin miedo ', ' sin anestesia ', ' en el piso ', ' contra la pared ', ' sin compromiso '];
            //utilizamos el metodo Random para generar una lista al azar
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme6 = song1[random];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme7 = song2[random];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme8 = song3[random];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme9 = song4[random];
            var random = Math.round(Math.random() * (5- 1));
            let rhyme10 = song5[random];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme11 = song6[random];

            console.log(rhyme6, rhyme7, rhyme8, rhyme9, rhyme10, rhyme11);
            // declaramos unos valores predeterminados a dicha lista para ordenar y desordenar los numeros
            var uno = 0;
            var dos = 0;
            var tres = 0;
            var n = 0;
            do {

                var random = Math.round(Math.random() * (5 - 1));
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
            let rhyme1 = song3[uno];
            let rhyme2 = song3[dos];
            let rhyme3 = song3[tres];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme4 = song5[random];
            var random = Math.round(Math.random() * (5 - 1));
            let rhyme5 = song4[random];
            for (var a = 0; a < Number; a++) {

                console.log(rhyme1, rhyme2, rhyme3, rhyme4, rhyme5);
            }

        } else {
            console.log("El número que ingresaste no es válido");
        }
    } else {
        console.log("No es un dato válido");
    }
}

ChoirSong(2);