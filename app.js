const userScore=0;
const compScore=0;

const userScore_show=document.getElementById("usleb");
const compScore_show=document.getElementById("coleb");

const scoreBoard_div=document.querySelector(".scbrd");
const result_div=document.querySelector(".beg");

const rock_i=document.getElementById("r");
const paper_i=document.getElementById("p");
const scsr_i=document.getElementById("s");


function getComputerChoi(){
    const choices=['r','p','s'];

    const ch=Math.floor(Math.random()*3);
     return choices[ch];
}

function game(Choice){
    const compChoice=getComputerChoi();
    console.log(Choice);
    console.log(compChoice);
}

function main(){
    rock_i.addEventListener('click' ,function(){
        game("r");
    });
    paper_i.addEventListener('click' ,function(){
        game("p");
    });
    scsr_i.addEventListener('click' ,function(){
        game("s");
    });

}

main();