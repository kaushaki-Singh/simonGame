
let h3 = document.querySelector("h3")

let btns = ["yellow", "red", "purple", "green"];

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game is started ');
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 200)
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200)
}

function levelUp() {
    userSeq=[];
    level++;
    h3.innerText = `level ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randColor)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx){
    //console.log("curr level:",level);
    if (userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    } else{
        h3.innerHTML=`Game Over!<br> <b> Your Score - ${level}</b> <br> Press any key to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },100);
        reset();
  }
    
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



