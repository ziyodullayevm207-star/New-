const glass = document.querySelector(".glass");
const p1 = document.getElementById("page1");
const p2 = document.getElementById("page2");
const p3 = document.getElementById("page3");
const p4 = document.getElementById("page4");
const finish = document.getElementById("finish");

function startLove(){
glass.classList.add("hide");
p1.classList.remove("hide");
}

function nextPage(){
p1.classList.add("hide");
p2.classList.remove("hide");
heartEffect();
}

function nextPage2(){
p2.classList.add("hide");
p3.classList.remove("hide");
heartEffect();
}

function nextPage3(){
p3.classList.add("hide");
p4.classList.remove("hide");
heartEffect();
}

function yesLove(){
p4.classList.add("hide");
finish.classList.remove("hide");
heartEffect();
confetti();
}

const noBtn=document.getElementById("noBtn");

if(noBtn){
noBtn.addEventListener("touchstart",moveButton);
noBtn.addEventListener("mouseover",moveButton);
}

function moveButton(){

const x=Math.random()*220-110;
const y=Math.random()*220-110;

noBtn.style.transform=`translate(${x}px,${y}px)`;
}

function heartEffect(){

for(let i=0;i<20;i++){

let h=document.createElement("span");

h.innerHTML="❤️";

h.style.left=Math.random()*100+"%";

h.style.animationDuration=(Math.random()*5+5)+"s";

h.style.fontSize=(20+Math.random()*25)+"px";

document.querySelector(".hearts").appendChild(h);

setTimeout(()=>{
h.remove();
},10000);

}

}

function confetti(){

for(let i=0;i<60;i++){

let c=document.createElement("div");

c.innerHTML=["❤️","💖","💕","💘","💝"][Math.floor(Math.random()*5)];

c.style.position="fixed";
c.style.left=Math.random()*100+"%";
c.style.top="-30px";
c.style.fontSize=(20+Math.random()*20)+"px";
c.style.transition="4s linear";
c.style.zIndex="999";

document.body.appendChild(c);

setTimeout(()=>{
c.style.top="110%";
c.style.transform=`rotate(${Math.random()*720}deg)`;
},100);

setTimeout(()=>{
c.remove();
},4500);

}

}

heartEffect();

setInterval(heartEffect,5000);