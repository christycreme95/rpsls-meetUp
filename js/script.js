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
let rockLose = ['Paper','Spock'];
let paperLose = ['Scissors', 'Lizard'];
let scissorsLose = ['Rock','Spock'];
let lizardLose = ['Scissors','Rock'];
let spockLose = ['Lizard', 'Paper'];


cpuBtn.addEventListener("click", function () {
    getCPU();
    setTimeout(function(){
        gamePlay.classList.remove('d-none');
    },500);
});

rock.addEventListener("click", function () {
 userAns = "Rock";
 console.log(userAns);
 enter.classList.remove('d-none');

});

paper.addEventListener("click", function () {
userAns = "Paper";
console.log(userAns);
enter.classList.remove('d-none');

});

scissors.addEventListener("click", function () {
userAns = "Scissors";
console.log(userAns);
enter.classList.remove('d-none');
});

lizard.addEventListener("click", function () {
userAns = "Lizard";
console.log(userAns);
enter.classList.remove('d-none');
});

spock.addEventListener("click", function () {
userAns = "Spock";
console.log(userAns);
enter.classList.remove('d-none');
});

enter.addEventListener("click", function () {
    // compare(userAns,cpuAns);
    compare(userAns,cpuAns);
});

home.addEventListener("click", function() {

});
// https://csa2020studentapi.azurewebsites.net/rpsls
async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    cpuAns = await promise.text();
    console.log(cpuAns);
}


function compare(user, cpu){
    console.log("User: " +user, "CPU: "+ cpu);
    gamePlay.classList.add('d-none');

    if(user == cpu){
        console.log("Tie");

    }else if(user=="Rock" && !rockLose.includes(cpu)){
        console.log("User Wins!");

    }else if(user == "Paper" && !paperLose.includes(cpu)){
        console.log("User Wins!");

    }else if(user == "Scissors" && !scissorsLose.includes(cpu)){
        console.log("User Wins!");

    }else if(user == "Lizard" && !lizardLose.includes(cpu)){
        console.log("User Wins!");

    }else if(user == "Spock" && !spockLose.includes(cpu)){
        console.log("User Wins!");
    
    }else{
        console.log("CPU Wins");
        
    }
}