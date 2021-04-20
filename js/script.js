var root = new Vue({

    el: "#root",

    data: {

        currentImg : 0,

        imgLinks : [
            "img/campagna.jpg",
            "img/cascate.jpg",
            "img/fiori.jpeg",
            "img/montagne.jpg"
        ],

        imgDirection: "+"

    },

    methods: {

        nextPrev() {

            const nextPrevImg = eval(this.currentImg + this.imgDirection + "1");

            this.currentImg = nextPrevImg;

            if (nextPrevImg >= this.imgLinks.length) {
                this.currentImg = 0;
            } else if (nextPrevImg < 0) {
                this.currentImg = this.imgLinks.length -1;
            }

        }

    }

});
