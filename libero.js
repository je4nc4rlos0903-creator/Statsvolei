let LIBERO = null;
let CENTRAL_SUB = null;

function escolherLibero(players){
 let lista = players.map((p,i)=>`${i} - ${p.nome} (${p.posicao})`).join("\n");
 let escolha = prompt("Escolha o Líbero:\n"+lista);

 LIBERO = players[escolha];
}

function verificarEntradaLibero(){
 let central = jogo.players.find(p=>p.posicao=="Central" && p.posicaoQuadra==1);

 if(central){
  CENTRAL_SUB = central;
  LIBERO.posicaoQuadra = 1;
  central.posicaoQuadra = 0;
 }
}

function verificarSaidaLibero(){
 if(CENTRAL_SUB && CENTRAL_SUB.posicaoQuadra==4){
  LIBERO.posicaoQuadra = 0;
  CENTRAL_SUB.posicaoQuadra = 4;
 }
}