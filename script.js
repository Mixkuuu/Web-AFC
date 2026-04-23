// MENU
function toggleMenu(){
let s=document.getElementById("sidebar");
s.style.left = s.style.left=="0px" ? "-200px":"0px";
}

// NAVIGASI
function goTo(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
toggleMenu();
}

// POPUP
function openPopup(t,n,w,tt,s){
document.getElementById("popup-title").innerText=t;
document.getElementById("pp-nama").innerText=n;
document.getElementById("pp-waifu").innerText=w;
document.getElementById("pp-tt").innerText=tt;
document.getElementById("pp-status").innerText=s;
document.getElementById("popup-bg").style.display="flex";
}

function closePopup(){
document.getElementById("popup-bg").style.display="none";
}

// MUSIC
function toggleMusic(){
let m=document.getElementById("bg-music");
m.paused ? m.play() : m.pause();
}

// PARTICLE
document.addEventListener("click", e=>{
for(let i=0;i<6;i++){
let p=document.createElement("span");
p.className="particle";
p.style.left=e.clientX+"px";
p.style.top=e.clientY+"px";
document.body.appendChild(p);
setTimeout(()=>p.remove(),1000);
}
});
