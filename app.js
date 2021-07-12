let userScore=0;
let compScore=0;

const userScore_show=document.getElementById("user");
const compScore_show=document.getElementById("comp");

const scoreBoard_div=document.querySelector(".scbrd");
const result_div=document.querySelector(".result");

const rock_i=document.getElementById("r");
const paper_i=document.getElementById("p");
const scsr_i=document.getElementById("s");


function getComputerChoi(){
    const choices=['r','p','s'];

    const ch=Math.floor(Math.random()*3);
     return choices[ch];
}

function word(letter){
    if(letter=="r") return "Rock";
    else if(letter=="p") return "Paper";
    return "Scissors";
}

function win(usrch,cmpch){
    userScore++;
    userScore_show.innerHTML=userScore;
    compScore_show.innerHTML=compScore;

    const smluser="user".fontsize(3).fontcolor("#d46c04").sub();
    const smlcomp="computer".fontsize(3).fontcolor("#d46c04").sub();

    result_div.innerHTML=word(usrch)+smluser+" beats "+word(cmpch)+smlcomp+" .You win&#x1F389"	;

    document.getElementById(usrch).classList.add('win');

    setTimeout(
        function(){
            document.getElementById(usrch).classList.remove('win');
        },500
    )
}

function lose(usrch,cmpch){
    compScore++;
    userScore_show.innerHTML=userScore;
    compScore_show.innerHTML=compScore;

    const smluser="user".fontsize(3).fontcolor("#d46c04").sub();
    const smlcomp="computer".fontsize(3).fontcolor("#d46c04").sub();

    result_div.innerHTML=word(usrch)+smluser+" beats "+word(cmpch)+smlcomp+" .You lost&#x1F97A"	;

    document.getElementById(usrch).classList.add('lose');

    setTimeout(
        function(){
            document.getElementById(usrch).classList.remove('lose');
        },500
    )

}

function draw(usrch,cmpch){
    userScore_show.innerHTML=userScore;
    compScore_show.innerHTML=compScore;

    const smluser="user".fontsize(3).fontcolor("#d46c04").sub();
    const smlcomp="computer".fontsize(3).fontcolor("#d46c04").sub();

    result_div.innerHTML=word(usrch)+smluser+" beats "+word(cmpch)+smlcomp+" .It's a draw&#x1F642"	;

    document.getElementById(usrch).classList.add('draw');

    setTimeout(
        function(){
            document.getElementById(usrch).classList.remove('draw');
        },500
    )

}

function game(Choice){
    const compChoice=getComputerChoi();

   switch(Choice+compChoice){
        case "rs":
        case "pr":
        case "sp":
          win(Choice,compChoice);
          break;

        case "rp":
        case "ps":
        case "sr":
            lose(Choice,compChoice);
            break;

        default:
            draw(Choice,compChoice);
   }

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