var alturaDisponivel = 0;
var larguraDisponivel = 0;
var randomX = 0;
var randomY = 0;
var vidas = 1;

//Variáveis com valores constantemente atualizados
function ajustaTamanhoPalcoJogo() {
    alturaDisponivel = window.innerHeight;
    larguraDisponivel = window.innerWidth;
}

function posicaoRandomicaMosquito() {

    setInterval(function () {

        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove();

            if (vidas > 3) {
                window.location.href = 'fim_de_jogo.html'
            }
            else {
                document.getElementById('vida' + vidas).src = 'Imagens/coracao_vazio.png';

                vidas++;
            }

        }
        //-90 para considerar o tamanho da imagem e assim ela não sair da tela
        randomX = Math.floor(Math.random() * alturaDisponivel) - 90;
        randomY = Math.floor(Math.random() * larguraDisponivel) - 90;

        randomX = randomX < 0 ? 0 : randomX;
        randomY = randomY < 0 ? 0 : randomY;

        desenhaMosquito(randomX, randomY);
    }, 1000);

}

function desenhaMosquito(positionX, positionY) {
    //Criando elemento de forma dinamica
    var imgMosquito = document.createElement('img');
    imgMosquito.src = 'Imagens/mosquito.png';
    imgMosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    imgMosquito.style.top = positionX + 'px';
    imgMosquito.style.left = positionY + 'px';
    imgMosquito.style.position = 'absolute';
    imgMosquito.id = 'mosquito';
    imgMosquito.onclick = function () {
        this.remove();
    };

    document.body.appendChild(imgMosquito);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2);

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

