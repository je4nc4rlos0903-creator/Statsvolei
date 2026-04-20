function salvarJogo(jogo){
 let lista=JSON.parse(localStorage.getItem("jogos"))||[];
 lista.push(jogo);
 localStorage.setItem("jogos",JSON.stringify(lista));
}

function pegarJogos(){
 return JSON.parse(localStorage.getItem("jogos"))||[];
}