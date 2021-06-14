let start = document.getElementById("start");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let cpu = document.getElementById("cpu");
let enter = document.getElementById("enter");
let btnDiv = document.getElementById("btnDiv");
let secondAns = '';
let userAns = '';

start.addEventListener("click", function(){
    getCPU();
    // remove the d-none from the btnDiv
    setTimeout(function(){
        btnDiv.classList.remove("d-none");
    },200)
    // using this set timeout so a user can't press the answer buttons until AFTER the fetch happens.
    
});

rock.addEventListener("click", function(){userAns = 'rock';})
paper.addEventListener("click", function(){userAns = 'paper';})
scissors.addEventListener("click", function(){userAns = 'scissors';})
lizard.addEventListener("click", function(){userAns = 'lizard';})
spock.addEventListener("click", function(){userAns = 'spock';})
enter.addEventListener("click", function(){
    
});

async function getCPU() {
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    secondAns = await promise.text();
    console.log(secondAns);
}

