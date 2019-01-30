    function diceRoll(){
       var roll1 = Math.floor(Math.random() * 6)+1;
        var roll2 = Math.floor(Math.random() * 6)+1;
        var roll = roll1 + roll2;
        console.log("Hola, Mrs. Smith");
        if (roll == 7 || roll == 11){
            document.getElementById("diceOutput").innerHTML = "You rolled a " + roll + " You win haha! ";
        }
        else if (roll == 2 || roll == 3 || roll == 12){
            document.getElementById("diceOutput").innerHTML = "You rolled a " + roll + " You are a loser!";
        }
        else{
            document.getElementById("diceOutput").innerHTML ="You rolled a " + roll + " looks like you have to roll again!";
        }
    }
