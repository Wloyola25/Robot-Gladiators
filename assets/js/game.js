var playerName = window.prompt(" What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);


for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + "index");
}


//welcome the fighters
var fight = function(enemyName) {
     // fight function statements
}

    window.alert(" Welcome to Robot Gladiators! ");

var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose ");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT"){
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
    );
    
    // check enemy's health
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    } else {
        window.alert(enemyName + " still has " +enemyHealth + " health left. ");
    }
    
    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
    );
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName+ " has died! ");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
    
    //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip= window.confirm(" Are you sure you'd like to quit ");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
    // subtract money from playerMoney for skipping
    playerMoney= playerMoney -2;
    }
    // if no (false), ask question again by running fight() again
    else{
        fight();
    }
    
}

    //subtract the value of 'playerattack' from the value of 'enemyhealth' and use that resultto update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack; 
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining."
    
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerhealth' variable
    enemyHealth = enemyHealth - playerAttack; 
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining." 



for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
