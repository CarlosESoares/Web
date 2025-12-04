// Seleciona todos os botões da calculadora
let botoes = document.querySelectorAll(".btn, .btnC, .equal");

// Seleciona a tela
let tela = document.querySelector("#Tela");

// Função que verifica se valor é operador
function ehOperador(v) {
    return ["+", "-", "*", "/"].includes(v);
}

// Função que verifica se o último caractere da tela é operador
function ultimoEhOperador() {
    let ultimo = tela.innerHTML.slice(-1);
    return ehOperador(ultimo);
}

// Adiciona evento em todos os botões
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let valor = botao.getAttribute("data-value");
        // Se for limpar
        if (valor === "C") {
            tela.innerHTML = "0";
            return;
        }
        // Se for igual
        if (valor === "=") {
            // Impede calcular se terminar em operador
            if (ultimoEhOperador()) return;
            try {
                let resultado = eval(tela.innerHTML);
                tela.innerHTML = resultado;
            } catch {
                tela.innerHTML = "Erro";
            }
            return;
        }

        // Se clicar número após 0, remove o zero inicial
        if (!ehOperador(valor) && tela.innerHTML === "0") {
            tela.innerHTML = valor;
            return;
        }

        // Impede iniciar com operador (exceto "-")
        if (tela.innerHTML === "0" && ehOperador(valor) && valor !== "-") return;

        // Impede operador duplicado consecutivo
        if (ehOperador(valor) && ultimoEhOperador()) return;

        // Adiciona normalmente
        tela.innerHTML += valor;

    });
});
