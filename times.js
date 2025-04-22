
let times=require("./dados.json");


function verTimes(){
    times.forEach((time)=> {
        console.log(time.nome + " - jogadores: " + " goleiro - " + time.goleiro + ", Fixo - " + time.fixo + ", Alá Direito - " + time.AlaDireita + ", Alá Esquerdo - " + time.AlaEsquerdo + ", Pivô - " + time.pivo + ", Técnico - " + time.tecnico + ", Vitórias " + time.vitorias + ", Derrotas " + time.derrotas)
    })
}

function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
    console.log("Arquivo criado");
}

function marcarJogos(timeA, timeB, estadio, data, horario){
    let jogos=require("./jogos.json");
    jogo ={
        timeA: timeA,
        timeB: timeB,
        estadio: estadio,
        data: data,
        horario: horario,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs=require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}

marcarJogos("Pato Futsal", "Marreco", "Ginásio Patão", "15/05/2025", "20:00")

//criarArquivo();

function mostrarJogos(){
    let jogos = require("./jogos.json");
    jogos.forEach((jogo)=>{
        console.log(jogo.timeA + " - " + jogo.timeB + " - " + jogo.estadio + " - " + jogo.data + " - " + jogo.horario + " - ")
    });
}
verTimes();
