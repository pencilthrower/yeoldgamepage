function playRPS(){
var user = document.getElementById("userInput");
user = user.value.toLowerCase();
document.getElementById("userOutput").innerHTML = "User choose " + user;
    var computer = Math.floor(Math.random() * 3)+1;
    document.getElementById("computerOutput").innerHTML ="Computer chose  " + computer;
    if(computer == 1){
        computer = "rock";
        document.getElementById("computerOutput").innerHTML ="Computer chose " + computer;
        
    }else if(computer == 2){
        computer = "paper";
        document.getElementById("computerOutput").innerHTML ="Computer chose " + computer;
        
    }else if(computer == 3){
        computer = "cut";
        document.getElementById("computerOutput").innerHTML ="Computer chose " + computer;
        
    }



    if(user == "rock"){
        if(computer == "rock"){
            document.getElementById("rpsOutput").innerHTML = "It's a tie!";
        }else if(computer == "cut"){
            document.getElementById("rpsOutput").innerHTML = "That's a win for you!";
        }else if(computer == "paper"){
            document.getElementById("rpsOutput").innerHTML = "Oh! Looks like ya lose!!! ahahah!!!";
        }
    }else if(user == "cut"){
        if(computer == "rock"){
            document.getElementById("rpsOutput").innerHTML = "Gee, tough toenails kid, ya lose!";
        }else if(computer == "cut"){
            document.getElementById("rpsOutput").innerHTML = "What a tie!";
        }else if(computer == "paper"){
            document.getElementById("rpsOutput").innerHTML = "You're winner!";
        }
        }else if(user == "paper"){
      if(computer == "rock"){
        document.getElementById("rpsOutput").innerHTML = "You are the win i";
      }else if(computer == "cut"){
        document.getElementById("rpsOutput").innerHTML = "Lose, just like your life";
      }else if(computer == "paper"){
        document.getElementById("rpsOutput").innerHTML = "tie it is";
      }
    }
}
    
