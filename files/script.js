    const plvr = ["BANANA", "KIWI", "PORTA", "CAMA", "CUBO", "MÁGICA", "TELEVISÃO", "CADEIRA", "ABELHA", "DESENHO", "LIVRO", "AMENDOIM", "GOIABA", "PÃO", "CORAÇÃO", "MÁXIMO", "TECNOLOGIA", "EMBAIXADOR", "ENCANADOR", "GORDURA", "COMEÇO", "INOCENTE", "PLUGUE", "PRETO", "PALAVRA", "ARMARIO", "FIM", "SOFÁ", "ELEVADOR", "COBERTOR"]; // todas as palavras posiveis
    var quantidadeErros = 0; 
    var acertos = 0;
    var tentativas = "";
    palavraSecreta = plvr[Math.floor(Math.random() * 30)]; // palavra escolida

    var c = document.getElementById("forca"); // canvas
    var ctx = c.getContext("2d"); // ctx do canvas
 
        // desenha o layout
    desenhaPoste();
    desenhaBarraSuperior();
    desenhaApoio();
    desenhaTracos();

        // pressionar uma tecla
    window.onkeypress = teclaPressionada;

        // quando pressionar uma tecla:
    function teclaPressionada() {
        if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) { //verificação da letra
            adicionaTentativa(); 
            for (var i = 0; i < palavraSecreta.length; i++) { 
                if (palavraSecreta[i] == (event.key).toUpperCase()) {
                    ctx.font = "35px Arial";
                    ctx.fillText((event.key).toUpperCase(), 20 + (35 * i), 200);
                    acertos++; // acertou
                }
            }
        } else {
            adicionaTentativa();
            quantidadeErros++;
            desenhaBoneco(quantidadeErros);
        }
        verificaFimJogo(); // ver se você perdeu ou ganhou
    }
    
    function adicionaTentativa() { // tentativas
        if (!tentativas.includes(event.key)) {
            tentativas = tentativas + event.key;
            ctx.font = "20px Arial";
            ctx.fillText("Tentativas: " + tentativas.toUpperCase(), 20, 280);
        }
    }

    function verificaFimJogo() { // verificar o fim de jogo
        if (quantidadeErros >= 6) { // perdeu?
            ctx.font = "20px Arial";
            ctx.fillText("Você perdeu! A palavra era: " + palavraSecreta + "!", 200, 100);
            window.onkeypress = null;
            return;
        }  
        if (acertos == palavraSecreta.length) { // ganhou?
            ctx.font = "20px Arial";
            ctx.fillText("Você ganhou!", 200, 100);
            window.onkeypress = null;
            return;
        }
    }


        //desenhar todo o layout
    function desenhaPoste() {
        ctx.moveTo(10, 10);
        ctx.lineTo(10, 100);
        ctx.stroke();
    }

    function desenhaBarraSuperior() {
        ctx.moveTo(10, 10);
        ctx.lineTo(60, 10);
        ctx.stroke();
    }

    function desenhaApoio() {
        ctx.moveTo(60, 10);
        ctx.lineTo(60, 30);
        ctx.stroke();
    }

        // desenhar os traços
    function desenhaTracos() {
        for (var i = 0; i < palavraSecreta.length; i++) {
            ctx.moveTo(20 + (35 * i), 200);
            ctx.lineTo(50 + (35 * i), 200);
            ctx.stroke();  
        }
    }

        //desenhando o boneco com uma simples utilização do switch
    function desenhaBoneco(quantidadeErros) {
        switch (quantidadeErros) {
            case 1: 
                desenhaCabeca();
                break;
            case 2:
                desenhaTronco();
                break;
            case 3:
                desenhaBracoEsquerdo();
                break;
            case 4:
                desenhaBracoDireito();
                break;
            case 5:
                desenhaPernaEsquerda();
                break;
            case 6:
                desenhaPernaDireita();
                break;
        }
    }

        // desenhar o boneco
    function desenhaCabeca() {
        ctx.beginPath();
        ctx.arc(60, 40, 10, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function desenhaTronco() {
        ctx.moveTo(60, 50);
        ctx.lineTo(60, 80);
        ctx.stroke();
    }

    function desenhaBracoEsquerdo() {
        ctx.moveTo(60, 60);
        ctx.lineTo(50, 70);
        ctx.stroke();
    }

    function desenhaBracoDireito() {
        ctx.moveTo(60, 60);
        ctx.lineTo(70, 70);
        ctx.stroke();
    }

    function desenhaPernaEsquerda() {
        ctx.moveTo(60, 80);
        ctx.lineTo(50, 90);
        ctx.stroke();
    }

    function desenhaPernaDireita() {
        ctx.moveTo(60, 80);
        ctx.lineTo(70, 90);
        ctx.stroke();
    }

                // FIM DO SCRIPT