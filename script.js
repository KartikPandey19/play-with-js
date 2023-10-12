let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);

const lastGuess = document.querySelector(".lastGuess");
const help = document.querySelector(".help");
const result = document.querySelector(".result");
let resetButton = document.querySelector(".newGame");

const submitBtn = document.querySelector(".submitBtn");
const guessField = document.querySelector(".guessField");


let guessCount = 1;

submitBtn.addEventListener('click',checkGuess)

function checkGuess(){
    const userGuess = Number(guessField.value);
    if(userGuess===randomNumber){
        result.textContent="Congratulation! You got it right";
        result.style.backgroundColor="green";
        help.textContent="";
        setGameOver();
    }else if(guessCount===10){
        result.textContent="!!!GAME OVER";
        help.textContent="";
        setGameOver();
    }else{
        result.textContent="oops! Wrong";
        result.style.backgroundColor="red";
        if(userGuess<randomNumber){
            help.textContent="Last Guess was too low!";  
        }else{
            help.textContent="Last Guess was too high!";  

        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();  
}

function setGameOver(){
    guessField.disabled ="true";
    submitBtn.disabled = "true";
    // resetButton = document.createElement("button");
    // resetButton.textContent = "Start new Game";
    // document.body.append(resetButton);
    
    resetButton.style.visibility="visible";    
    resetButton.addEventListener("click",resetGame);
   
}

function resetGame(){
    guessCount=1;

    const resetParas = document.querySelectorAll(".resultArea p");
    for(const resetPara of resetParas){
        resetPara.textContent=""
    }
    resetButton.style.visibility="hidden"

    guessField.disabled =false;
    submitBtn.disabled = false;
    guessField.value="";
    guessField.focus();

    result.style.backgroundColor="white";

    randomNumber = Math.floor(Math.random()*100);

}