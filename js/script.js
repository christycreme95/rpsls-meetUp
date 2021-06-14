let start = document.getElementById("start");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let cpu = document.getElementById("cpu");
let enter = document.getElementById("enter");
let btnDiv = document.getElementById("btnDiv");
let cpuAns = '';
let userAns = '';
let win = '';

start.addEventListener("click", function(){
    getCPU();
    // remove the d-none from the btnDiv
    setTimeout(function(){
        btnDiv.classList.remove("d-none");
    },200)
    // using this set timeout so a user can't press the answer buttons until AFTER the fetch happens.
    
});

rock.addEventListener("click", function(){userAns = 'Rock'; if(enter.classList.contains('d-none')) enter.classList.remove('d-none');});
paper.addEventListener("click", function(){userAns = 'Paper'; if(enter.classList.contains('d-none')) enter.classList.remove('d-none');});
scissors.addEventListener("click", function(){userAns = 'Scissors'; if(enter.classList.contains('d-none')) enter.classList.remove('d-none');});
lizard.addEventListener("click", function(){userAns = 'Lizard'; if(enter.classList.contains('d-none')) enter.classList.remove('d-none');});
spock.addEventListener("click", function(){userAns = 'Spock'; if(enter.classList.contains('d-none')) enter.classList.remove('d-none');});
enter.addEventListener("click", function(){
    // this is where we're going to compare you answer to the cpu answer.
    console.log("user = " + userAns, "cpu = " + cpuAns);
});

async function getCPU() {
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    cpuAns = await promise.text();
    console.log(cpuAns);
}

function compare(user, cpu){
    console.log(user, cpu);
}