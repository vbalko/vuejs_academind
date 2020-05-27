const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        link: 'http://www.root.cz',
        completeLink: '<a href="http://www.google.com">Google</a>'
    },
    methods: {
        changeMessage: function(evt) {
            this.message = evt.target.value;
        }
    }
});

console.log('--> ', app);