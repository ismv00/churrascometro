let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function Calcular(){
    let adultos = inputAdultos.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) /2) * crianca;
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) /2) * crianca;

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kgs de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de cerveja </p>`
    resultado.innerHTML += `<p>${qtdTotalBebida/2000} pets de bebida</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else {
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else {
        return 1200;
    }
}

function bebidaPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else {
        return 1000;
    }
}