function bla(){
    console.log("olá mundão perdido")
}
b=document.querySelector("button:nth-child(4)");
b.innerHTML="clik em mim 3"
b.addEventListener("click",bla);