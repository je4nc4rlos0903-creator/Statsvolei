function pegarTimes(){
 return JSON.parse(localStorage.getItem("times"))||[];
}

function salvarTimes(t){
 localStorage.setItem("times",JSON.stringify(t));
}

function criarTime(){
 let nome=prompt("Nome do time:");
 if(!nome)return;

 let times=pegarTimes();
 times.push({nome,players:[]});

 salvarTimes(times);
 renderTimes();
}

function renderTimes(){
 let times=pegarTimes();

 listaJogadores.innerHTML=`<button onclick="criarTime()">+ Criar Time</button>`;

 listaJogadores.innerHTML+=times.map((t,i)=>`
 <div>
  <b>${t.nome}</b>
  <button onclick="abrirTime(${i})">👁</button>
 </div>
 `).join("");
}

function abrirTime(i){
 let times=pegarTimes();
 let t=times[i];

 listaJogadores.innerHTML=`
 <h3>${t.nome}</h3>
 <button onclick="addJogadorTime(${i})">+ Jogador</button>
 `;

 listaJogadores.innerHTML+=t.players.map((p,idx)=>`
 <div>
  #${p.numero} ${p.nome} (${p.posicao})
  <button onclick="editarJogador(${i},${idx})">✏️</button>
 </div>
 `).join("");
}

function addJogadorTime(i){
 let nome=prompt("Nome:");
 let numero=prompt("Número:");
 let pos=prompt("Posição (Ponteiro, Oposto, Levantador, Libero, Central)");

 let times=pegarTimes();

 times[i].players.push({
  nome,
  numero,
  posicao:pos,
  posicaoQuadra:0,
  erro:{saque:0,recepcao:0,defesa:0,levantamento:0,ataque:0,bloqueio:0},
  acerto:{saque:0,recepcao:0,defesa:0,levantamento:0,ataque:0,bloqueio:0}
 });

 salvarTimes(times);
 abrirTime(i);
}

// 🔥 NOVO: EDITAR
function editarJogador(timeIndex, playerIndex){
 let times=pegarTimes();

 let p = times[timeIndex].players[playerIndex];

 let nome = prompt("Nome:", p.nome);
 let numero = prompt("Número:", p.numero);
 let pos = prompt("Posição:", p.posicao);

 if(nome) p.nome = nome;
 if(numero) p.numero = numero;
 if(pos) p.posicao = pos;

 salvarTimes(times);
 abrirTime(timeIndex);
}