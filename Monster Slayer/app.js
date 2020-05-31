new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning:false,
        gameLog: []
    },
    computed: {

    },
    methods: {
        btnStartGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameLog = [];
            this.addGameLog('Game started!');
            this.gameIsRunning = true;
            console.log('Start game: ', this.gameIsRunning);
        },
        btnGiveUp: function() {
            this.gameIsRunning = false;
            this.addGameLog('Game given up!');
            console.log('Game stopped: ', this.gameIsRunning);
        },
        btnAttack: function() {
            const attack = 10;
            this.monsterHealth -= attack;
            this.monsterAttack();
            this.addPlayerLog(`You attacked for: ${attack}`);
            this.resolveGame();
            console.log('Attack: ',attack);
        },
        btnSpecAttack: function() {
            const attack = Math.round(10 * (Math.random() + 1))
            this.monsterHealth -= attack;
            this.addPlayerLog(`You hit hard for: ${attack}`);
            this.monsterAttack();
            this.resolveGame();
            console.log('Spec. attack: ',attack);
        },
        btnHeal: function(){
            const heal = Math.round(10 * (Math.random() + 0.5));
            this.playerHealth += heal;
            this.monsterAttack();
            this.addPlayerLog(`You healed for: ${heal}`);
            this.resolveGame();
            console.log('Heal: ', heal);
        },
        monsterAttack: function(){
            const attack = Math.round(10 * (Math.random() + 0.5))
            this.playerHealth -= attack;
            this.addMonsterLog(`Monster attacked for: ${attack}`);
            // this.resolveGame();
            console.log('Monster attack: ',attack);
        },
        addPlayerLog: function(message) {
            this.addGameLog(message,true);
        },
        addMonsterLog: function(message) {
            this.addGameLog(message,false);
        },
        addGameLog: function(message, isPlayer=false) {
            this.gameLog.unshift({
                isPlayer,
                message
            });
        },
        resolveGame: function() {
            if (this.playerHealth <= 0) {
                this.addGameLog(`You lost!!!`);
                if (confirm('You lost!!! Start new game?')) {
                    this.gameIsRunning = false;
                    this.btnStartGame();
                } else {
                    this.gameIsRunning = false;
                }                
            } else if (this.monsterHealth <= 0) {
                this.addGameLog(`You won!!!`);
                if (confirm('You won!!! Start new game?')) {
                    this.gameIsRunning = false;
                    this.btnStartGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
        }
    }
})