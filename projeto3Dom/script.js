function jogar() {
    const bloco = document.getElementById("imagens");
    const mensagem = document.getElementById("visor");

    const imagem1 = document.getElementById("img1");
    const imagem2 = document.getElementById("img2");
    const imagem3 = document.getElementById("img3");

    bloco.style.display = "block";
    mensagem.style.display = "block";
    mensagem.innerHTML = "<p>Escolha um caminho!</p>";

    imagem1.addEventListener("click", () => processarRodada(1));
    imagem2.addEventListener("click", () => processarRodada(2));
    imagem3.addEventListener("click", () => processarRodada(3));

    function processarRodada(escolhaJogador) {
        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === pisoQuebrado) {
            mensagem.innerHTML = "<p>Fim de jogo! Você caiu no buraco.</p>";
        } else {
            mensagem.innerHTML = "<p>Parabéns! Você escolheu o caminho certo.</p>";
            imagem1.style.background = "green";
            imagem2.style.background = "green";
            imagem3.style.background = "green";
        }

        // Remove os eventos para evitar múltiplas jogadas
        imagem1.replaceWith(imagem1.cloneNode(true));
        imagem2.replaceWith(imagem2.cloneNode(true));
        imagem3.replaceWith(imagem3.cloneNode(true));
    }
}
