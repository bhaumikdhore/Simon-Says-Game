let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","blue"];

let started=false;  
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keydown",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
})

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;
    
    let ranIndx=Math.floor(Math.random()*4);
    let ranColor=btns[ranIndx];
    let ranbtn=document.querySelector(`#${ranColor}`)
    // console.log(ranbtn);
    // console.log(ranColor);
    // console.log(ranIndx);
    gameseq.push(ranColor);
    console.log(gameseq);
    btnFlash(ranbtn);
}
 
function btnFlash(btn){
    btn.classList.add("flash");
//  setInterval(function(){
//  btn.classList.add("flash");
//  },500);
 
 setTimeout(function(){
    btn.classList.remove("flash");
 },400);
}
// this extra method for reflash which can bypass also
function btnReflash(btn){
    btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },125);

}
function btnpress(){
    let btn=this;
    btnReflash(btn);
    let userColor=btn.getAttribute("id");
    
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1); 
}

let allBtn=document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click", btnpress);
}

function checkAns(index){

 if (userseq[index]===gameseq[index]){
   if(userseq.length===gameseq.length){
   
    setTimeout(levelup,1000);

   }

 }
    else{
    h2.innerHTML=`Game Over!<br> Your score was  ${level - 1}. <br> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="#fdfffc";
    },200)
    reset();
 }

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}