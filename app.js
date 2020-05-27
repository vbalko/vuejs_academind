const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        link: 'http://www.root.cz',
        completeLink: '<a href="http://www.google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeMessage: function(evt) {
            this.message = evt.target.value;
        },
        btnInc: function(evt) {
            this.counter += 1;
        },
        btnDec: function(evt) {
            this.counter -= 1;
        },
        updateCoordinates: function(evt) {
            console.log(evt);
             ({ 
                clientX:this.x,
                clientY:this.y
            } = evt);
            // this.x = evt.clientX;
            // this.y = evt.clientY;
        }
    }
});

