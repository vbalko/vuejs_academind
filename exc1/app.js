new Vue({
    el: '#exercise',
    data: {
        name: 'Vlado',
        age: 40,
        imageSquirrel: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Squirrel_posing.jpg/1200px-Squirrel_posing.jpg"
    },
    methods: {
        timesThree: function() {
            return this.age * 3;
        },
        random: function() {
            return Math.random();
        }
    }
});