/*
Created by:

Christy Eang      https://eang.dev/
and
Carlos Gonzalez   https://cgonza.dev/

CodeStack Meetup - 6/16/2021
*/


let cpuBtn = document.getElementById("cpuBtn");
let letsPlay = document.getElementById("letsPlay");
let gamePlay = document.getElementById("gamePlay");
let rules = document.getElementById("rules");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let enter = document.getElementById("enter");
let home = document.getElementById("home");
let yourWeapons = document.getElementById("yourWeapons");
let userScoreAdd = document.getElementById("userScoreAdd");
let cpuScoreAdd = document.getElementById("cpuScoreAdd");
let displayMessage = document.getElementById("displayMessage");
let userScore = 0;
let cpuScore = 0;
let userImg = '';
let cpuImg = '';
let cpuAns = '';
let userAns = '';
let win = '';
let rockLose = ['Paper', 'Spock'];
let paperLose = ['Scissors', 'Lizard'];
let scissorsLose = ['Rock', 'Spock'];
let lizardLose = ['Rock', 'Scissors'];
let spockLose = ['Paper', 'Lizard'];

cpuBtn.addEventListener("click", function () {
    getCPU();
    // remove the d-none from the btnDiv
    setTimeout(function () {
        gamePlay.classList.remove("d-none");
        letsPlay.classList.add("d-none");
    }, 300)
    // using this set timeout so a user can't press the answer buttons until AFTER the fetch happens.
});

rock.addEventListener("click", function () {
    userAns = 'Rock';
    if (enter.classList.contains('d-none')) enter.classList.remove('d-none');
});
paper.addEventListener("click", function () {
    userAns = 'Paper';
    if (enter.classList.contains('d-none')) enter.classList.remove('d-none');
});
scissors.addEventListener("click", function () {
    userAns = 'Scissors';
    if (enter.classList.contains('d-none')) enter.classList.remove('d-none');
});
lizard.addEventListener("click", function () {
    userAns = 'Lizard';
    if (enter.classList.contains('d-none')) enter.classList.remove('d-none');
});
spock.addEventListener("click", function () {
    userAns = 'Spock';
    if (enter.classList.contains('d-none')) enter.classList.remove('d-none');
        
});
enter.addEventListener("click", function () {
    // this is where we're going to compare you answer to the cpu answer.
    compare(userAns, cpuAns);
});
home.addEventListener("click", function() {
    window.location.reload();
})

async function getCPU() {
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    cpuAns = await promise.text();
    // console.log(cpuAns);
}

function displayUserImg(userAns){
    switch (userAns) {
        case 'Rock':
            userImg = document.getElementById("userImg").src = "../images/rockBtn.png";
            break;
        case 'Paper':
            userImg = document.getElementById("userImg").src = "../images/paperBtn.png";
            break;
        case 'Scissors':
            userImg = document.getElementById("userImg").src = "../images/scissorsBtn.png";
            break;
        case 'Lizard':
            userImg = document.getElementById("userImg").src = "../images/lizardBtn.png";
            break;
        case 'Spock':
            userImg = document.getElementById("userImg").src = "../images/spockBtn.png";
            break;
        default: alert('Something is wrong, please refresh the page.');
            break;
    }
}

function displayCpuImg(cpuAns) {
    switch (cpuAns) {
        case 'Rock':
            cpuImg = document.getElementById("cpuImg").src = "../images/rockBtn.png";
            break;
        case 'Paper':
            cpuImg = document.getElementById("cpuImg").src = "../images/paperBtn.png";
            break;
        case 'Scissors':
            cpuImg = document.getElementById("cpuImg").src = "../images/scissorsBtn.png";
            break;
        case 'Lizard':
            cpuImg = document.getElementById("cpuImg").src = "../images/lizardBtn.png";
            break;
        case 'Spock':
            cpuImg = document.getElementById("cpuImg").src = "../images/spockBtn.png";
            break;
        default: alert('Something is wrong, please refresh the page.');
            break;
    }
}

function compare(user, cpu) {
    displayUserImg(user);
    displayCpuImg(cpu);
    
    enter.classList.add('d-none');
    yourWeapons.classList.add('d-none');
    rules.classList.add('d-none');
    home.classList.remove('d-none');

    // console.log("user = " + user, "cpu = " + cpu);

    if (user == cpu) {
        displayMessage.innerText = "It's a draw!";
        // console.log("Tie")

    }
    else if (user == 'Rock' && !rockLose.includes(cpu)) {
        userScore++;
        userScoreAdd.innerText = userScore;
        displayMessage.innerText = "Great job! You Won!";

        // console.log(userScoreAdd);
        // console.log("User Wins");
    }
    else if (user == 'Paper' && !paperLose.includes(cpu)) {
        userScore++;
        userScoreAdd.innerText = userScore;
        displayMessage.innerText = "Great job! You Won!";

        // console.log(userScoreAdd);
        // console.log("User Wins");
    }
    else if (user == 'Scissors' && !scissorsLose.includes(cpu)) {
        userScore++;
        userScoreAdd.innerText = userScore;
        displayMessage.innerText = "Great job! You Won!";

        // console.log(userScoreAdd);
        // console.log("User Wins");
    }
    else if (user == 'Lizard' && !lizardLose.includes(cpu)) {
        userScore++;
        userScoreAdd.innerText = userScore;
        displayMessage.innerText = "Great job! You Won!";

        // console.log(userScoreAdd);
        // console.log("User Wins");
    }
    else if (user == 'Spock' && !spockLose.includes(cpu)) {
        userScore++;
        userScoreAdd.innerText = userScore;
        displayMessage.innerText = "Great job! You Won!";

        // console.log(userScoreAdd);
        // console.log("User Wins");
    }
    else {
        // console.log("CPU Wins");
        cpuScore++;
        cpuScoreAdd.innerText = cpuScore;
        displayMessage.innerText = "Oh snap! You LOST THE GAME!!";
    }
}