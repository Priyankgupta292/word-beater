let cword=document.getElementById("current-word");
let timedisplay=document.getElementById("time");
let scoredisplay=document.getElementById("score");
let message=document.getElementById("message");



let time=5;
let score=0;

let words=[
    "hello",
    "HI",
    "Avenger",
    "javascript",
    "MERN",
    "Cool",
    "sid",
    "html",
    "css",
    "github",
    "git-lab"
]
function showword(){
    let index=Math.floor(Math.random()*words.length);
    cword.innerHTML=words[index]
    

}

window.addEventListener("DOMContentLoaded",showword);

let inp=document.getElementById("word-input");

function change(e){
    if(e.target.value===cword.innerHTML){
        message.innerHTML="success";
        showword();
        e.target.value="";
        score++;
        scoredisplay.innerHTML=score;
        time=5;
    }
    else{
        message.innerHTML="";

    }
    
    
}

inp.addEventListener("input",change);

setInterval(()=>{
    if(time>=0){
    timedisplay.innerHTML=time;
    time--;
    }
    else{
        message.innerHTML="GAME OVER";
        
    }
},1000)






