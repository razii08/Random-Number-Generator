const mybtn=document.getElementById("mybtn");
const label=document.getElementById("label1");
const min=23;
const max=100;

let randomnum;

mybtn.onclick = function(){
    randomnum=Math.floor(Math.random() *max) + min;
    label.textContent=randomnum
}