var listaDeNumeroSorteado = [];
var numeroLimite = 100;
var numeroSecreto = gerarNumeroAleatorio();
var tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Chinese Male', {rate:1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Secret number 💹');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    var chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        var palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        var mensagemTentativas = `você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
      }
       tentativas++;
       limparCampo();
    }
}

function gerarNumeroAleatorio() {
    var numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    var quantidadeDeElementosNaLista = listaDeNumeroSorteado.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteado = [];
    }


    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();   
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}