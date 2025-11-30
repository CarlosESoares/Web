let btn = document.querySelectorAll(".btn");
let btnop = document.querySelectorAll(".btn op");
let btnequal = document.querySelector(".btne qual");
let tela = document.querySelector("#Tela");
let btnC = document.querySelector(".btnC");

btn.forEach((NumeroSelecionado) =>{
    NumeroSelecionado.addEventListener("click",()=>{
        let valorBtn = NumeroSelecionado.getAttribute("data.value");
        console.log(valorBtn);
        if(valorBtn =='='){
            let valorTela = tela.innerHTML;
            let resultado = eval(valorTela);
            return tela.innerHTML = resultado;
        }
        tela.innerHTML += valorBtn;
    })
})
btnC.addEventListener("click",(LimparTela)=>{
    var limpar = "";
    tela.innerHTML = limpar;
    if(limpar=="C"){
        tela.innerHTML = "";
    }
})
