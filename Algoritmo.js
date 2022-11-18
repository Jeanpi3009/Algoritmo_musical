// Se crea la función para retornar una cadena con la letra de una canción de reguetón.
function ChoirSong(numberUser) {
    // Validamos que sea un número.
    if (typeof (numberUser) === "number") {
        //Validamos que sea mayor a 0 y no mayor a 4.
        if (numberUser > 0 && numberUser <= 4) {
            // Declaracion de los 6 arrays que contienen las palabras.
            let words1 = [' Mami ', ' Gata ', ' Perra ', ' Zorra ',  ' Chica '];
            let words2 = [' yo quiero ', ' vamos a ', ' yo voy a ', ' yo quiero ', 'yo vengo a '];
            let words3 = [' castigarte ', ' cogerte ', ' encenderte', ' darte', ' azotarte'];
            let words4 = [' duro ', ' rápido ', ' lento ', ' suave ', ' fuerte'];
            let words5 = [' hasta que salga el sol ', ' toda la noche ', ' hasta el amanecer ', ' hasta mañana ', ' todo el día '];
            let words6 = [' sin miedo ', ' sin anestesia ', ' en el piso ', ' contra la pared ', ' sin compromiso '];

             //Generamos el número aleatorio para el coro de la canción y que no repita las palabras de la misma columna
            var uno = 0;
            var dos = 0;
            var tres = 0;
            var n = 0;
            do{
                var RandomNumber = Math.round(Math.random() * (5 - 1));
                if ((RandomNumber != uno) && (RandomNumber != dos) && (RandomNumber != tres)) {
                    n++;
                    if (n == 1) {
                        uno = RandomNumber;
                    }
                    if (n == 2) {
                        dos = RandomNumber;
                    }
                    if (n == 3) {
                        tres = RandomNumber;
                    }
                }
            } while (n < 3);

            let sentence1 = words3[uno];
            let sentence2 = words3[dos];
            let sentence3 = words3[tres];

            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence4 = words5[RandomNumber];

            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence5 = words4[RandomNumber];

            //Mostramos el coro.
            for (var a = 0; a < numberUser; a++) {
                console.log(sentence1, sentence2, sentence3, sentence4, sentence5);
            }


            //Generamos el número aleatorio para la primera frase de la estrofa.
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence6 = words1[RandomNumber];
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence7 = words2[RandomNumber];
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence8 = words3[RandomNumber];
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence9 = words4[RandomNumber];
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence10 = words5[RandomNumber];
            var RandomNumber = Math.round(Math.random() * (5 - 1));
            let sentence11 = words6[RandomNumber];

            //Mostramos la primera frase de la estrofa.
            console.log(sentence6, sentence7, sentence8, sentence9, sentence10, sentence11);


        } else {
            return "El número que ingresaste no es válido";
        }
    } else {
        return "No es un dato válido";
    }
}
ChoirSong(3);