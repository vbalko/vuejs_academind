new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timer: 0
    },
    methods: {
        timerSec: function(evt) {
            console.log('timerSec', this.timer, evt.target.value);
            this.timer = evt.target.value * 1000;
            console.log('timerSec', this.timer);
        }
    },
    computed: {
        result: function() {
            return this.value < 37 ? 'not there yet' : 'Now its ok';
        }
    },
    watch: {
        result: function() {
            setTimeout(function() {this.value = 0}.bind(this),this.timer | 500);
        }
    }
})