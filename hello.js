let displayresult=document.getElementById("disresult");
const choices =["rock", "paper", "scissors"];
function playgame(playerchoice){
    const compchoice= choices[Math.floor(Math.random() *3 )];
    // console.log(compchoice);
    // console.log(playerchoice);
    if(compchoice==playerchoice){
        displayresult.innerHTML="Draw!"
        displayresult.style.color="black";
    }
    else{
        switch(playerchoice){
            case "rock":
                if(compchoice=="paper"){
                    displayresult.innerHTML="You lose! Computer choice was PAPER.";
                    displayresult.style.color="red";
                    
                }
                else if(compchoice=="scissors"){
                    displayresult.innerHTML="You won! Computer choice was SCISSORS."
                    displayresult.style.color="green";
                }
                break;
                case "paper":
                    if(compchoice=="rock"){
                        displayresult.innerHTML="You won! Computer choice was ROCK."
                        displayresult.style.color="green";
                    }
                    else if(compchoice=="scissors"){
                        displayresult.innerHTML="You lose! Computer choice was SCISSORS."
                        displayresult.style.color="red";
                    }
                    break;
                    case "scissors":
                        if(compchoice=="rock"){
                            displayresult.innerHTML="You lose! Computer choice was ROCK."
                            displayresult.style.color="red";
                        }
                        else if(compchoice=="paper"){
                            displayresult.innerHTML="You won! Computer choice was PAPER."
                            displayresult.style.color="green";
                        }
                        break; 
        }
    }
}
    
