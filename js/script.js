var root = new Vue({

    el: "#root",

    data: {

        //Imposto un indice a 0 per la prima immagine mostrata
        currentImg: 0,

        //Creo l'array con i link delle immagini
        imgLinks: [
            "img/campagna.jpg",
            "img/cascate.jpg",
            "img/fiori.jpeg",
            "img/montagne.jpg"
        ],

    },

    methods: {

        //Creo una funzione che cambierà le immagini
        nextPrev(forward) {

            //Metto l'indice in una variabile let
            let nextPrevImg = this.currentImg;

            //Nel caso in cui l'argomento della funzione è true..
            if (forward) {
                //L'indice aumenta
                nextPrevImg += 1;

                //Se l'indice raggiunge la lunghezza dell'array..
                if (nextPrevImg >= this.imgLinks.length) {

                    //Resetto l'indice a zero
                    nextPrevImg = 0;
                }

            //Nel caso in cui l'argomento della funzione è false..
            } else {
                //L'indice diminuisce
                nextPrevImg -= 1;

                //Se l'indice è meno di 0...
                if (nextPrevImg < 0) {

                    //Resetto l'indice all'ultima immagine (l'ultimo elemento dell'array con i link delle immagini)
                    nextPrevImg = this.imgLinks.length - 1;
                }

            }

            //Assegno il valore della variabile all'indice iniziale
            this.currentImg = nextPrevImg;

        },

        //Creo una funzione che permette di raggiungere l'immagine relativa al bottone cliccato
        //number ==> è l'indice dell'elemento/bottone cliccato
        jumpToImg(number) {
            //Assegnamo lo stesso indice del bottone cliccato anche alla variabile currentImg
            this.currentImg = number;
        }

    },

    //Una volta che la pagina sarà caricata..
    created: function() {

        //Creo un setInterval che richiamerà la funzione nextPrev con argomento true
        //in modo che mandi avanti lo slider, ogni 3000 millisecondi.
        setInterval(() => {
            this.nextPrev(true);
        }, 3000);

    }

});
