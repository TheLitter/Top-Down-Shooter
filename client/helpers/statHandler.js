function statHandler(State){
    
    updateCurrency(State);
    updateXP(State);
    updateHealth(State);
    updateLvl(State);
    updateUpgrades(State);

};

function updateCurrency(State) {


    if (State.isDungeon === true){

    } else {
        let currencyBoost = (State.waveEnemies.countDead() * 5 * State.wave);
        State.player.currency = State.player.currencyStart + currencyBoost;
    };


};


function updateXP(State) {
    if (State.isDungeon === true){

    } else {
        let XPBoost = (State.waveEnemies.countDead() * 2 * State.wave);
        State.player.playerXP = State.player.playerXPStart + XPBoost;
    };

};

function updateHealth(State){
    if (State.isDungeon === true){

    } else {

        if (State.player.health <= 0) {
            gameStatHandler.prototype.save(State);
            State.wave = (State.wave) - (State.wave % 5);
            if(State.wave % 5 == 0 && State.wave > 1){
                State.wave -= 5;
            }
            if(State.wave == 0){
                State.wave = 1;
            }
            gameStatHandler.prototype.wave = State.wave;
            State.game.state.start('levelHouse');
        }
        if (State.player.health <= 30) {
            State.player.tint = Math.random() * 0xffffff;
        }
    }
};

function updateLvl(State){
    var currentLvl = State.player.playerLevel;
    State.player.playerLevel = Math.floor(Math.log2(State.player.playerXP));
    if(currentLvl < State.player.playerLevel){
        updateUpgrades(State);
        State.player.health = State.player.maxHealth;
    }
};

function updateUpgrades(State) {
    if(State.player.playerLevel > 1) {
        State.player.MOVE_SPEED = 500 + State.player.playerLevel * 5 + gameStatHandler.prototype.speedPoints * 5;
        State.mercs.MOVE_SPEED = State.player.MOVE_SPEED;
        State.player.maxHealth = 100 + (10 * State.player.playerLevel) + (gameStatHandler.prototype.healthPoints * 50);
    }
};