new Vue({
    el: '#exercise',
    data: {
        value: ""
    },
    methods: {
        btnClick: function(evt) {
            alert('Button clicked');
        },
        inputKeydown: function(evt) {
            this.value = evt.target.value;
        }
    }
})