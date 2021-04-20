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


    },

    methods: {

        nextPrev(forward) {

            let nextPrevImg = this.currentImg;

            if (forward){
                nextPrevImg += 1;

                if (this.currentImg >= this.imgLinks.length) {
                    nextPrevImg = 0;
                }

            } else {
                nextPrevImg -= 1;

                if (nextPrevImg < 0) {
                    nextPrevImg = this.imgLinks.length -1;
                }

            }

            this.currentImg = nextPrevImg;

        },

        jumpToImg(number) {
            this.currentImg = number;
        }

    },

    created: function () {
        setInterval(function(){
            nextPrev(true);
        }, 1000);
    }

});
